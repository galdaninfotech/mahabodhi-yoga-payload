import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post12Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Mahabodhi Yoga Institute Teachers Undertake Advanced Training Course at The Yoga Institue, Mumbai',
    slug: 'mahabodhi-yoga-institute-teachers-undertake-advanced-training-course-at-the-yoga-institue-mumbai',
    _status: 'published',
    createdAt: '2024-03-09T00:00:10.000Z',
    publishedAt: '2024-03-09T00:05:10.000Z',
    updatedAt: '2024-03-09T00:00:10.000Z',
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
                text: 'We are happy to share that two of our dedicated yoga teachers Ms. Tashi Chorol & Ms. Tsetan Choskit from Mahabodhi Yoga Institute are currently undergoing an advanced training programme at The Yoga Institute, Mumbai, under the guidance of the renowned yoga master Dr. Hansa ji Yogendra, President of the world\s oldest yoga institute. They have been deputed from our institute with the blessings and guidance of our Guruji, Ven. Bhikkhu Sanghasena, a recipient of the prestigious PM Yoga Award. This training is part of our ongoing commitment to deepen authentic yogic understanding, strengthen teaching standards, and uphold the classical values of yoga in both practice and pedagogy.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'We believe this learning journey will enrich our institute and benefit our students and the wider community, as these teachers return with refined skills, deeper insight, and renewed inspiration.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'We sincerely thank Dr. Hansa ji Yogendra for this meaningful collaboration and look forward to working together to promote the total health and well-being of humanity.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'We wish them a meaningful and transformative training experience.',
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
