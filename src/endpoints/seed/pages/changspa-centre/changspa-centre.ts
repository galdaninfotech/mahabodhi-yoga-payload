import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const changspaCentrePageData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    slug: 'changspa-centre',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        blockName: null,
        blockType: 'contentWithMedia',
        title: 'Changspa Center',
        subtitle: 'Changspa Center',
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
                    text: 'About Mahabodhi Changspa Centre',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 1,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Mahabodhi Changspa Centre is a peaceful space dedicated to meditation, mindfulness, and the study of Buddhist teachings, serving both the local community and visitors to Leh. Rooted in the principles of compassion, wisdom, and ethical living, the centre offers an environment where individuals can cultivate inner calm and spiritual awareness amidst the natural serenity of Changspa.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'The centre regularly hosts meditation sessions, Dhamma talks, retreats, and community programs guided by experienced practitioners and teachers. Open to people of all backgrounds, Mahabodhi Changspa Centre welcomes beginners as well as seasoned meditators who wish to deepen their practice in a supportive and authentic setting.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Beyond formal practice, the centre plays an important role in fostering harmony and social well-being through education, community engagement, and service. It stands as a place of refuge and learning, encouraging mindful living and the application of Buddhist values in everyday life, contributing to peace both within individuals and in the wider society.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: null,
            textFormat: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Changspa Centre',
      image: heroImage.id,
      title: 'Changspa Centre',
    },
    title: 'Changspa Centre',
  }
}
