import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
}

export const aboutPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap,
}) => {

  console.log('Seeding about page data...')

  return {
    slug: 'about',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      {
        enabled: true,
        title: 'Sambodhi Retreat Centre',
        subtitle: 'Mahabodhi International Meditation Centre',
        media: mediaMap['about.jpg'],
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
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
                    text: 'Welcome to the incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation.',
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
      description: 'About',
      image: mediaMap['about.jpg'],
      title: 'About',
    },
    title: 'About',
  }
}
