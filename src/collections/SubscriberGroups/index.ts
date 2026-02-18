import type { CollectionConfig } from 'payload'
import { adminOnly } from '@/access/adminOnly'

export const SubscriberGroups: CollectionConfig = {
  slug: 'subscriber-groups',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Newsletter Management',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
