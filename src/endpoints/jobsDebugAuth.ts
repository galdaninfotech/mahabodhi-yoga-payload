import type { Endpoint } from 'payload'

export const jobsDebugAuthEndpoint: Endpoint = {
  path: '/jobs/debug-auth',
  method: 'get',
  handler: async (req) => {
    const cronSecret = process.env.CRON_SECRET
    const authHeader = req.headers.get('authorization')
    const customHeader = req.headers.get('x-cron-secret')
    const authMatches = Boolean(cronSecret && authHeader === `Bearer ${cronSecret}`)
    const customMatches = Boolean(cronSecret && customHeader === cronSecret)

    return Response.json({
      hasCronSecret: Boolean(cronSecret),
      cronSecretLength: cronSecret?.length ?? 0,
      hasAuthHeader: Boolean(authHeader),
      authHeaderLength: authHeader?.length ?? 0,
      hasCustomHeader: Boolean(customHeader),
      customHeaderLength: customHeader?.length ?? 0,
      authMatches,
      customMatches,
    })
  },
}
