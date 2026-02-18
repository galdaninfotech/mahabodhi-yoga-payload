import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const dhammaTalkPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'sunday-dhamma-talk',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: 'Sunday Dhamma Talk',
        subtitle: 'Sambodhi Retreat Centre',
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
                    text: 'The Sunday Dhamma Talk at Mahabodhi Centre, Leh is a weekly spiritual gathering that welcomes all seekers of truth, lovers of peace, and community members into the beautiful Buddha Hall at the Devachan campus. Each Sunday, Venerable Bhikkhu Sanghasena delivers a heartfelt Dhamma discourse, sharing Buddhist teachings that illuminate the path of compassion, wisdom, and inner peace.​',
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
                    text: "Participants practice group meditation in a serene and uplifting atmosphere, sharing the joy of Dhamma and experiencing inspiring songs performed by elderly residents, young monks, nuns, and students of the centre. The event offers a unique opportunity to connect with the Devachan family, join in spiritual reflection, and nurture a sense of unity and belonging within Ladakh's largest humanitarian and spiritual community.​​",
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
                    text: 'Everyone is invited to be part of this enriching Sunday program by registering through the Mahabodhi Changspa Centre. Spend your Sunday in contemplation, fellowship, and the true joy of Dhamma at Mahabodhi International Meditation Centre.',
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
    ],
    meta: {
      description: 'Sunday Dhamma Talk',
      image: heroImage.id,
      title: 'Sunday Dhamma Talk',
    },
    title: 'Sunday Dhamma Talk',
  }
}
