import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const LinksSidebar: GlobalConfig = {
  slug: 'links-sidebar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
