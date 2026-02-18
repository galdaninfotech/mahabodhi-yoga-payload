import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
  topContentImage: Media
}

export const aboutPageData:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage, 
  metaImage, 
  topContentImage
}) => {
  return {
    slug: 'about',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Welcome to the incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        ],
      },
    ],
    meta: {
      description: 'About',
      image: heroImage.id,
      title: 'About',
    },
    title: 'About',
  }
}
