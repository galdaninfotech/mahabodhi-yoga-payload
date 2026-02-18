import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const instructorsPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'instructors',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        title: 'About The Teacher',
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
                    text: 'In 1986 Venerable Bhikkhu Sanghasena founded the Mahabodhi International Meditation Centre (MIMC) in Ladakh. Since its inception, Venerable has vigorously and selflessly worked to provide high quality education and shelter for the underprivileged children, health care for the poor and needy patients, a caring home for and respect for the less fortunate old folks and destitute, empowerment and literacy programs for elderly women and many other multifarious humanitarian services. Above all these activities, spiritual program was his consequential projects. Under this program, Vipassana and Samatha Meditation course are conducted and time to time Dhamma talk by Venerable based in the essence of the Buddha\'s teachings Venerable is a well acclaimed senior meditation teacher, who has touched the hearts of thousands through his simple and harmonious way of teaching and his popular slogan "Compassion in Action, Mediation in Action."',
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
                format: 'start',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Benefits of Meditation:',
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
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Meditation course is designed to the people:',
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
      {
        enabled: true,
        blockType: 'listOne',
        marginTop: '-135px',
        marginLeft: '20px',
        space: '10px',
        blockName: null,

        lists: [
          {
            title: 'To find immediate physical and psychological relaxation.',
            content: null,
          },
          {
            title:
              'To train and discipline the mind and use it positively, effectively and efficiently in daily life.',
            content: null,
          },
          {
            title: 'To develop tranquility, serenity and clarity of mind.',
            content: null,
          },
          {
            title: 'To find practical solutions to the problems occurring in our daily lives.',
            content: null,
          },
          {
            title:
              "To learn the art of living in this world peacefully, harmoniously, friendly, mindfully, creatively, positively, helping and serving, caring and sharing with each other's without hurting and harming each others.",
            content: null,
          },
          {
            title: 'To help experiencing the ultimate bliss of Nirvana.',
            content: null,
          },
        ],
      },
    ],
    meta: {
      description: 'Our Instructors',
      image: heroImage.id,
      title: 'Our Instructors',
    },
    title: 'Our Instructors',
  }
}
