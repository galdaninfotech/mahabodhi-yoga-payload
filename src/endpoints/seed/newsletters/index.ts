import type { Payload } from 'payload'
import { generalGroupData, studentsGroupData } from './subscriber-groups'
import { subscriber1Data, subscriber2Data, subscriber3Data, subscriber4Data, subscriber5Data} from './subscribers'
import { NewsletterOctData } from './newsletter-oct'
import { NewsletterNovData } from './newsletter-nov'
import { NewsletterDecData } from './newsletter-dec'
import { NewsletterJanData } from './newsletter-jan'
import { NewsletterFebData } from './newsletter-feb'
import type { Media } from '@/payload-types'

export const seedNewsletters = async ({
  payload,
  mediaMap,
}: {
  payload: Payload
  mediaMap: Record<string, Media>
}) => {
  payload.logger.info(`— Seeding subscriber groups...`)

  const [generalGroup, studentsGroup] = await Promise.all([
    payload.create({
      collection: 'subscriber-groups',
      data: generalGroupData,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'subscriber-groups',
      data: studentsGroupData,
      context: {
        disableRevalidate: true,
      },
    }),
  ])



  payload.logger.info(`— Seeding subscribers...`)

  await Promise.all([
    payload.create({
      collection: 'subscribers',
      data: subscriber1Data([generalGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'subscribers',
      data: subscriber2Data([generalGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'subscribers',
      data: subscriber3Data([generalGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'subscribers',
      data: subscriber4Data([studentsGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'subscribers',
      data: subscriber5Data([studentsGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
  ])



  payload.logger.info(`— Seeding newsletters...`)

  await Promise.all([
    payload.create({
      collection: 'newsletters',
      data: NewsletterOctData(mediaMap),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'newsletters',
      data: NewsletterNovData(mediaMap),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'newsletters',
      data: NewsletterDecData(mediaMap),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'newsletters',
      data: NewsletterJanData(mediaMap),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'newsletters',
      data: NewsletterFebData(mediaMap),
      context: {
        disableRevalidate: true,
      },
    }),
  ])


}
