import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post4Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Ven. Bhikkhu Sanghasena Explores Compassion-Centered Education at Indus University',
    slug: 'ven-bhikkhu-sanghasena-explores-compassion-centered-education-at-indus-university',
    _status: 'published',
    createdAt: '2025-01-29T00:00:10.000Z',
    publishedAt: '2025-01-29T00:05:10.000Z',
    updatedAt: '2025-01-29T00:00:10.000Z',
    heroImage: mediaMap['post-4.jpg'].id,
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
                text: 'Ven. Bhikkhu Sanghasena visited Indus University, Ahmedabad, where he held an important and forward-looking discussion with Dr. Nagesh Bhandari, Founder of Indus University, along with members of the university leadership and academic community.',
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
                text: 'The meeting focused on the proposed establishment of Mahakaruna Vishwa Vidyapeetham (University of Great Compassion), envisioned as an institution dedicated to integrating academic excellence with compassion-centered education. Discussions also explored the possibility of offering online courses on Mahakaruna, aimed at reaching a global audience and promoting values of empathy, ethical leadership, and social responsibility.',
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
                text: 'A wide range of contemporary global issues were deliberated upon during the interaction, including current world affairs and the growing need for collaborative efforts to promote peace. Both sides reflected on practical ways to work together through “compassion in action” programs, emphasizing education as a powerful tool for nurturing harmony and understanding in society.',
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
                text: 'During the visit, Dr. Nagesh Bhandari graciously took Ven. Bhikkhu Sanghasena on a guided tour of the Indus University campus, highlighting its academic infrastructure, research facilities, and various ongoing development initiatives. Ven. Bhikkhu Sanghasena appreciated the university\'s vision, growth, and commitment to quality higher education.',
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
                text: 'The visit marked a significant step toward potential collaboration between Indus University and Mahabodhi International Meditation Centre, with a shared aspiration to foster academic excellence guided by spiritual values and compassion for the well-being of humanity.',
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
