import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { adminOnly } from '@/access/adminOnly'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'

import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Newsletters: CollectionConfig<'posts'> = {
  slug: 'newsletters',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOrPublishedStatus,
    update: adminOnly,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'newsletters',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'newsletters',
        req,
      }),
    useAsTitle: 'title',
    components: {
      edit: {
        beforeDocumentControls: ['@/admin/components/SendNewsletterButton'],
      },
    },
    group: 'Newsletter Management',
  
  },
  endpoints: [
    {
      path: '/:id/send',
      method: 'post',
      handler: async (req) => {
        const { payload } = req
        // In Payload 3.0, routeParams is part of req
        const id = req.routeParams?.id as string
        
        let body: any = {}
        if (req.json) {
          body = await req.json()
        }
        
        const groupId = body?.groupId
        const subscriberId = body?.subscriberId
        const subscriberIds = body?.subscriberIds

        try {
          // Fetch newsletter
          const newsletter = await payload.findByID({
            collection: 'newsletters',
            id,
          })

          if (!newsletter) {
            return Response.json({ error: 'Newsletter not found' }, { status: 404 })
          }

          if (newsletter._status !== 'published') {
            return Response.json({ error: 'Only published newsletters can be sent.' }, { status: 400 })
          }

          // Fetch subscribers
          let where = {}
          if (subscriberIds && Array.isArray(subscriberIds) && subscriberIds.length > 0) {
            where = {
              id: {
                in: subscriberIds,
              },
            }
          } else if (subscriberId) {
            where = {
              id: {
                equals: subscriberId,
              },
            }
          } else if (groupId) {
            where = {
              groups: {
                in: [groupId],
              },
            }
          }

          const subscribers = await payload.find({
            collection: 'subscribers',
            where: {
              and: [
                where,
                {
                  active: {
                    equals: true,
                  },
                },
              ],
            },
            pagination: false,
          })

          if (subscribers.docs.length === 0) {
            return Response.json({
              message: 'No subscribers found for the selected criteria.',
            })
          }

          // Check for existing successful logs to prevent duplicates
          const existingLogs = await payload.find({
            collection: 'newsletter-logs',
            where: {
              and: [
                { newsletter: { equals: id } },
                { status: { equals: 'success' } },
                {
                  subscriber: {
                    in: subscribers.docs.map((s: any) => s.id),
                  },
                },
              ],
            },
            limit: 0,
            pagination: false,
          })

          const alreadySentIds = new Set(existingLogs.docs.map((log: any) => 
            typeof log.subscriber === 'object' ? log.subscriber.id : log.subscriber
          ))

          const subscribersToQueue = subscribers.docs.filter((s: any) => !alreadySentIds.has(s.id))

          if (subscribersToQueue.length === 0) {
            return Response.json({
              message: 'All selected subscribers have already received this newsletter.',
            })
          }

          // Queue email jobs
          const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
          const newsletterURL = `${serverURL}/newsletters/${newsletter.slug}`

          const emailHtml = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
              <h1 style="color: #333;">${newsletter.title}</h1>
              <p>Hello,</p>
              <p>We're excited to share our latest newsletter with you!</p>
              <div style="margin: 30px 0;">
                <a href="${newsletterURL}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                  Read Newsletter Online
                </a>
              </div>
              <p style="color: #666; font-size: 14px;">
                Mahabodhi Yoga Centre<br/>
                Teaching Classical Yoga for Holistic Health
              </p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
              <p style="color: #999; font-size: 12px;">
                You are receiving this email because you subscribed to our newsletter.
              </p>
            </div>
          `

          const jobPromises = subscribersToQueue.map((subscriber: any) => {
            return payload.jobs.queue({
              task: 'sendNewsletterEmail',
              input: {
                to: subscriber.email,
                subject: newsletter.title,
                html: emailHtml,
                newsletterId: id,
                subscriberId: subscriber.id,
              },
            })
          })

          await Promise.all(jobPromises)

          let message = `Newsletter "${newsletter.title}" has been queued for delivery to ${subscribersToQueue.length} subscribers.`
          if (alreadySentIds.size > 0) {
            message += ` (${alreadySentIds.size} subscribers skipped as they already received it).`
          }

          return Response.json({ message })
        } catch (error: any) {
          console.error('Error sending newsletter:', error)
          return Response.json({ error: error.message || 'Internal server error' }, { status: 500 })
        }
      },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
            {
              name: 'predesignedPDF',
              type: 'upload',
              relationTo: 'media',
              label: 'Upload PDF',
              filterOptions: {
                mimeType: {
                  equals: 'application/pdf',
                },
              },
            },
          ],
        },
        {
          label: 'Sent History',
          fields: [
            {
              name: 'sentHistory',
              type: 'ui',
              admin: {
                components: {
                  Field: '@/admin/components/NewsletterSentHistory',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
        initCollapsed: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
