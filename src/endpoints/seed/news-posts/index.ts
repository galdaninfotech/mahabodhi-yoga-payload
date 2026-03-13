import type { Payload } from 'payload'
import type { Media, Category, User } from '@/payload-types'
import { post1Data } from './post-1'
import { post2Data } from './post-2'
import { post3Data } from './post-3'
import { post4Data } from './post-4'
import { post5Data } from './post-5'
import { post6Data } from './post-6'
import { post7Data } from './post-7'
import { post8Data } from './post-8'
import { post9Data } from './post-9'
import { post10Data } from './post-10'
import { post11Data } from './post-11'
import { post12Data } from './post-12'

export const seedPosts = async ({
  payload,
  categories,
  authors,
  mediaMap,
}: {
  payload: Payload
  categories: Category[]
  authors: {
    customer: User
  }
  mediaMap: Record<string, Media>
}) => {
  payload.logger.info(`— Seeding posts...`)

  const getCatId = (title: string): number => {
    const category = categories.find(cat => cat.title === title)
    return (category?.id as number) || (categories[0].id as number)
  }

  const yogaPractice = getCatId('Yoga Practice')
  const mindfulness = getCatId('Mindfulness')
  const holisticHealth = getCatId('Holistic Health')
  const community = getCatId('Community')
  const spirituality = getCatId('Spirituality')
  const meditationTips = getCatId('Meditation Tips')
  const wellnessJourney = getCatId('Wellness Journey')

  await payload.create({
    collection: 'posts',
    data: post1Data(mediaMap, [community], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post2Data(mediaMap, [mindfulness], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post3Data(mediaMap, [yogaPractice], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post4Data(mediaMap, [yogaPractice], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post5Data(mediaMap, [spirituality], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post6Data(mediaMap, [community], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post7Data(mediaMap, [mindfulness], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post8Data(mediaMap, [spirituality], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post9Data(mediaMap, [spirituality], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post10Data(mediaMap, [yogaPractice], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post11Data(mediaMap, [meditationTips], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })

  await payload.create({
    collection: 'posts',
    data: post12Data(mediaMap, [wellnessJourney], [authors.customer.id as number]),
    context: { disableRevalidate: true },
  })
}
