import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post3Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Mahasaddhammajotikadhaja Award for Bhikkhu Sanghasena',
    slug: 'mahasaddhammajotikadhaja-award-for-bhikkhu-sanghasena',
    _status: 'published',
    createdAt: '2025-01-18T00:00:10.000Z',
    publishedAt: '2025-01-18T00:05:10.000Z',
    updatedAt: '2025-01-18T00:00:10.000Z',
    heroImage: mediaMap['post-3.jpg'].id,
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
                text: 'In a moment of great honour and international recognition, renowned Buddhist spiritual leader and Founder of the Mahabodhi International Centre, Leh–Ladakh, Bhikkhu Sanghasena was formally felicitated by H.H. Sitagu Sayadaw and Dr. Ashin Nyanissara, one of the most revered Buddhist scholars of Myanmar. On the occasion, Bhikkhu Sanghasena was conferred the Mahasaddhammajotikadhaja title, among the highest religious and humanitarian honours bestowed by the Government of the Republic of the Union of Myanmar.',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The prestigious title is awarded to individuals who have made exceptional contributions to the promotion of the Buddha Dhamma, social harmony, and selfless humanitarian service. Bhikkhu Sanghasena was recognised for his decades-long commitment to spiritual leadership, interfaith harmony, education, healthcare, environmental protection, and the upliftment of underprivileged communities, particularly in the remote Himalayan region of Ladakh.',
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
                    text: 'During the felicitation ceremony, H.H. Sitagu Sayadaw and Dr. Ashin Nyanissara lauded Bhikkhu Sanghasena\'s tireless efforts in spreading the message of compassion, non-violence, and universal brotherhood through practical service. They highlighted his work through the Mahabodhi International Centre, which has emerged as a beacon of hope by running educational institutions, healthcare initiatives, and social welfare programmes for people from diverse backgrounds.',
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
                    text: 'Expressing his gratitude, Bhikkhu Sanghasena dedicated the honour to all those who have supported humanitarian causes, stating that the recognition strengthens his resolve to serve humanity with greater compassion and humility. He reaffirmed his commitment to working for peace, harmony, and the welfare of all beings, transcending national and religious boundaries.',
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
                    text: 'The conferment of the Mahasaddhammajotikadaa title marks a proud moment for Ladakh and India, underscoring the global impact of Bhikkhu Sanghasena\'s humanitarian and spiritual work. The honour further strengthens the deep spiritual and cultural ties between India and Myanmar, rooted in the shared legacy of Buddhism and the timeless values of compassion and service.',
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
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  }
}
