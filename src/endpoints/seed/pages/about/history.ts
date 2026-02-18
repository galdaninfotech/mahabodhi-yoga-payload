import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const historyPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'history-of-mahabodhi',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'History Of MIMC',
        subtitle: 'Mahabodhi International Meditation Centre',
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
                    text: 'The Mahabodhi International Meditation Centre (MIMC) was founded in 1986 by Venerable Bhikkhu Sanghasena in Leh, Ladakh, with the noble vision of reviving the compassionate teachings of the Buddha through humanitarian service and spiritual upliftment. What began as a small initiative soon grew into a transformative movement for the people of Ladakh and beyond. Guided by the principles of love, compassion, and selfless service, MIMC aimed to address the physical, educational, and spiritual needs of the underprivileged in this remote Himalayan region.',
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
                    text: 'In 1991, MIMC established the Mahabodhi Devachan campus on 200 acres of barren land in Choglamsar, transforming it into a vibrant centre of education, healthcare, and meditation. Over the years, numerous institutions were founded under its umbrella, including the Mahabodhi Residential School, Girls and Boys Hostels, and the first non-governmental hospital in Ladakh. These initiatives provided access to quality education, healthcare, and shelter for hundreds of children, the elderly, and the disadvantaged, embodying the true spirit of compassionate service.',
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
                    text: 'Throughout the 1990s and 2000s, MIMC expanded its humanitarian and interfaith work. The establishment of nunneries, schools, and vocational training centres empowered women and youth, while international conferences fostered inter-religious harmony and world peace. Landmark events such as the International Sakyadhita Conference and the International Youth Sangha Conference brought together spiritual leaders and thinkers from around the world to promote dialogue, understanding, and cooperation.',
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
                    text: 'Today, MIMC stands as a beacon of compassion and transformation in the Himalayas. Its founder’s vision has blossomed into a global movement that unites spiritual growth with social action. From environmental initiatives to education for the blind and aged-care programs, MIMC continues to serve humanity with an unwavering commitment to peace, harmony, and holistic development.',
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
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
      },
    ],
    meta: {
      description: 'History Of Mahabodhi',
      image: heroImage.id,
      title: 'History Of Mahabodhi',
    },
    title: 'History Of Mahabodhi',
  }
}
