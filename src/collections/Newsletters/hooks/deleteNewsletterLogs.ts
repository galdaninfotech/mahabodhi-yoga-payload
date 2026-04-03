import type { CollectionBeforeDeleteHook } from 'payload'

export const deleteNewsletterLogs: CollectionBeforeDeleteHook = async ({ id, req }) => {
  const { payload } = req
  
  try {
    payload.logger.info(`Cleaning up newsletter logs for newsletter ID: ${id}...`)
    
    // We pass 'req' to ensures we stay within the same database transaction.
    // This prevents "idle-in-transaction timeout" and deadlock issues.
    // We also use 'overrideAccess: true' to ensure we can delete the logs.
    const result = await payload.delete({
      collection: 'newsletter-logs',
      where: {
        newsletter: {
          equals: id,
        },
      },
      req,
      overrideAccess: true,
    })
    
    // Check if result exists and has docs (depending on payload version)
    const count = Array.isArray(result) ? result.length : (result as any).docs?.length || 0
    payload.logger.info(`Successfully deleted associated logs for newsletter ID: ${id}`)
  } catch (error) {
    // If the error is already about a closed connection, we can't do much,
    // but we log it and try to fail gracefully.
    payload.logger.error(`Error in newsletter logs cleanup for ${id}: ${error}`)
    // We don't throw here to avoid a crash if it's already deleted or connection is closed
  }
}
