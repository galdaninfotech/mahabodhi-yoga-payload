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
    const res = await fetch(`${siteUrl}/api/payload-jobs/run`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Failed to run jobs: ${res.status} ${errorText}`);
      return new Response(`Error: ${res.status}`, { status: res.status });
    }
    
    return new Response("Jobs triggered successfully", { status: 200 });
  } catch (error) {
    console.error('Error triggering payload jobs:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const config: Config = {
  schedule: "*/5 * * * *",
};
