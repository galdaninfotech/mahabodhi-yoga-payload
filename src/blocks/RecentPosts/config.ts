import type { Block } from 'payload'

export const RecentPosts: Block = {
  slug: 'recentPosts',
  imageURL: '/images/blocks/recentPosts.jpg',
  imageAltText: 'Thumbnail for recentPosts block',
  labels: {
    singular: 'Recent  Post',
    plural: 'Recent  Posts',
  },
  interfaceName: 'RecentPosts',
  fields: [
    {
      name: 'limit',
      label: 'Limit',
      type: 'number',
      defaultValue: 3,
      admin: {
        step: 1,
        description: 'Maximum number of posts to display',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Choose categories to filter recent posts',
      },
    },
  ],
}