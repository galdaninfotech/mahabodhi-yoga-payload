import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  IndentFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  UnderlineFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from '@/collections/Categories'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Users } from '@/collections/Users'
import { Footer } from '@/globals/Footer'
import { Header } from '@/globals/Header'
import { plugins } from './plugins'

import { Newsletters } from './collections/Newsletters'
import { Subscribers } from './collections/Subscribers'
import { SubscriberGroups } from './collections/SubscriberGroups'
import { NewsletterLogs } from './collections/NewsletterLogs'
import { Settings } from './globals/Settings/config'

import { SambodhiRetreatCentre } from './globals/SambodhiRetreatCentre/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin#BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard#BeforeDashboard'],
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Pages,
    Posts,
    Categories,
    Media,
    Newsletters,
    Subscribers,
    SubscriberGroups,
    NewsletterLogs,],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  editor: lexicalEditor({
    features: () => {
      return [
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        OrderedListFeature(),
        UnorderedListFeature(),
        LinkFeature({
          enabledCollections: ['pages'],
          fields: ({ defaultFields }) => {
            const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
              if ('name' in field && field.name === 'url') return false
              return true
            })

            return [
              ...defaultFieldsWithoutUrl,
              {
                name: 'url',
                type: 'text',
                admin: {
                  condition: ({ linkType }) => linkType !== 'internal',
                },
                label: ({ t }) => t('fields:enterURL'),
                required: true,
              },
            ]
          },
        }),
        IndentFeature(),
        EXPERIMENTAL_TableFeature(),
      ]
    },
  }),
  //email: nodemailerAdapter(),
  endpoints: [],
  globals: [Header, Footer, Settings, SambodhiRetreatCentre],
  plugins,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    autoRun: [
      {
        // cron: '* * * * *', // Run every minute to check for new jobs
        cron: '*/5 * * * *', // Run every 5 minutes
        limit: 10, // limit jobs to process each run
        queue: 'default',
      },
    ],
    tasks: [
      {
        slug: 'sendNewsletterEmail',
        label: 'Send Newsletter Email',
        retries: 3,
        inputSchema: [
          {
            name: 'to',
            type: 'text',
            required: true,
          },
          {
            name: 'subject',
            type: 'text',
            required: true,
          },
          {
            name: 'html',
            type: 'textarea',
            required: true,
          },
          {
            name: 'newsletterId',
            type: 'text',
            required: true,
          },
          {
            name: 'subscriberId',
            type: 'text',
            required: true,
          },
        ],
        handler: async ({ input, job, req }) => {
          const { newsletterId, subscriberId, to, subject, html } = input
          
          // Convert IDs to numbers if they are numeric strings if necessary
          const nId = !isNaN(Number(newsletterId)) ? Number(newsletterId) : newsletterId
          const sId = !isNaN(Number(subscriberId)) ? Number(subscriberId) : subscriberId

          try {
            await req.payload.sendEmail({
              to,
              subject,
              html,
            })

            // Log success
            await req.payload.create({
              collection: 'newsletter-logs',
              data: {
                newsletter: nId,
                subscriber: sId,
                sentAt: new Date().toISOString(),
                status: 'success',
              },
            })

            return {
              output: {
                success: true,
              },
            }
          } catch (error: any) {
            console.error(`Failed to send email to ${to}:`, error)
            
            // Log failure
            try {
              await req.payload.create({
                collection: 'newsletter-logs',
                data: {
                  newsletter: nId,
                  subscriber: sId,
                  sentAt: new Date().toISOString(),
                  status: 'failed',
                  errorMessage: error.message || 'Unknown error',
                },
              })
            } catch (logError) {
              console.error('Failed to create error log:', logError)
            }

            throw error
          }
        },
      },
    ],
    jobsCollectionOverrides: ({ defaultJobsCollection }) => {
      if (!defaultJobsCollection.admin) {
        defaultJobsCollection.admin = {}
      }

      defaultJobsCollection.admin.hidden = false
      return defaultJobsCollection
    },
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // sharp,
})
