import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const founderPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'about-the-founder',
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
        title: 'About The Founder',
        subtitle: 'Mahabodhi International Meditation Centre',
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
                    text: 'Venerable Bhikkhu Sanghasena was born in the remote Himalayan region of Ladakh – an ancient state located in the far north west of India, high on the Tibetan plateau. He was brought up within a deeply religious family, amongst people who followed the ancient Buddhist traditions and believed in peacefulness, humility and innocence as the natural way of life. At the age of seventeen he joined the Indian Army, where he developed a strong sense of personal discipline and responsibility.',
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
                    text: 'The year 1977 was a particularly significant year in his life, for this is when he felt the inner spiritual call and decided to leave the army. He left the mountains of Ladakh far behind him and became a committed disciple of the renowned Buddhist scholar and celebrated monk, Venerable Acharya Buddharakkhita Mahathera, the abbot of the Mahabodhi Society Vihara, Bangalore, South India. Having received full ordination, Ven. Sanghasena undertook enthusiastic studies of the Dhamma and also practiced various methods of Buddhist meditation.',
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
                    text: 'In 1986, Venerable Bhikkhu Sanghasena, returned to Ladakh and founded the Mahabodhi International Meditation Centre (MIMC) in Ladakh. Since then he has worked tirelessly and selflessly to put the Buddha’s teachings on loving kindness and compassion into action through multifarious charitable humanitarian services which are being carried out in 250 acres of moon-like desert that forms the impressive backdrop to the Devachan Campus at Choglamsar, Ladakh. For the past many years, he has also worked day and night to provide high quality education and safe shelter for underprivileged children, compassionate healthcare for the sick and the needy, empowerment and literacy programmes for women folk and other socially disadvantaged groups, a caring home for the aged and destitute, and many other humanitarian services. ',
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
                    text: "Thousands of students and elders benefit and prosper from the facilities provided under M1MC's umbrella. At present, the Mahabodhi Residential School, Leh has about 500 children under its care with 300 more at its branch school at Bhodkharbu, Tingmosgang and Ney. With a good student ratio with trained teachers, the schools are reputed for providing excellent academic education. As a result, the number of new admissions increases every year. The school also takes care of 10 visually impaired students with utmost care according to their needs. The hostels have all the basic amenities needed to create a conducive study environment. Other activities at the schools engage the students to participate in other life skills programs. MI MC also supports hundreds of students pursuing their higher study in Delhi, Chandigarh, Jammu and other cities in India. The old age home has more than 30 homeless elders, whose needs are taken care of. Various spiritual programs have been conducted since the inception and thousands of seekers of truth and lovers of peace around the world have been benefiting from this noble program. ",
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
                    text: 'Ven. Sanghasena has travelled extensively around the world and participated in many international conferences, seminars and workshops. He urges everyone to promote spiritual and cultural values, literacy, environmental protection, non-violence, inter-religious harmony, co-existence, global family and world peace. He actively supports the elevation of the status of all women, poverty stricken and underserved people. Furthermore, he also raises his voice against issues concerning the whole world like destructive armaments, destruction of the environment and ecology, human injustice, consumerism, economic imbalance and racism.',
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
                    text: 'Ven. Bhikkhu Sanghasena strongly proposes and advocates the creation of a global family as the last solution to the serious crisis faced by the current world. He is actively working with several other leading national and international organizations, which are committed to the developmental works towards a safer, peaceful and integrated world and he is recipient of various national and international awards. ',
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
                    text: 'Venerable Bhikkhu Sanghasena has distinguished himself as both a charismatic and highly energetic social and spiritual worker over the years. Today, he is an internationally well recognized and respected Buddhist leader.',
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
        blockName: 'BlockQuote',
        blockType: 'blockQuote',
        title: null,
        description: null,
        quote:
          'In this turbulent and troubled era, seemingly so dominated by personal and collective greed, hatred and delusion, meditation is the supreme medicine and hope for all societies.',
        author: 'Ven. Bhikkhu Sanghasena',
      },
    ],
    meta: {
      description: 'About The Founder',
      image: heroImage.id,
      title: 'About The Founder',
    },
    title: 'About The Founder',
  }
}
