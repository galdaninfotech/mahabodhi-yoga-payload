import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
  contactForm?: any
}
export const customizedCoursesPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({ mediaMap, contactForm }) => {

  console.log('Seeding yoga-customized-courses page data...')

  return {
    slug: 'yoga-customized-courses',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      {
        enabled: true,
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: 'International Festival',
        subtitle: 'Sambodhi Retreat Centre',
        media: mediaMap['yoga-customized-courses.jpg'],
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
                    text: 'Customized Courses',
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
    ],
    meta: {
      description: 'Yoga Customized Courses',
      image: mediaMap['yoga-customized-courses.jpg'],
      title: 'Yoga Customized Courses',
    },
    title: 'Yoga Customized Courses',
  }
}
