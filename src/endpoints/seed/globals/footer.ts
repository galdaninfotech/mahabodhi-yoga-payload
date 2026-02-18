import { DataFromGlobalSlug, PayloadRequest } from 'payload'
import { getPageBySlug } from './utilities'
import { Footer } from '@/payload-types'

export const footerData = async ({ req }: { req: PayloadRequest }): Promise<Partial<DataFromGlobalSlug<'footer'>>> => {
  const aboutPage = await getPageBySlug('pages', 'about', req)

  const moreLinks: NonNullable<Footer['moreLinks']> = []

  if (aboutPage) {
    moreLinks.push({
      link: {
        type: "reference",
        label: "About Us",
        reference: {
          relationTo: "pages",
          value: aboutPage.id,
        },
      }
    })
  }

  moreLinks.push(
    {
      link: {
        type: 'custom',
        label: 'Admin',
        url: '/admin',
      },
    },
    {
      link: {
        type: 'custom',
        label: 'Find my order',
        url: '/find-order',
      },
    },
    {
      link: {
        type: 'custom',
        label: 'Source Code',
        newTab: true,
        url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
      },
    },
    {
      link: {
        type: 'custom',
        label: 'Payload',
        newTab: true,
        url: 'https://payloadcms.com/',
      },
    },
  )

  return {
    about: {
      title: 'Sambodhi Retreat Centre',
      description: 'The incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation, is situated in a secluded corner of the transformative Mahabodhi International Meditation Centre campus.',
    },
    moreLinks,
  }
}
