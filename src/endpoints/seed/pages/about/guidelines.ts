import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const guidelinesPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'guidelines',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        blockType: 'listTwo',
        blockName: 'ListTwo',
        lists: [
          {
            title:
              "Arrive rested and acclimatized to Ladakh's high altitude; avoid strenuous activity for 24 hours after arrival.",
            content: null,
          },
          {
            title:
              'Maintain a respectful silence in meditation halls, retreat spaces, and throughout the campus.',
            content: null,
          },
          {
            title:
              'Dress modestly and comfortably, suitable for meditation and outdoor activities.',
            content: null,
          },
          {
            title: 'Attend all scheduled sessions punctually and participate mindfully.',
            content: null,
          },
          {
            title:
              'Abstain from alcohol, tobacco, and intoxicants during the retreat or course period.',
            content: null,
          },
          {
            title:
              'Follow instructions given by teachers and centre staff carefully, especially regarding safety and meditation practices.',
            content: null,
          },
          {
            title: 'Keep mobile phones on silent or switched off during sessions.',
            content: null,
          },
          {
            title:
              'Respect the spiritual and cultural traditions of the centre and the wider Ladakhi community.',
            content: null,
          },
          {
            title: 'Use designated areas for meals and resting; keep communal spaces clean.',
            content: null,
          },
          {
            title: "Seek assistance from the centre's staff for any health or accommodation needs.",
            content: null,
          },
        ],
      },
      {
        enabled: true,
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: '',
        subtitle: '',
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
                    text: "These guidelines help preserve the sanctuary's peaceful environment and support each visitor's transformative experience.",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
      },
    ],
    meta: {
      description: 'Guidelines',
      image: heroImage.id,
      title: 'Guidelines',
    },
    title: 'Guidelines',
  }
}
