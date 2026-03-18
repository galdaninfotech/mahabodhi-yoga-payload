import type { Config } from "@netlify/functions";

export default async (req: Request) => {
  const cronSecret = process.env.CRON_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

   if (!siteUrl || !cronSecret) {
    console.error('Missing NEXT_PUBLIC_SERVER_URL or CRON_SECRET')
    return new Response('Configuration missing', { status: 500 })
  }

  console.log('Triggering Payload Jobs at:', siteUrl)
  
  try {
    // In Payload 3.0, the runner endpoint is GET /api/payload-jobs/run
    const res = await fetch(`${siteUrl}/api/payload-jobs/run?allQueues=true`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Failed to run jobs: ${res.status} ${errorText}`);
      return new Response(`Error: ${res.status} ${errorText}`, { status: res.status });
    }
    
    const result = await res.json();
    console.log('Payload Jobs Result:', JSON.stringify(result));
    
    return new Response(JSON.stringify({ success: true, result }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error triggering payload jobs:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const config: Config = {
  schedule: "*/5 * * * *",
};
