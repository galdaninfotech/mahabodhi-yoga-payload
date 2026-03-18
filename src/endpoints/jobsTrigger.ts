import type { Endpoint } from 'payload'

export const jobsTriggerEndpoint: Endpoint = {
  path: '/jobs/trigger',
  method: 'post',
  handler: async (req) => {
    const authHeader = req.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    req.payload.logger.info({
      msg: 'Manually triggering Payload jobs runner',
      hasCronSecret: Boolean(cronSecret),
      cronSecretLength: cronSecret.length,
    })

    try {
      const result = await req.payload.jobs.run({
        allQueues: true,
        limit: 10,
      })

      return Response.json({ success: true, result })
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Internal error'

      req.payload.logger.error({
        err: error,
        msg: 'Error running jobs',
      })

      return Response.json({ error: message }, { status: 500 })
    }
  },
}
