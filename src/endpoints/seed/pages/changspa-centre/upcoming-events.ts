import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const upcomingEventsPageData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    slug: 'upcoming-events',
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
        title: 'Upcoming Events',
        subtitle: 'Sambodhi Retreat Centre',
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                tag: 'h2',
                type: 'heading',
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: '1. Yoga Mahotsav 2026',
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
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Join the Yoga Mahotsav countdown event on April 6, 2026, starting at 9:00 AM. This special celebration, held at the Mahabodhi International Yoga and Meditation Centre, will feature group sessions, wellness workshops, and invigorating activities to mark the beginning of the festival season.​',
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
                tag: 'h2',
                type: 'heading',
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: '2. Week-long International Festival of Yoga & Meditation',
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
                format: 'start',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'From June 15th to 21st, 2026, the centre will host the largest International Festival celebrating Yoga and Meditation in Ladakh. This event includes themed workshops, guided yoga practices, and interactive sessions led by prominent instructors, culminating in celebration of International Yoga Day on June 21st.​',
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
                tag: 'h2',
                type: 'heading',
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: '3. Buddha Purnima Celebration',
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
                format: 'start',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'On May 12, 2026, MIMC will commemorate Buddha Purnima with rituals, chanting, meditation sittings, and spiritual talks reflecting on the teachings of the Buddha. Visitors, local devotees, and guests are invited to participate in this day of peace and reflection at the campus.​',
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
                tag: 'h2',
                type: 'heading',
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: '4. World Peace Conference 2026',
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
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'From August 23rd to 25th, 2026, MIMC will organize the World Peace Conference in Leh, featuring interfaith prayers, academic sessions, cultural performances, and discussions on building a peaceful Ladakh. The conference will invite international delegates, spiritual leaders, and guests to jointly adopt the Ladakh Peace Declaration 2026.​',
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
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'These events welcome all participants—spiritual seekers, yoga enthusiasts, international guests—to engage, celebrate, and contribute to the centre’s ongoing mission of harmony and wellness.',
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
            direction: 'ltr',
          },
        },
      },
    ],
    meta: {
      description: 'Upcoming Events',
      image: heroImage.id,
      title: 'Upcoming Events',
    },
    title: 'Upcoming Events',
  }
}
