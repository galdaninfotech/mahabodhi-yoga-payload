import type { Config } from '@netlify/functions'
import { getPayload } from 'payload'

import payloadConfig from '../../src/payload.config'

export default async () => {
  try {
    console.log('Running Payload jobs directly from Netlify scheduled function')

    const payload = await getPayload({ config: payloadConfig as any })
    const result = await payload.jobs.run({
      allQueues: true,
      limit: 10,
    })

    console.log('Payload Jobs Result:', JSON.stringify(result))

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to run jobs'

    console.error('Error running Payload jobs:', error)

    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export const config: Config = {
  schedule: '*/5 * * * *',
}
