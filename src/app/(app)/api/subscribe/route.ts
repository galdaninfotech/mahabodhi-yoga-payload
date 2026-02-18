import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const POST = async (req: Request) => {
  const payload = await getPayload({ config: configPromise })
  
  try {
    const { email, name } = await req.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if subscriber already exists
    const existing = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existing.docs.length > 0) {
      return Response.json({ message: 'You are already subscribed!' })
    }

    // Create new subscriber
    await payload.create({
      collection: 'subscribers',
      data: {
        active: false,
        email,
        name: name || '',
      },
    })

    return Response.json({ success: true, message: 'Thank you for subscribing!' })
  } catch (err: any) {
    console.error('Newsletter subscription error:', err)
    return Response.json({ error: 'An error occurred. Please try again.' }, { status: 500 })
  }
}
