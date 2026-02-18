import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const yogaCoursesPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'yoga-courses',
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
        title: 'Yoga Courses',
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
                    text: 'The Mahabodhi International Meditation Centre in Ladakh offers a selection of detailed yoga courses designed for a transformative and immersive experience. Here are the highlighted yoga programs: ',
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
                    text: 'One-Month Yoga Instructor Course',
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
                    text: 'A professionally certified program recognized by the Ministry of Ayush, Government of India, this month-long residential instructor course runs each year from May 15th to June 15th at the Mahabodhi Campus. Participants engage in a comprehensive curriculum covering multiple yoga styles, meditation techniques, yoga philosophy, human anatomy, and teaching methodologies. The serene Himalayan environment offers ideal conditions for self-reflection and personal growth. Both practical, hands-on training and deep theoretical study are provided by highly experienced instructors. This course welcomes practitioners of all levels who aspire to move toward instructor certification and deeper personal insight.',
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
                    text: 'Himalayan Yoga & Meditation Retreat',
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
                    text: "Short and long-duration retreats at the Sambodhi Retreat Centre integrate daily yoga sessions with guided meditation focused on Samatha and Vipassana practices—the heart of traditional Buddhist contemplative teachings. These highly successful three-day meditation and yoga retreats emphasize relaxation, stress management, and cultivating mindfulness. The curriculum is suited for both beginners and experienced practitioners seeking to deepen their spiritual path. Cultural immersion—including exploration of Ladakh's spiritual traditions—forms an integral part of these retreats.​",
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
                    text: 'Daily Yoga and Meditation Classes',
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
                    text: 'The Mahabodhi International Meditation and Yoga Centre in Changspa, Leh, offers guided yoga classes and Buddhist talks daily, especially during the June-September tourist season. These daily sessions are designed for short-term visitors as well as local residents, allowing flexibility and regular practice in a tranquil setting away from the busy city center',
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
                    text: 'Drop-In Yoga Classes',
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
                    text: 'Flexible drop-in classes for meditation and yoga are available at the main campus and affiliated centers in Leh, Ladakh. These sessions cater to travelers, allowing for spontaneous participation and offering opportunities to experience traditional yoga with donation-based attendance.​',
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
                    text: "Each course is set within the scenic backdrop of Ladakh, providing an immersive, holistic journey for physical well-being and spiritual growth under the guidance of Mahabodhi's distinguished teachers and lineage.",
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
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: 'One Month Yoga Instructor Course',
        subtitle: '1st May -31st May,2025 ',
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
                    text: '“The One-Month Yoga Instructors Course was held at Mahabodhi International Yoga and Meditation Centre. This comprehensive program provided deep knowledge of yoga and meditation, guided by our experienced teachers. Students learned human anatomy, yogic philosophy, and gained practical experience in meditation and traditional yogic practices. Upon completion of the course, participants received a certificate approved by the Ministry of AYUSH, Government of India. Around 45 students participated in this transformative program.”',
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
            ],
            direction: null,
          },
        },
      },
    ],
    meta: {
      description: 'Yoga Courses',
      image: heroImage.id,
      title: 'Yoga Courses',
    },
    title: 'Yoga Courses',
  }
}
