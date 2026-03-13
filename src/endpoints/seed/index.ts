import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import { seedMedia } from './media'
import { seedUsers } from './users'
import { seedForms } from './forms'
import { seedProducts } from './products'
import { seedPages } from './pages'
import { seedEcommerce } from './ecommerce'
import { seedGlobals } from './globals'
import { seedNewsletters } from './newsletters'
import { seedPosts } from './news-posts'
import { seedPostCategories } from './news-posts/categories'

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
  'programme-categories',
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
  const mediaMap = await seedMedia({ payload })
  
  const { customer } = await seedUsers({ payload })
  
  const { contactForm } = await seedForms({ payload })
  
  const products = await seedProducts({ 
    payload, 
    mediaMap
  })
  
  const postCategories = await seedPostCategories({
    payload,
  })

  await seedPages({ 
    payload, 
    contactForm,
    mediaMap
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
    mediaMap
  })

  await seedPosts({
    payload,
    categories: postCategories,
    authors: { customer },
    mediaMap
  })

  payload.logger.info('Seeded database successfully!')
}
