import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post2Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Global Shri Ram Katha at Bharat Mandapam',
    slug: 'global-shri-ram-katha-at-bharat-mandapam',
    _status: 'published',
    createdAt: '2025-01-29T00:00:10.000Z',
    publishedAt: '2025-01-29T00:05:10.000Z',
    updatedAt: '2025-01-29T00:00:10.000Z',
    heroImage: mediaMap['post-2.jpg'].id,
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
                text: 'Global Shri Ram Katha at Bharat Mandapam',
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
