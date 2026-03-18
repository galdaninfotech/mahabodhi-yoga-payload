import type { Config } from '@netlify/functions'

export default async () => {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
  const cronSecret = process.env.CRON_SECRET

  if (!serverURL || !cronSecret) {
    console.error('Missing NEXT_PUBLIC_SERVER_URL or CRON_SECRET')
    return new Response(JSON.stringify({ success: false, error: 'Configuration missing' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  try {
    const handleSchedulesURL = new URL('/api/payload-jobs/handle-schedules', serverURL)
    handleSchedulesURL.searchParams.set('queue', 'default')

    const runJobsURL = new URL('/api/payload-jobs/run', serverURL)
    runJobsURL.searchParams.set('queue', 'default')
    runJobsURL.searchParams.set('limit', '10')

    const headers = {
      Authorization: `Bearer ${cronSecret}`,
      'x-cron-secret': cronSecret,
    }

    console.log('Triggering Payload job schedules at:', handleSchedulesURL.toString())
    const schedulesResponse = await fetch(handleSchedulesURL, {
      method: 'GET',
      headers,
    })
    const schedulesResult = await schedulesResponse.json()

    console.log('Payload handle-schedules response:', JSON.stringify({
      ok: schedulesResponse.ok,
      status: schedulesResponse.status,
      statusText: schedulesResponse.statusText,
      result: schedulesResult,
    }))

    const noSchedulesDefined =
      schedulesResponse.status === 500 &&
      schedulesResult &&
      typeof schedulesResult === 'object' &&
      'message' in schedulesResult &&
      schedulesResult.message ===
        'Cannot handle schedules because no tasks or workflows with schedules are defined.'

    if (!schedulesResponse.ok && !noSchedulesDefined) {
      return new Response(JSON.stringify({
        success: false,
        step: 'handle-schedules',
        status: schedulesResponse.status,
        statusText: schedulesResponse.statusText,
        result: schedulesResult,
      }), {
        status: schedulesResponse.status,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    if (noSchedulesDefined) {
      console.log('No schedulable jobs defined; continuing to run queued jobs.')
    }

    console.log('Triggering Payload jobs at:', runJobsURL.toString())
    const runResponse = await fetch(runJobsURL, {
      method: 'GET',
      headers,
    })
    const runResult = await runResponse.json()

    console.log('Payload run response:', JSON.stringify({
      ok: runResponse.ok,
      status: runResponse.status,
      statusText: runResponse.statusText,
      result: runResult,
    }))

    if (!runResponse.ok) {
      return new Response(JSON.stringify({
        success: false,
        step: 'run',
        status: runResponse.status,
        statusText: runResponse.statusText,
        result: runResult,
      }), {
        status: runResponse.status,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify({
      success: true,
      handleSchedules: schedulesResult,
      run: runResult,
    }), {
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
