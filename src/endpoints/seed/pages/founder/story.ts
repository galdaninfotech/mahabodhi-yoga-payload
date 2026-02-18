import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const storyPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'founder-story',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'About The Founder',
        subtitle: 'Story',
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
                    text: 'The Mahabodhi International Meditation Centre (MIMC) was founded in 1986 by Venerable Bhikkhu Sanghasena in Leh, Ladakh, with the vision of integrating spiritual growth with humanitarian service. What began as a small initiative to spread the teachings of the Buddha soon grew into a transformative mission that addressed the educational, social, and spiritual needs of Ladakhi people.',
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
                    text: "In 1991, the Mahabodhi Devachan campus was established on 200 acres of barren land in Choglamsar, which was gradually transformed into a thriving hub of compassion and learning. Over the following years, MIMC established hostels for boys and girls, a residential school providing holistic education, and the first non-governmental charitable hospital in Ladakh. The Mahabodhi Green Project began transforming the once-arid desert into a lush, tree-filled campus, symbolizing the organization's commitment to both human and environmental well-being.",
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
                    text: "Through the 1990s and early 2000s, MIMC expanded its reach by creating homes for the elderly, a nunnery, and vocational training centres, while organizing international conferences promoting interfaith dialogue, peace, and women's empowerment. Branch schools were set up in remote villages to provide education to underprivileged children, and initiatives such as the Mobile Health Clinic brought medical services to isolated areas.",
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
                    text: "By the mid-2000s, MIMC's humanitarian work gained national and international recognition. It established programs for the blind and visually impaired, literacy projects for elderly women, and organized major events like the International Buddha Jayanti celebration, which drew leaders and dignitaries from across India and the world. With new branches in Delhi, Jammu, and Chandigarh, the organization continued to grow as a symbol of “Compassion in Action” — blending meditation, education, healthcare, and social service into a single mission of universal peace and human development.",
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
      description: 'Founder Story',
      image: heroImage.id,
      title: 'Founder Story',
    },
    title: 'Story',
  }
}
