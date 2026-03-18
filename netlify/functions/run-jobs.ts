import type { Config } from "@netlify/functions"

export default async (req: Request) => {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
  const cronSecret = process.env.CRON_SECRET

  if (!serverURL || !cronSecret) {
    console.error('Missing NEXT_PUBLIC_SERVER_URL or CRON_SECRET')
    return new Response('Configuration missing', { status: 500 })
  }

  console.log('Triggering Payload Jobs at:', serverURL)

  try {
    const jobsURL = new URL('/api/payload-jobs/run', serverURL)
    jobsURL.searchParams.set('queue', 'default')
    jobsURL.searchParams.set('limit', '10')

    console.log('Payload Jobs Request:', JSON.stringify({
      url: jobsURL.toString(),
      method: 'GET',
      hasCronSecret: Boolean(cronSecret),
      cronSecretLength: cronSecret.length,
      userAgent: req.headers.get('user-agent'),
    }))

    const response = await fetch(jobsURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
      },
    })

    const rawBody = await response.text()
    let result: unknown = rawBody

    try {
      result = JSON.parse(rawBody)
    } catch {
      result = rawBody
    }

    console.log('Payload Jobs Response:', JSON.stringify({
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      result,
    }))

    if (!response.ok) {
      return new Response(JSON.stringify({
        success: false,
        status: response.status,
        statusText: response.statusText,
        result,
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error triggering jobs:', error)
    return new Response(JSON.stringify({ error: 'Failed to trigger jobs' }), {
      status: 500,
    })
  }
}

export const config: Config = {
  schedule: "*/5 * * * *"
}
