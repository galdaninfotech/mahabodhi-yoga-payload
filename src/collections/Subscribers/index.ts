import type { CollectionConfig } from 'payload'
import { adminOnly } from '@/access/adminOnly'
import { ValidationError } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'active', 'groups', 'createdAt'],
    group: 'Newsletter Management',
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.groups && Array.isArray(data.groups) && data.groups.length > 1) {
          try {
            const settings = await req.payload.findGlobal({
              slug: 'settings',
            })
            
            const mode = settings?.newsletter?.subscriberGroupMode
            
            if (mode === 'single') {
              throw new ValidationError({
                errors: [
                  {
                    message: 'Only one group can be selected when Subscriber Group Mode is set to Single.',
                    path: 'groups',
                  },
                ],
              })
            }
          } catch (err) {
            if (err instanceof ValidationError) throw err
            console.error('Error fetching settings global in beforeChange:', err)
          }
        }
        return data
      }
    ]
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Subscriber Info',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'email',
              type: 'email',
              required: true,
              unique: true,
            },
            {
              name: 'active',
              type: 'checkbox',
              defaultValue: false,
              label: 'Active',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'groups',
              type: 'relationship',
              relationTo: 'subscriber-groups',
              hasMany: true,
            },
          ],
        },
        {
          label: 'History',
          fields: [
            {
              name: 'history',
              type: 'ui',
              admin: {
                components: {
                  Field: '@/admin/components/SubscriberHistory',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
