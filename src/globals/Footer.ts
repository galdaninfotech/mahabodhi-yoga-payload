import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'about',
      type: 'group',
      fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
        },
      ],
    },
    {
      name: 'newsLetter',
      type: 'textarea',
    },
    {
      name: 'moreLinks',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },

  ],
}
