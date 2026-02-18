import { RequiredDataFromCollectionSlug } from 'payload'

export const post1Data = (heroImageId: number, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => ({
  title: 'Introduction to Classical Yoga',
  slug: 'intro-to-yoga',
  _status: 'published',
  heroImage: heroImageId,
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
              text: 'Classical Yoga is a holistic system for physical, mental, and spiritual well-being.',
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
})
