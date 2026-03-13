import type { GlobalConfig } from 'payload'

export const NewsSidebar: GlobalConfig = {
  slug: 'news-sidebar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Latest News',
    },
    {
      name: 'limit',
      type: 'number',
      required: true,
      defaultValue: 5,
      admin: {
        description: 'Number of latest news posts to display in the sidebar.',
      },
    },
  ],
}
