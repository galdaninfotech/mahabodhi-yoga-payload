import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const post1Data = (mediaMap: Record<string, Media>, categoryIds: number[], authorIds: number[]): RequiredDataFromCollectionSlug<'posts'> => {
  return {
    title: 'Ven. Bhikkhu Sanghasena attended the 77th Republic Day “At Home”',
    slug: 'ven-bhikkhu-sanghasena-attended-the-77th-republic-day-at-home',
    _status: 'published',
    createdAt: '2025-01-29T00:00:10.000Z',
    publishedAt: '2025-01-29T00:05:10.000Z',
    updatedAt: '2025-01-29T00:00:10.000Z',
    heroImage: mediaMap['sambodhi.jpg'].id,
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
                text: 'Ven. Bhikkhu Sanghasena attended the traditional “At Home” reception hosted by the Hon\'ble Lieutenant Governor of UT Ladakh in connection with the 77th Republic Day of India. The event was graciously hosted by the Hon\'ble Lieutenant Governor of Ladakh, Sh. Kavinder Gupta, in the presence of the First Lady, Smt. Bindu Gupta.',
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
                text: 'During the reception, Ven. Bhikkhu Sanghasena interacted with various leaders, senior bureaucrats, Army officials, and other dignitaries, exchanging greetings and warm wishes on the occasion of the nation\'s 77th Republic Day. The gathering provided an opportunity for meaningful interaction and reaffirmation of shared commitment to public service and national harmony.',
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
                text: 'The reception was attended by senior civil and police officers, officers of the Armed Forces and Central Armed Police Forces, representatives of religious institutions, elected representatives, and prominent citizens from across Ladakh.',
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
                text: 'The Hon’ble Lieutenant Governor extended Republic Day greetings to all present and interacted with the guests, appreciating their valuable contributions to public service, social harmony, and nation-building.',
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
                text: 'The function reflected the spirit of unity, harmony, and constitutional values that underpin the Republic of India and concluded in a cordial and dignified atmosphere.',
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
                text: 'Ven. Bhikkhu Sanghasena expressed his sincere thanks and gratitude to the Hon\'ble Lieutenant Governor for the gracious invitation and for hosting the reception in the spirit of inclusiveness and national pride.',
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
