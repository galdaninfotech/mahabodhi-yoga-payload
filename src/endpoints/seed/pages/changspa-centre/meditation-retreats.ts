import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const meditationRetreatsPageData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    slug: 'meditation-retreats',
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
        title: 'Meditation Retreats',
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
                    text: 'We offer One day, two day, three day and seven day meditation courses in the campus of Mahabodhi International Meditation Centre, Choglamsar.',
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
                    text: 'The Shangri-La team is a talented group of individual meditation teachers, Yoga instructor, ambassador of Compassion, massager of peace, singers, musicians and healers, all drawn from the Mahabodhi family trained under the guidance and blessings of Ven. Bhikkhu Sanghasena through their unique talents and skills, and provided with all the necessary training to deliver deeply meaningful and highly effective practices in meditation, compassion, Yoga, spiritual, healing musical and songs.',
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
                tag: 'h4',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Shangri-la Meditation',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'The Shangri-la Meditation course is designed to help people :',
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
        blockType: 'listTwo',
        blockName: 'ListTwo',
        marginTop: '-60px',
        marginLeft: '20px',
        space: '10px',
        lists: [
          {
            title: null,
            content: 'To find immediate physical and psychological relaxation',
          },
          {
            title: null,
            content:
              'To train and discipline the mind and use it positively, effectively and efficiently in daily life',
          },
          {
            title: null,
            content: 'To develop tranquility, serenity and clarity of mind',
          },
          {
            title: null,
            content: 'To find practical solutions to the problems occurring in our daily lives',
          },
          {
            title: null,
            content:
              "To learn the art of living in this world peacefully, harmoniously, friendly, mindfully, creatively, positively, helping and serving, caring and sharing with each other's without hurting and harming each other's",
          },
        ],
      },
      {
        enabled: true,
        title: 'Meditation Retreats',
        subtitle: 'Sambodhi Retreat Centre',
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
                    text: 'Immerse yourself in the transformative Shangri-la Meditation with Ven. Bhikkhu Sanghasena which will invite you to the immeasurable inner qualities of the awakened heart and mind. ',
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
                tag: 'h4',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'We Offers :',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },
            ],
            direction: 'ltr',
          },
        },
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
      },

      {
        enabled: true,
        blockName: 'List Two',
        blockType: 'listTwo',
        marginTop: '-60px',
        marginLeft: '20px',
        space: '10px',
        lists: [
          {
            title: '',
            content: 'Individual Self Retreat',
          },
          {
            title: '',
            content: 'Long & Short retreat',
          },
          {
            title: '',
            content: 'Yoga sessions',
          },
          {
            title: '',
            content: 'Shangri-La Meditation -Three days Retreat',
          },
          {
            title: '',
            content: 'Shangri-La Meditation -Seven days Retreat',
          },
          {
            title: '',
            content:
              'On every Sunday Special chanting, guided meditation, Dhamma talks, devotional songs and celestial music',
          },
        ],
      },
    ],
    meta: {
      description: 'Meditation Retreats',
      image: heroImage.id,
      title: 'Meditation Retreats',
    },
    title: 'Meditation Retreats',
  }
}
