import type { CollectionConfig } from 'payload'
import { adminOnly } from '@/access/adminOnly'

export const NewsletterLogs: CollectionConfig = {
  slug: 'newsletter-logs',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    useAsTitle: 'sentAt',
    defaultColumns: ['newsletter', 'subscriber', 'sentAt', 'status'],
    group: 'Newsletter Management',
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'newsletter',
      type: 'relationship',
      relationTo: 'newsletters',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'subscriber',
      type: 'relationship',
      relationTo: 'subscribers',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'sentAt',
      type: 'date',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Success', value: 'success' },
        { label: 'Failed', value: 'failed' },
      ],
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'errorMessage',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
}
