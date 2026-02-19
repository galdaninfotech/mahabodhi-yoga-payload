import type { Category, Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type ProductArgs = {
  metaImage: Media
  contentImage: Media
}

export const homePageData: (args: ProductArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  metaImage,
  contentImage,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      slides: [
        {
          title: 'Sambodhi Retreat Centre',
          subtitle: '',
          image: contentImage.id,
        },
      ],
      media: contentImage.id,
    },
    layout: [
      {
        enabled: true,
        videoId: 'watch?v=rMbaX1PT6nk',
        title: 'One Month Yoga Instructor Course',
        className: null,
        blockName: null,
        blockType: 'youTubeVideo',
      },

      {
        enabled: true,
        title: 'Three Day Retreat ',
        subtitle: 'Sambodhi Retreat Centre ',
        blockName: 'Three Day Retreat ',
        blockType: 'contentWithMedia',
      },

      {
        blockName: null,
        blockType: 'cta',
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
                children: [
                  {
                    mode: 'normal',
                    text: 'Click this link to register ....',
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
              label: 'Registration',
              appearance: 'default',
            },
          },
        ],
      },

      {
        id: '697efcc37ad855bd18470709',
        enabled: true,
        title: 'International Yoga day 2025',
        subtitle: "Ladakh's Biggest Festival Of Yoga and Meditation",
        media: null,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '15th – 21st June 2026',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Commemorating the 12th UN International Day of Yoga',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Theme',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': Yoga for Mental Well-Being',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Embark on a transformative spiritual journey to the mystical land of Ladakh, where serene landscapes and Himalayan energy create the perfect environment for deep yoga and meditation practice. This year’s festival invites seekers from around the world to immerse themselves in a week-long celebration of wellness, harmony, and inner peace.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Organised by the Mahabodhi International Yoga and Meditation Centre, Leh, the event brings together practitioners, teachers, and wellness enthusiasts for powerful yoga sessions, guided meditations, spiritual discourses, and community gatherings. Set against the stunning backdrop of Ladakh’s mountains and sacred sites, the festival offers a rare opportunity to reconnect with your mind, body, and spirit in nature’s purest form.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Join us in Ladakh-Shangri-La to experience unmatched serenity, vibrant spiritual energy, and the timeless wisdom of yoga—an unforgettable journey toward mental clarity, emotional balance, and holistic well-being.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        blockName: null,
        blockType: 'contentWithMedia',
      },

      {
        enabled: true,
        title: 'Yoga Instructor Course',
        subtitle: 'Yogo for all',
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
                    text: 'tatsustuaduaduadyudya',
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
        blockName: 'Yoga Instructor Course',
        blockType: 'contentWithMedia',
      },

      {
        "id": "6901ce81ad7e4d0db3281bcb",
        "blockType": "clientTestimonials",
        "enabled": true,
        "blockName": "Client Testimonials",
        "testimonials": [
          {
            "title": null,
            "content": "I am very grateful to join the three day meditation camp. I love the silence the most. And I really enjoyed the group meditation sessions and I have more confidence to take a longer retreat. Thanks for the teacher and staff for organizing such a wonderful camp.",
            "author": "Littuis, Cheng - USA"
          },
          {
            "title": null,
            "content": "I came here with my group - 36 persons to offer Buddha Statues to Mahabodhi Center. We donated the big standing Buddha and 2 statue of Disciple of the Buddha. We are happy to come here. And hope coming here again next time. May all the tasks of Bhikkhu Sanghasena succeed for all the humanity.",
            "author": "Ven. Phra Khrusitthiwarakhom - Thailand"
          },
          {
            "title": null,
            "content": "Thank you for teaching me meditation. My mind has not been so still and at peace in a long time. I see meditation as a way of life and a spiritual journey that I pray to continue following. Thank you for spreading your wisdom, love and compassion to us. With much love and peace.",
            "author": "Erika Rabura - USA"
          },
          {
            "title": null,
            "content": "I have had the 3 most beautiful days in this beautiful life and beautiful world. This place is amazing and inspirational for someone like me, a young person searching for truth and way to be happy and to change the world. Here I was able to go really deep into meditation, to listen to the silence behind my heart beat, to understand that it is possible to be happy that I don't have to be afraid.",
            "author": "Renetta Hofstuede - Holland"
          },
          {
            "title": null,
            "content": "Wow!! I have been waiting for a Vipassana for almost 3 years and by the end of the first day meditation here at MIMC, I realized why I have waited so long. Meditating on the top of the world has been one peak experience. The food was amazing, the accommodations here are so clean and comfortable and the teachings here are filled with love, wisdom and joy. Thank you so much for bringing this sacred dream to life. I will always remember the time spent here and like Ven. Sanghasena mentioned, the seed has been planted in fertile soil and I am excited to see how it will blossom and grow.",
            "author": "Nina Kak - Belgium"
          },
          {
            "title": null,
            "content": "The experience made me realize how beneficial meditation is for experiencing the inner peace and serenity that is possible in my life. I found that my thoughts were almost nonstop during meditation, yet there were few moments of quiet that's were just wonderful. The 3-Day course was a very good introduction to meditation not too short, not too long. I also enjoyed Yoga + walking meditation. I love what you are doing here by serving the community and by teaching and introducing meditation to the world. Thank you.",
            "author": "Erika - USA"
          },
          {
            "title": null,
            "content": "Thank you for the most beautiful, spiritual and uplifting few days. Mahabodhi is such a beautiful place in the North India setting - perfect for obtaining the calmness, tranquility and compassion that I came again to seek here. Kunzang is a fantastic and lovely teacher and her words of wisdom. I hope, I will form the basis of my meditation practice back in the UK. Thank you to everyone at Sambodhi Retreat Centre for such a magical few days and I look forward to returning in the near future.",
            "author": "Laura Boscawau - London UK"
          },
          {
            "title": null,
            "content": "This was my first experience with Buddhist teaching and meditation practice, although I had seven years of Hatha yoga practice before beginning of this program. Meditation had truly shown me a new valuable tool from the Asian/Vedic traditions of spirituality and mindfulness. This course has given me the impetus to try to act and think differently, as well as to seek strength from meditation in my life in the United States. Thank you so much for designing a course so appropriate to beginner who comes from different societies, cultures and religious traditions.",
            "author": "Andrew R. Carreras, Oakland, California - USA"
          },
          {
            "title": null,
            "content": "Firstly, I would like to extend my gratitude to our most revered teacher Ven. Sanghasena for introducing me to the world of meditation from my childhood. Attending complete silence meditation course was an enriching experience. It will help me to continue my practice further in life.",
            "author": "Sonam Wangyal - MRS Student"
          },
          {
            "title": null,
            "content": "It was once life time experience, splendid, beautiful and soulful. When I came for the retreat first time, I was expecting to be more evolved and needless to say it surpassed my expectations. Everything about the program was perfect. The retreat was very enriching and powerful. Nestled in the Himalayas, it is a picture perfect setting, ideal for connecting with oneself. Spending time with Guruji is the closest anyone can come to enrolment. I am truly blessed and would like to come back again and again and this is my third time to this beautiful Centre.",
            "author": "Vickrant Mahajan - India"
          }
        ],
      },

      {
        blockName: 'Newsletter Subscription',
        blockType: 'newsletterSubscription',
        media: contentImage.id,
        showNameField: true,
        subtitle: 'Newsletter Subscription',
        title: 'Get updates straight to your inbox',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Join our community to receive inspiring updates. Stay connected with exclusive insights on upcoming retreats, get first access to event schedules, meditation courses, yoga workshops, and spiritual gatherings, dhamma talks by Ven. Bhikkhu Sanghasena, yoga sessions, and practical mindfulness tips for daily life.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        notes: [
            { note: "* By subscribing, you agree to our Privacy Policy and consent to receive updates." },
            { note: "* We respect your privacy. Unsubscribe at any time." },
        ]
      },
    ],
    meta: {
      description: '',
      // @ts-ignore
      image: metaImage,
      title: 'Sambodhi Retreat Centre',
    },
    title: 'Home',
  }
}
