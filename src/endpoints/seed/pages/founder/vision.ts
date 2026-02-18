import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const visionPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'founder-vision',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'About The Founder',
        subtitle: 'Vision',
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
                    text: 'Bhikkhu Sanghasena was born in the remote Himalayan region of Ladakh, where a deeply religious family tradition, grounded in Buddhist values of humility, peacefulness and simplicity, shaped his early life. In his youth he joined the Indian Army, where he developed discipline and a sense of service. In 1977 he responded to an inner spiritual call and left the army, becoming a dedicated disciple of the renowned monk Acharya Buddharakkhita Mahathera and undertaking formal Buddhist ordination and study of meditation.',
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
                    text: 'Returning to his homeland in 1986, he founded MIMC in Leh with the clear intention of integrating spiritual practice with humanitarian service.',
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
                    text: 'From the earliest conception of MIMC he identified illiteracy and the lack of holistic education as the central root causes of poverty and social unrest in the region. Guided by the belief that providing proper education, shelter and healthcare would break the cycle of deprivation, he embarked on creating a comprehensive campus in Choglamsar on what was once barren desert land, transforming it into a thriving hub of learning, compassion and spiritual growth. ',
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
                    text: 'A core aspect of his vision is encapsulated in the slogan “Compassion in Action, Meditation in Action”. He holds that spiritual growth is not merely contemplative, but must be expressed in concrete service: providing education to under-privileged children, safe homes for the elderly and destitute, care for the physically challenged, and fostering inter-religious harmony. At the same time, he emphasises the cultivation of inward mindfulness and meditation: “Meditation is experiencing Buddha-hood within oneself and compassion is radiation, the boundless fragrance of that Buddha-hood in all directions.”',
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
                    text: 'Furthermore, his global vision extends beyond Ladakh. He advocates for a “global family” — a world-community rooted in non-violence, inter-religious dialogue, environmental care, social justice and integration. He argues that technology and modern progress must be balanced with spiritual and ethical wisdom, otherwise human development remains incomplete and conflict-prone.',
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
      description: 'Founder Vision',
      image: heroImage.id,
      title: 'Founder Vision',
    },
    title: 'Vision',
  }
}
