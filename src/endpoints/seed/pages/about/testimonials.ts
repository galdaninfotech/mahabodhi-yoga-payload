import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const testimonialsPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'testimonials',
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
        title: 'Experience of Meditators',
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
                    text: '',
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
        blockName: 'Client Testimonials',
        blockType: 'clientTestimonials',
        testimonials: [
          {
            title: '',
            content:
              'I am very grateful to join the 3 day meditation camp. I love the silence the most. And I really enjoyed the group meditation sessions and I have more confidence to take a longer retreat. Thanks for the teacher and staff for organizing such a wonderful camp.',
            author: 'Littuis, Cheng - USA',
          },
          {
            title: '',
            content:
              'I came here with my group - 36 persons to offer Buddha Statues to Mahabodhi Center. We donated the big standing Buddha and 2 statue of Disciple of the Buddha. We are happy to come here. And hope coming here again next time. May all the tasks of Ven. Bhikkhu Sanghasena succeed for all the humanity.',
            author: 'Ven. Phra Khrusitthiwarakhom - THAILAND',
          },
          {
            title: '',
            content:
              'Thank you for teaching me meditation. My mind has not been so still and at peace in a long time. I see meditation as a way of life and a spiritual journey that I pray to continue following. Thank you for spreading your wisdom, love and compassion to us. With much love and peace.',
            author: 'Erika Rabura - USA',
          },
          {
            title: '',
            content:
              'Wow!! I have been waiting for a Vipassana for almost 3 years and by the end of the first day meditation here at MIMC, I realized why I have waited so long.',
            author: 'Nina Kak - Belgium',
          },
          {
            title: '',
            content:
              "The experience made me realize how beneficial meditation is for experiencing the inner peace and serenity that is possible in my life. I found that my thoughts were almost nonstop during meditation, yet there were few moments of quiet that's were just wonderful. The 3-Day course was a very good introduction to meditation not too short, not too long. I also enjoyed Yoga + walking meditation. I love what you are doing here by serving the community and by teaching and introducing meditation to the world. Thank you.",
            author: 'Erika - USA',
          },
          {
            title: '',
            content:
              'Thank you for the most beautiful, spiritual and uplifting few days. Mahabodhi is such a beautiful place in the North India setting - perfect for obtaining the calmness, tranquility and compassion that I came again to seek here. Kunzang is a fantastic and lovely teacher and her words of wisdom. I hope, I will form the basis of my meditation practice back in the UK. Thank you to everyone at Sambodhi Retreat Centre for such a magical few days and I look forward to returning in the near future.',
            author: 'Laura Boscawau London - UK',
          },
          {
            title: '',
            content:
              'This was my first experience with Buddhist teaching and meditation practice, although I had seven years of Hatha yoga practice before beginning of this program. Meditation had truly shown me a new valuable tool from the Asian/Vedic traditions of spirituality and mindfulness. This course has given me the impetus to try to act and think differently, as well as to seek strength from meditation in my life in the United States. Thank you so much for designing a course so appropriate to beginner who comes from different societies, cultures and religious traditions.',
            author: 'Andrew R. Carreras, Oakland, California - USA',
          },
          {
            title: '',
            content:
              'Firstly, I would like to extend my gratitude to our most revered teacher Ven. Sanghasena for introducing me to the world of meditation from my childhood. Attending complete silence meditation course was an enriching experience. It will help me to continue my practice further in life.',
            author: 'Sonam Wangyal - MRS Student',
          },
          {
            title: '',
            content:
              'It was once life time experience, splendid, beautiful and soulful. When I came for the retreat first time, I was expecting to be more evolved and needless to say it surpassed my expectations. Everything about the program was perfect. The retreat was very enriching and powerful. Nestled in the Himalayas, it is a picture perfect setting, ideal for connecting with oneself. Spending time with Guruji is the closest anyone can come to enrolment. I am truly blessed and would like to come back again and again and this is my third time to this beautiful Centre.',
            author: 'Vickrant Mahajan - India',
          },
        ],
      },
    ],
    meta: {
      description: 'Testimonials',
      image: heroImage.id,
      title: 'Testimonials',
    },
    title: 'Testimonials',
  }
}
