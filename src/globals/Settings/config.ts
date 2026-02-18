import type { GlobalConfig } from 'payload'
import { adminOnly } from '@/access/adminOnly'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    group: 'Admin',
  },
  endpoints: [
    {
      path: '/prune-subscribers',
      method: 'post',
      handler: async (req) => {
        const { payload } = req
        
        try {
          // Find subscribers with more than 1 group
          // Note: In SQLite/Drizzle, we might need to fetch all and filter if complex array queries are limited
          const subscribers = await payload.find({
            collection: 'subscribers',
            limit: 0,
            pagination: false,
            depth: 0,
          })

          const toUpdate = subscribers.docs.filter(
            (sub: any) => sub.groups && Array.isArray(sub.groups) && sub.groups.length > 1
          )

          if (toUpdate.length === 0) {
            return Response.json({ message: 'No subscribers found requiring pruning.' })
          }

          const updatePromises = toUpdate.map((sub: any) => 
            payload.update({
              collection: 'subscribers',
              id: sub.id,
              data: {
                groups: [sub.groups[0]], // Keep only the first group
              },
            })
          )

          await Promise.all(updatePromises)

          return Response.json({ 
            message: `Successfully pruned ${toUpdate.length} subscribers to single group mode.` 
          })
        } catch (error: any) {
          return Response.json({ error: error.message || 'Internal server error' }, { status: 500 })
        }
      },
    },
  ],
  fields: [
    {
      name: 'newsletter',
      type: 'group',
      label: 'Newsletter Settings',
      fields: [
        {
          name: 'subscriberGroupMode',
          type: 'select',
          label: 'Subscriber Group Mode',
          defaultValue: 'single',
          options: [
            { label: 'Single Group per Subscriber', value: 'single' },
            { label: 'Multiple Groups per Subscriber', value: 'multiple' },
          ],
          admin: {
            description: 'Choose if subscribers can belong to only one group or many.',
          },
        },
        {
          name: 'pruneSubscribers',
          type: 'ui',
          admin: {
            components: {
              Field: '@/admin/components/PruneSubscribersButton',
            },
            condition: (data) => data?.newsletter?.subscriberGroupMode === 'single',
          },
        },
      ],
    },
  ],
}
