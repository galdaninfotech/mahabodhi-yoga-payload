import type { Form, Media } from '@/payload-types'

import { RequiredDataFromCollectionSlug } from 'payload'

type ProductArgs = {
  contactForm: Form
  mediaMap: Record<string, Media>
}

export const contactPageData: (args: ProductArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  contactForm,
  mediaMap,
}) => {

  console.log('Seeding contact page data...')

  return {
    slug: 'contact',
    _status: 'published',
    hero: {
      type: 'none',
    },
    layout: [
      // {
      //   blockName: null,
      //   blockType: 'mediaBlock',
      //   media: mediaMap['contact.jpg'],
      // },
      {
        blockType: 'formBlock',
        enableIntro: true,
        form: contactForm,
        introContent: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Example contact form:',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
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
    meta: {
      description: 'Contact',
      // image: mediaMap['contact.jpg'],
      title: 'Contact',
    },
    title: 'Contact',
  }
}
