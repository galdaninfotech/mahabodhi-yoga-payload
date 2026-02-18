import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const facilitiesPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'facilities',
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
        title: 'Facilities',
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
                    text: 'The Centre is blessed with a beautiful meditation hall which can accommodate 40 - 50 retreatants at a time, and beautiful gardens, where meditators can practice walking meditation and yoga or simply rest on the lawn under the many fruit trees.',
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
                    text: 'In addition to the spacious accommodation and first-rate facilities for groups, the Sambodhi Retreat Centre has a number of comfortable meditation kuties for experienced solitary practitioners.',
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
                    text: 'The Sambodhi retreat Centre continues to harmoniously develop and gracefully evolves with time under the wise and compassionate guidance of our revered meditation teacher, Venerable Bhikkhu Sanghasena',
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
        id: '6901ce9cad7e4d0db3281be5',
        enabled: true,
        blockName: 'ListTwo',
        lists: [
          {
            title: null,
            content: 'Mediation hall for 50 participants',
          },
          {
            title: null,
            content:
              'Room (Kuties) - Comfortable Kuties for experienced solitary practitioners. The kuties are also for individual participant who wish to have separate room during the retreat. The kuties are quiet and reclusive, it is a double bedded with attached bathroom, a small kitchen for tea/coffee and a small meditation room.',
          },
          {
            title: null,
            content: 'A delightful dining hall for more than 50 people',
          },
          {
            title: null,
            content: 'Vegetarian Food',
          },
          {
            title: null,
            content: 'Separate dormitories for male and female residents',
          },
          {
            title: null,
            content: 'Laundry',
          },
          {
            title: null,
            content: 'Souvenir Shop',
          },
          {
            title: null,
            content: 'Book/Cassette Store',
          },
          {
            title: null,
            content: 'Library',
          },
          {
            title: null,
            content: 'Taxi Booking',
          },
          {
            title: null,
            content: 'Travel Reservation Counter',
          },
          {
            title: null,
            content: 'Hospital',
          },
          {
            title: null,
            content: 'Ambulance on service',
          },
          {
            title: null,
            content: 'Doctors on Duty',
          },
          {
            title: null,
            content: 'Two/Four Wheeler Parking',
          },
          {
            title: null,
            content: 'Guest house',
          },
        ],
        blockType: 'listTwo',
      },
    ],
    meta: {
      description: 'Our Facilities',
      image: heroImage.id,
      title: 'Our Facilities',
    },
    title: 'Our Facilities',
  }
}
