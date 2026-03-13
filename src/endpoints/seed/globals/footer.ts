import { DataFromGlobalSlug, PayloadRequest } from 'payload'
import { getPageBySlug } from './utilities'
import { Footer } from '@/payload-types'

export const footerData = async ({ req }: { req: PayloadRequest }): Promise<Partial<DataFromGlobalSlug<'footer'>>> => {
  const aboutPage = await getPageBySlug('pages', 'about', req)
  const ShanriLaRetreatPage = await getPageBySlug('pages', 'shangri-la-retreat', req)
  const MeditationRetreatsPage = await getPageBySlug('pages', 'meditation-retreats', req)
  const HistoryOfMahabodhiPage = await getPageBySlug('pages', 'history-of-mahabodhi', req)

  const moreLinks: NonNullable<Footer['moreLinks']> = []

  if (aboutPage) {
    moreLinks.push({
      link: {
        type: "reference",
        label: "Sambodhi Retreat Centre",
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
        type: "reference",
        label: "Shanri-La Retreat",
        reference: {
          relationTo: "pages",
          value: ShanriLaRetreatPage.id,
        },
      }
    },
    {
      link: {
        type: 'custom',
        label: 'Sambodhi Newsletter',
        url: '/newsletters',
      },
    },
    {
      link: {
        type: "reference",
        label: "Meditation Retreats",
        reference: {
          relationTo: "pages",
          value: MeditationRetreatsPage.id,
        },
      }
    },
    {
      link: {
        type: "reference",
        label: "History Of Mahabodhi",
        reference: {
          relationTo: "pages",
          value: HistoryOfMahabodhiPage.id,
        },
      }
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
