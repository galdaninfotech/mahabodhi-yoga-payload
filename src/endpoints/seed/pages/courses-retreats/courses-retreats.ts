import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const coursesRetreatsPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'yoga-courses-and-retreats',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        "enabled": true,
        "blockName": "Content With Media",
        "blockType": "contentWithMedia",
        "title": "Courses & Retreats",
        "subtitle": "Sambodhi Retreat Centre",
        "content": {
          "root": {
            "type": "root",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Courses and Retreats at Mahabodhi Centre",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 1,
                    "version": 1
                  }
                ],
                "direction": null,
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Mahabodhi Centre offers a range of meditation courses and residential retreats designed to support inner development, mindfulness, and a deeper understanding of the Buddha’s teachings. The programs are structured to provide both theoretical insight and practical guidance, allowing participants to cultivate awareness, concentration, and wisdom in a balanced and supportive environment.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": null,
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "The courses include introductory programs for beginners, as well as more intensive meditation retreats for experienced practitioners. Guided by qualified teachers, participants are introduced to core practices such as mindfulness of breathing, loving-kindness meditation, and insight meditation, along with teachings on ethical conduct and mindful living. Emphasis is placed on disciplined practice, silence, and simplicity to help participants deepen their experience.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": null,
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Residential retreats at Mahabodhi Centre offer an opportunity to step away from daily distractions and fully immerse oneself in meditation and contemplation. Conducted in a serene setting, these retreats follow a structured daily schedule that encourages mental clarity, inner calm, and self-reflection. Through sustained practice and guidance, participants are supported in developing compassion, inner balance, and a clearer understanding of themselves and the world.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": null,
                "textStyle": "",
                "textFormat": 0
              }
            ],
            "direction": "ltr",
            "textFormat": 1
          }
        },
      }
    ],
    meta: {
      description: 'Yoga Courses & Retreats',
      image: heroImage.id,
      title: 'Yoga Courses & Retreats',
    },
    title: 'Yoga Courses & Retreats',
  }
}
