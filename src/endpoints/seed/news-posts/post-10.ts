import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post10Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Holistic Education of the Mind and Body: How Meditation Supports Daily Life',
    slug: 'holistic-education-of-the-mind-and-body-how-meditation-supports-daily-life',
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
                text: 'At Mahabodhi Yoga and Meditation Centre, meditation is more than a retreat practice—it\’s a lifelong discipline that nurtures clarity and compassion in everyday living.',
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
