import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const regularYogaPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'regular-yoga-and-meditation',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'Regular Yoga & Meditation',
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
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
                    text: 'The Sambodhi Retreat Centre offers both short and long duration of meditation courses. The tremendously popular and highly successful 3 day Shangri-La Meditation course is regularly scheduled throughout the summer months and we have received incredibly positive and encouraging feedback from all those attending them.',
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
                    text: "The simply, yet timeless, teachings of the enlightened Buddha are taught with precise accuracy and insightful clarity at the Sambodhi Retreat Centre. Both Samatha and Vipassana Meditation Practices, the very heartwood of the Buddha's unsurpassed contemplative teachings, are taught in direct, engaging and highly relevant ways, enabling sincere practitioners to open and expand their innate inner qualities of wisdom, compassion, power and purity.",
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
        blockName: null,
        blockType: 'contentWithMedia',
        title:
          'Shangri-La Meditation Retreat 2026 - A Transformative Journey in the High Himalayas',
        subtitle: 'Shangri-La Meditation Retreat 2026 ',
        media: null,
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
                    text: 'Shangri-La Meditation Retreat 2026 – A Transformative Journey in the High Himalayas',
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

                children: [],
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
                    text: 'Step into a sacred space of stillness, wisdom, and inner awakening at the Shangri-La Meditation Retreat 2026, organized by Mahabodhi International Yoga and Meditation Centre, accredited by the Yoga Certification Board (YCB), Ministry of AYUSH, Government of India.',
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

                children: [],
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
                    text: 'Set amidst the breathtaking landscapes of Ladakh in the High Himalayas, this 3-day immersive retreat offers a rare opportunity to disconnect from the noise of daily life and reconnect with your true self.',
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
          },
        },
      },

      {
        blockName: null,
        blockType: 'mediaBlock',
        media: heroImage,
      },
      
      {
        enabled: true,
        blockType: 'youTubeVideo',
        title: 'Mantras For Deep Inner Peace',
        videoId: 'watch?v=zwTGyO3MdP4&list=RDzwTGyO3MdP4&start_radio=1',
        className: null,
        blockName: null,
      },
    ],
    meta: {
      description: 'Regular Yoga & Meditation',
      image: heroImage.id,
      title: 'Regular Yoga & Meditation',
    },
    title: 'Regular Yoga & Meditation',
  }
}
