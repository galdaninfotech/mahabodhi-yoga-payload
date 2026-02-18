import type { Payload } from 'payload'
import { generalGroupData, studentsGroupData } from './subscriber-groups'
import { subscriber1Data, subscriber2Data } from './subscribers'
import { welcomeNewsletterData } from './newsletters'
import type { Media } from '@/payload-types'

export const seedNewsletters = async ({
  payload,
  images,
}: {
  payload: Payload
  images: {
    imageHero: Media
  }
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
      data: subscriber2Data([generalGroup.id as number, studentsGroup.id as number]),
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info(`— Seeding newsletters...`)

  await payload.create({
    collection: 'newsletters',
    data: welcomeNewsletterData(images.imageHero.id as number),
    context: {
      disableRevalidate: true,
    },
  })
}
