import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post6Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {

  return {
    title: 'Bhikkhu Sanghasena at Inauguration of Sacred Piprahwa Buddha Relics Exposition',
    slug: 'bhikkhu-sanghasena-at-inauguration-of-sacred-piprahwa-buddha-relics-exposition',
    _status: 'published',
    createdAt: '2025-01-03T00:00:10.000Z',
    publishedAt: '2025-01-03T00:05:10.000Z',
    updatedAt: '2025-01-03T00:00:10.000Z',
    heroImage: mediaMap['post-6.jpg'].id,
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
                text: 'Bhikkhu Sanghasena participated in the inauguration of the Grand International Exposition of Sacred Piprahwa Buddha Relics related to Bhagwan Buddha, titled “The Light & the Lotus: Relics of the Awakened One”, held at the historic Rai Pithora Cultural Complex, New Delhi. The exhibition was inaugurated by the Hon\'ble Prime Minister of India, Shri Narendra Modi, marking the return of the sacred Piprahwa Buddha relics to India after more than one hundred and twenty-five years.',
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
                text: 'Addressing the gathering, the Hon\'ble Prime Minister described the occasion as deeply auspicious and historic, noting that the return of these relics represents the return of India\'s heritage and civilizational legacy. He emphasized that the sacred relics of Lord Buddha are not mere archaeological objects, but living symbols of faith, contemplation, and compassion, inseparable from India\'s spiritual identity. He further expressed hope that, with the blessings of Lord Buddha, the year ahead may usher in peace, prosperity, and harmony for the entire world.',
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
                text: 'Monks and spiritual leaders from both the Theravada and Vajrayana traditions were present, lending spiritual depth and unity to the event. During the ceremony, the Hon\'ble Prime Minister offered Holy Robes to Bhikkhu Sanghasena, along with other revered monks, including the respected Ling Rinpoche and Kundeling Rinpoche. The offering reflected reverence for the Sangha and the living continuity of the Buddha\'s teachings across traditions and cultures.',
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
                text: 'The Prime Minister, in his address, also spoke about India\'s responsibility as the custodian of the Buddha\'s sacred relics and as a living carrier of his tradition. He highlighted how the relics, when exhibited in countries such as Thailand, Vietnam, Mongolia, and Russia, drew millions of devotees, demonstrating that the message of Lord Buddha transcends borders, languages, and time.',
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
                text: 'Bhikkhu Sanghasena interacted with Union Minister Shri Kiren Rijiju and Union Minister Shri Gajendra Singh Shekhawat, discussing the significance of preserving Buddhist heritage and strengthening India\'s role in sharing the Buddha\'s message of peace, compassion, and wisdom with the world.',
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
                text: 'During his visit to the exposition, Bhikkhu Sanghasena paid homage to the sacred relics and spent time in silent reflection. He noted that the presence of these relics serves as a powerful reminder of the Buddha\'s path and of the shared spiritual bonds that connect humanity beyond political, economic, and cultural divisions.',
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
                text: 'The exhibition brings together the repatriated Piprahwa Buddha relics with authenticated archaeological materials preserved by national institutions, presented through immersive and educational displays. It offers the public a rare opportunity to connect directly with the life, teachings, and legacy of Bhagwan Buddha, while reaffirming India\'s enduring commitment to safeguarding and sharing its spiritual heritage.',
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
                text: 'Bhikkhu Sanghasena expressed appreciation for the collective efforts that made the return and public exhibition of these relics possible, observing that such initiatives help link the wisdom of the past with the aspirations of future generations, rooted in peace, mindfulness, and compassion.',
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
