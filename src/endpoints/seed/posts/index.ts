import type { Payload } from 'payload'
import { post1Data } from './posts'
import type { Media, Category, User } from '@/payload-types'

export const seedPosts = async ({
  payload,
  images,
  categories,
  authors,
}: {
  payload: Payload
  images: {
    imageHero: Media
  }
  categories: {
    accessoriesCategory: Category
  }
  authors: {
    customer: User
  }
}) => {
  payload.logger.info(`— Seeding posts...`)

  await payload.create({
    collection: 'posts',
    data: post1Data(
      images.imageHero.id as number, 
      [categories.accessoriesCategory.id as number], 
      [authors.customer.id as number]
    ),
    context: {
      disableRevalidate: true,
    },
  })
}
