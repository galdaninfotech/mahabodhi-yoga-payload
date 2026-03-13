import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
  contactForm?: any
}
export const registrationPageData: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({ mediaMap, contactForm }) => {

  console.log('Seeding registration page data...')

  return {
    slug: 'registration',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      {
        enabled: true,
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: 'Registration',
        subtitle: 'Sambodhi Retreat Centre',
        media: mediaMap['registration.jpg'],
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
        title: 'Registration Form',
        description: null,
        blockName: 'RegistrationForm',
        blockType: 'registrationForm',
      },
    ],
    meta: {
      description: 'Registration',
      image: mediaMap['registration.jpg'],
      title: 'Registration',
    },
    title: 'Registration',
  }
}
