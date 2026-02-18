import configPromise from '@payload-config'
import { CollectionSlug, getPayload, PayloadRequest } from 'payload'

export const getPageBySlug = async (collectionSlug:CollectionSlug, pageSlug: string, req: PayloadRequest) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: collectionSlug,
    limit: 1,
    depth: 1,
    where: {
        slug: {
            equals: pageSlug,
        },
    },
    req, // Pass the request object here
  })

  // console.log("Result : ", result.docs?.[0])
  return result.docs?.[0] || null
}