import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import { seedMedia } from './media'
import { seedUsers } from './users'
import { seedForms } from './forms'
import { seedProducts } from './products'
import { seedPages } from './pages'
import { seedEcommerce } from './ecommerce'
import { seedGlobals } from './globals'
import { seedNewsletters } from './newsletters'
import { seedPosts } from './posts'

const collections: CollectionSlug[] = [
  'newsletter-logs',
  'subscribers',
  'subscriber-groups',
  'newsletters',
  'form-submissions',
  'forms',
  'transactions',
  'orders',
  'carts',
  'variants',
  'variantOptions',
  'variantTypes',
  'products',
  'categories',
  'media',
  'pages',
  'posts',
  'addresses',
]

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // Clear existing collections
  payload.logger.info(`— Clearing collections...`)
  for (const collection of collections) {
    await payload.db.deleteMany({ collection, req, where: {} })
    if (payload.collections[collection].config.versions) {
      await payload.db.deleteVersions({ collection, req, where: {} })
    }
  }

  // Execute seeding steps in logical order
  const { imageHat, imageTshirtBlack, imageTshirtWhite, imageHero } = await seedMedia({ payload })
  
  const { customer } = await seedUsers({ payload })
  
  const { contactForm } = await seedForms({ payload })
  
  const products = await seedProducts({ 
    payload, 
    images: { imageHat, imageTshirtBlack, imageTshirtWhite, imageHero } 
  })
  
  await seedPages({ 
    payload, 
    images: { imageHat, imageHero }, 
    contactForm 
  })
  
  await seedEcommerce({ 
    payload, 
    customer, 
    products 
  })
  
  await seedGlobals({ 
    payload, 
    req 
  })

  await seedNewsletters({
    payload,
    images: { imageHero },
  })

  await seedPosts({
    payload,
    images: { imageHero },
    categories: { accessoriesCategory: products.accessoriesCategory },
    authors: { customer },
  })

  payload.logger.info('Seeded database successfully!')
}
