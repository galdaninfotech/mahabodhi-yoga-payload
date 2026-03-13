import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post8Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Inter-Faith Harmony and Inner Peace: Meditation Beyond the Mat',
    slug: 'inter-faith-harmony-and-inner-peace-meditation-beyond-the-mat',
    _status: 'published',
    createdAt: '2024-01-29T00:00:10.000Z',
    publishedAt: '2024-01-29T00:05:10.000Z',
    updatedAt: '2024-01-29T00:00:10.000Z',
    heroImage: mediaMap['post-1.jpg'].id,
    categories: categoryIds,
    authors: authorIds,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Inter-Faith Harmony and Inner Peace: Meditation Beyond the Mat',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  }
}
