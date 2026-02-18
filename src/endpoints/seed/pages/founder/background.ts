import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const backgroundPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'founder-background',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'About The Founder',
        subtitle: 'Background',
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
                    text: 'The Mahabodhi International Meditation Centre (MIMC) began in a single rented room in Leh city in 1986, founded by Venerable Bhikkhu Sanghasena in response to the deep need for humanitarian and spiritual services in Ladakh. Through unwavering dedication, he and his team expanded the centre to the vast Devachan campus in Choglamsar in 1991, overcoming harsh desert conditions and infrastructure challenges with immense compassion and resolve.​',
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
                    text: 'Understanding that illiteracy fueled poverty and social unrest, Venerable Sanghasena established Ladakh’s first residential school for underprivileged children. This educational mission blossomed into a multifaceted campus, now home to facilities for the elderly, visually impaired, monastic communities, and spiritual seekers. Today, Devachan stands as a model of integrated humanitarian action, fulfilling the vision of service and transformation for Ladakh.',
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
                    text: "The campus evolved into a multifaceted hub addressing various humanitarian needs, realizing Venerable Sanghasena's dream.",
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
      description: 'Founder Background',
      image: heroImage.id,
      title: 'Founder Background',
    },
    title: 'Background',
  }
}
