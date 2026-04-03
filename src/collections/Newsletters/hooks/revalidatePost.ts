import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    try {
      if (doc._status === 'published') {
        const path = `/newsletters/${doc.slug}`

        payload.logger.info(`Revalidating newsletter at path: ${path}`)

        revalidatePath(path)
        revalidatePath('/newsletters')
        revalidateTag('posts-sitemap', 'max')
      }

      // If the newsletter was previously published, we need to revalidate the old path
      if (previousDoc._status === 'published' && doc._status !== 'published') {
        const oldPath = `/newsletters/${previousDoc.slug}`

        payload.logger.info(`Revalidating old newsletter at path: ${oldPath}`)

        revalidatePath(oldPath)
        revalidatePath('/newsletters')
        revalidateTag('posts-sitemap', 'max')
      }
    } catch (err) {
      payload.logger.error(`Error revalidating newsletter: ${err}`)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    try {
      const path = `/newsletters/${doc?.slug}`

      payload.logger.info(`Revalidating deleted newsletter at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/newsletters')
      revalidateTag('posts-sitemap', 'max')
    } catch (err) {
      payload.logger.error(`Error revalidating deleted newsletter: ${err}`)
    }
  }

  return doc
}
