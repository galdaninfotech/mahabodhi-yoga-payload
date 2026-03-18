import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
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
import { ProgrammeCategories } from '@/collections/ProgrammeCategories'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Users } from '@/collections/Users'
import { Programmes } from '@/collections/Programmes'
import { Footer } from '@/globals/Footer'
import { Header } from '@/globals/Header'
import { LinksSidebar } from '@/globals/LinksSidebar'
import { NewsSidebar } from '@/globals/NewsSidebar'
import { jobsDebugAuthEndpoint } from '@/endpoints/jobsDebugAuth'
import { plugins } from './plugins'
import { getServerSideURL } from './utilities/getURL'

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
      actions: ['@/components/AdminHelp'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      // beforeDashboard: ['@/components/BeforeDashboard#BeforeDashboard'],
      graphics: {
        Logo: '@/admin/components/CustomLogo',
        Icon: '@/admin/components/CustomLogo',
      },
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Pages,
    Posts,
    Categories,
    ProgrammeCategories,
    Programmes,
    Media,
    Newsletters,
    Subscribers,
    SubscriberGroups,
    NewsletterLogs,],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: false,
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
  endpoints: [jobsDebugAuthEndpoint],
  globals: [Header, Footer, Settings, SambodhiRetreatCentre, LinksSidebar, NewsSidebar],
  plugins,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'info@ladakhmoto.com',
    defaultFromName: process.env.SMTP_FROM_NAME || 'Ladakh Moto',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        const cronSecret = process.env.CRON_SECRET
        if (!cronSecret) return false

        const authHeader = req.headers.get('authorization')
        const customHeader = req.headers.get('x-cron-secret')
        const authMatches = authHeader === `Bearer ${cronSecret}`
        const customMatches = customHeader === cronSecret

        console.log(
          'Jobs access check:',
          JSON.stringify({
            hasCronSecret: Boolean(cronSecret),
            cronSecretLength: cronSecret.length,
            hasAuthHeader: Boolean(authHeader),
            authHeaderLength: authHeader?.length ?? 0,
            hasCustomHeader: Boolean(customHeader),
            customHeaderLength: customHeader?.length ?? 0,
            authMatches,
            customMatches,
          }),
        )

        return authMatches || customMatches
      },
    },
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

          // Convert IDs to numbers if they are numeric strings, as SQLite uses integers for IDs
          const nId = !isNaN(Number(newsletterId)) ? Number(newsletterId) : newsletterId
          const sId = !isNaN(Number(subscriberId)) ? Number(subscriberId) : subscriberId

          try {
            // Fetch the newsletter to check for PDF attachment
            const newsletter = await req.payload.findByID({
              collection: 'newsletters',
              id: nId,
              depth: 1, // To populate the heroImage/predesignedPDF media
            })

            const attachments: any[] = []

            if (newsletter && newsletter.predesignedPDF && typeof newsletter.predesignedPDF === 'object') {
              const pdf = newsletter.predesignedPDF
              
              // Sanitize title for filename
              const safeTitle = newsletter.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
              const filename = `${safeTitle}.pdf`

              try {
                // Fetch the file buffer directly to avoid HTTP fetching issues during background jobs
                const fileRes = await fetch(pdf.url!.startsWith('http') ? pdf.url! : `${getServerSideURL()}${pdf.url}`)
                if (fileRes.ok) {
                  const arrayBuffer = await fileRes.arrayBuffer()
                  attachments.push({
                    filename,
                    content: Buffer.from(arrayBuffer),
                    contentType: pdf.mimeType || 'application/pdf',
                  })
                }
              } catch (fetchError) {
                console.error('Failed to fetch PDF buffer, falling back to path:', fetchError)
                // Fallback to path if buffer fetch fails
                const serverURL = getServerSideURL()
                const attachmentPath = pdf.url!.startsWith('http') ? pdf.url! : `${serverURL}${pdf.url}`
                attachments.push({
                  filename,
                  path: attachmentPath,
                })
              }
            }

            await req.payload.sendEmail({
              to,
              subject,
              html,
              attachments,
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
