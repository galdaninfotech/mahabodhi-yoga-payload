import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const shangriLaRetreatPageData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    slug: 'shangri-la-retreat',
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
        title: 'Shangri-La Retreat',
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
                    text: 'Meditation is the heart of Lord Buddha\'s teaching, without the practice of Meditation, purity of mind is not possible. Buddha’s teachings of Meditation precisely lies in the purification of mind. The work of purification must be undertaken in the same place where the violations arise, in the mind itself, and the main method the Dhamma discovered and offered by the Lord Buddha 2500 years ago for the total purification of mental impurities is Meditation, in Pali is Bhavana. Since then countless people have benefited from the practice of Meditation and purified their mind and got liberated.',
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
                    text: 'Meditation is like a savior for the 21st century people. As the rise of stress, tension, violence, war, hatred, terrorism, insecurity and anxiety are at greater rate. To get healed of all this sicknesses medicines doesn’t help, the only remedy is Meditation. Mediation plays a massive role in prevention of all these sicknesses as it can provide more space to understand how to work in a situation. Anyone can practice and benefit from the meditation regardless of spiritual traditional background, country, age, physical profile etc. ',
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
                    text: 'These days Mediation is introduced in schools, Colleges, Hospitals, Prison, Business corporates even the employees of Government, Police and Army practices meditation.',
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
                    text: 'The teachings of meditation have been the core objectives of Mahabodhi International Meditation Centre, since its inception from 1986. The famous Shangrila Meditation as taught by Ven. Bhikkhu Sanghasena is well-matched to people from all walks of life. ',
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
                    text: 'Meditators in thousands from different parts of the world join the meditation retreat during the summer month from June to September every year at Mahabodhi International Meditation Centre and take the maximum benefit from the practice of meditation.',
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
                    text: 'We offer One day, two day, three day and seven day meditation courses in the campus of Mahabodhi International Meditation Centre, Choglamsar. ',
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
                    text: 'The Shangri-La team is a talented group of individual meditation teachers, Yoga instructor, ambassador of Compassion, massager of peace, singers, musicians and healers, all drawn from the Mahabodhi family trained under the guidance and blessings of Ven. Bhikkhu Sanghasena through their unique talents and skills, and provided with all the necessary training to deliver deeply meaningful and highly effective practices in meditation, compassion, Yoga, spiritual, healing musical and songs. ',
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
        blockType: 'gallery',
      },

      {
        richText: {
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
                    text: 'callus',
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
        links: [
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/registration',
              label: 'Call us',
              appearance: 'default',
            },
          },
        ],
        blockType: 'cta',
      },
    ],
    meta: {
      description: 'Shangri-La Retreat',
      image: heroImage.id,
      title: 'Shangri-La Retreat',
    },
    title: 'Shangri-La Retreat',
  }
}
