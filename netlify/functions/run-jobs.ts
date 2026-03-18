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
    const response = await fetch(`${serverURL}/api/jobs/trigger`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()
    console.log('Payload Jobs Result:', JSON.stringify(result))

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
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
