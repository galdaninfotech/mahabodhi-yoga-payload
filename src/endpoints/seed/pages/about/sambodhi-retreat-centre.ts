import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
}

export const sambodhiRetreatCentreData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ mediaMap }) => {

  console.log('Seeding sambodhi-retreat-centre page data...')

  return {
    slug: 'sambodhi-retreat-centre',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      {
        enabled: true,
        title: 'Sambodhi Retreat Centre',
        subtitle: 'Mahabodhi International Meditation Centre',
        media: mediaMap['about.jpg'],
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'The Sambodhi Retreat Centre is a sanctuary of quiet reflection tucked away in a peaceful corner of the Mahabodhi International Meditation Centre campus. Surrounded by rugged Rocky Mountains on one side and striking golden sand dunes on the other, the centre offers a truly serene and inspiring haven for contemplation.​',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Gently perfumed flowers line the walkways, accompanied by distinctive stupas, tranquil meditation cottages, vibrant prayer flags, and the revered Milarepa rock cave, all contributing to an atmosphere of silent spiritual encouragement. Every detail of the centre’s thoughtful design has been directly overseen by Venerable Bhikkhu Sanghasena, whose humanitarian vision has guided the development and management of this unique venue.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Welcoming seekers from every background, the Sambodhi Retreat Centre stands as an inclusive destination for anyone drawn to timeless spiritual wisdom and looking to enrich their daily lives with lasting peace and truth.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
            ],
            direction: 'ltr',
          },
        },
      },
      {
        enabled: true,
        title: null,
        description: null,
        quote:
          'Meditation is experiencing Buddha-hood within oneself and compassion is radiation, the boundless fragrance of that Buddha-hood in all directions for the benefits of all.',
        author: 'Ven. Bhikkhu Sanghasena',
        blockName: 'BlockQuote',
        blockType: 'blockQuote',
      },
    ],
    meta: {
      description: 'Sambodhi Retreat Centre',
      image: mediaMap['about.jpg'],
      title: 'Sambodhi Retreat Centre',
    },
    title: 'Sambodhi Retreat Centre',
  }
}
