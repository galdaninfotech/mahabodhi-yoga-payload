import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post11Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Yoga in Ladakh: A Unique Blend of Ancient Practice and Mountain Air',
    slug: 'yoga-in-ladakh-a-unique-blend-of-ancient-practice-and-mountain-air',
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
                text: 'Practicing yoga in Ladakh is unlike anywhere else in the world. Surrounded by snow-clad peaks and golden dunes, the Mahabodhi Yoga Centre offers a deeply transformative experience where body, breath, and nature move in perfect harmony.',
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
