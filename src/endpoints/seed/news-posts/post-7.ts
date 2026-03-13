import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post7Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'PM Narendra Modi Felicitates Ven. Bhikkhu Sanghasena with PM Yoga Award',
    slug: 'pm-narendra-modi-felicitates-ven-bhikkhu-sanghasena-with-pm-yoga-award',
    _status: 'published',
    createdAt: '2024-12-21T00:00:10.000Z',
    publishedAt: '2024-12-21T00:05:10.000Z',
    updatedAt: '2024-12-21T00:00:10.000Z',
    heroImage: mediaMap['post-7.jpg'].id,
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
                text: 'The World Meditation Day was observed with reverence and enthusiasm at Mahabodhi International Meditation Centre, bringing together spiritual leaders, senior government officials, defence personnel, academicians, health professionals, students, and local residents.',
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
                text: 'The programme was graced by the presence of Ven. Bhikkhu Sanghasena, along with the Chief Guests Air Commodore Sanjay Prabhu, Vayu Sena Medal, Air Officer Commanding, 21 Wing Air Force Station Leh, and Dr. Tashi Thinless, Director of Health Services, UT Ladakh. The event was also attended by Dr Sonam Joldan, Dean Research Studies, Dr Subrat Sharma, Dean Academic Affairs, Dr Jigmat Dachen, Dean College Affairs,Leh, senior members of Mahabodhi International Meditation Centre, officers and jawans from the Indian Army and ITBP, distinguished participants, and members of the public.',
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
                text: 'Speakers highlighted the global significance of World Meditation Day, recognised by the United Nations following collective efforts by several nations, including India. Emphasis was laid on meditation as a universal practice that nurtures inner peace, mental well-being, compassion, and social harmony, especially relevant in today\'s fast-paced and stress-filled world.',
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
                text: 'The speakers also acknowledged the Mahabodhi International Meditation Centre under the guidance and blessings of Ven. Bhikkhu Sanghasena for its pioneering role in promoting meditation, yoga, and human values in Ladakh for nearly four decades. Since its inception, MIMC has worked consistently with students, youth, professionals, defence personnel, and international visitors, fostering mindfulness and ethical living across communities.',
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
                text: 'Special tribute was paid to Ven. Bhikkhu Sanghasena for his visionary contribution to introducing and nurturing yoga and meditation in Ladakh nearly forty years ago, at a time when such practices were largely unfamiliar in the region. His lifelong commitment to inner transformation, social harmony, and compassionate action was recognised as the foundation of Mahabodhi\'s work.',
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
                text: 'Participants then immersed themselves in a short guided meditation session led by Ven. Bhikkhu Sanghasena to mark the significance of the day. The session offered a quiet space for reflection and inner stillness, allowing everyone present to experience meditation not as a concept, but as a living practice. At the conclusion of the session, participants collectively pledged to make meditation a part of their daily lives, resolving that it should not remain limited to celebration or observance on a particular day, but be embraced as a continuous path of mindfulness, balance, and inner well-being.',
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
                text: 'The occasion was made even more meaningful as it coincided with both World Meditation Day and the auspicious festival of Losar. In this spirit of reflection and renewal, the gathering collectively congratulated Guruji on receiving the prestigious PM Yoga Award from the Hon\'ble Prime Minister of India, Narendra Modi, on 19 December.',
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
                text: 'A special video was screened during the programme, capturing the proud moment of Venerable Bhikkhu Sanghasena receiving the PM Yoga Award directly from the Prime Minister. The screening was met with warm applause and a deep sense of collective pride, marking a significant milestone not only for Guruji, but also for Mahabodhi, Ladakh, and the wider community inspired by his work.',
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
                text: 'The event concluded with prayers and reflections, reaffirming the shared commitment to meditation as a path to personal well-being and a more compassionate, harmonious society.',
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
