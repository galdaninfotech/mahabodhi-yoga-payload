import { getPayload, Payload } from 'payload'
import configPromise from '@/payload.config'
import { describe, it, beforeAll, expect, beforeEach } from 'vitest'

let payload: Payload

describe('Newsletter System Integration', () => {
  beforeAll(async () => {
    const config = await configPromise
    payload = await getPayload({ config })
  })

  beforeEach(async () => {
    // Clean up test data
    await payload.delete({
      collection: 'newsletter-logs',
      context: { disableRevalidate: true },
      where: {
        id: { exists: true },
      },
    })

    await payload.delete({
      collection: 'subscribers',
      context: { disableRevalidate: true },
      where: {
        email: {
          contains: 'test-newsletter',
        },
      },
    })
    
    await payload.delete({
      collection: 'subscriber-groups',
      context: { disableRevalidate: true },
      where: {
        name: {
          contains: 'Test Group',
        },
      },
    })

    await payload.delete({
      collection: 'newsletters',
      context: { disableRevalidate: true },
      where: {
        title: {
          contains: 'Test',
        },
      },
    })
  })

  describe('Subscribers', () => {
    it('should create a subscriber with active: false by default', async () => {
      const sub = await payload.create({
        collection: 'subscribers',
        context: { disableRevalidate: true },
        data: {
          email: 'test-newsletter-default@example.com',
          name: 'Default Test',
        },
      })

      expect(sub.active).toBe(false)
    })

    it('should enforce unique email constraint', async () => {
      const email = 'test-newsletter-unique@example.com'
      await payload.create({
        collection: 'subscribers',
        context: { disableRevalidate: true },
        data: { email },
      })

      await expect(
        payload.create({
          collection: 'subscribers',
          context: { disableRevalidate: true },
          data: { email },
        })
      ).rejects.toThrow()
    })
  })

  describe('Newsletter Sending Logic (Simulated Endpoint Logic)', () => {
    it('should only find active subscribers when filtering', async () => {
      // Create one active and one inactive subscriber
      await payload.create({
        collection: 'subscribers',
        context: { disableRevalidate: true },
        data: { email: 'test-newsletter-active@example.com', active: true },
      })
      await payload.create({
        collection: 'subscribers',
        context: { disableRevalidate: true },
        data: { email: 'test-newsletter-inactive@example.com', active: false },
      })

      const activeSubs = await payload.find({
        collection: 'subscribers',
        where: {
          active: { equals: true },
          email: { contains: 'test-newsletter' }
        },
      })

      expect(activeSubs.docs.length).toBe(1)
      expect(activeSubs.docs[0].email).toBe('test-newsletter-active@example.com')
    })

    it('should correctly prevent duplicate sends using logs', async () => {
      const newsletter = await payload.create({
        collection: 'newsletters',
        context: { disableRevalidate: true },
        data: {
          title: 'Test Duplicate Protection',
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Test content',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          _status: 'published',
        },
      })

      const sub = await payload.create({
        collection: 'subscribers',
        context: { disableRevalidate: true },
        data: { email: 'test-newsletter-dup@example.com', active: true },
      })

      // Create a successful log manually
      await payload.create({
        collection: 'newsletter-logs',
        context: { disableRevalidate: true },
        data: {
          newsletter: newsletter.id,
          subscriber: sub.id,
          status: 'success',
          sentAt: new Date().toISOString(),
        },
      })

      // Simulate the filtering logic in the endpoint
      const existingLogs = await payload.find({
        collection: 'newsletter-logs',
        where: {
          and: [
            { newsletter: { equals: newsletter.id } },
            { status: { equals: 'success' } },
            { subscriber: { equals: sub.id } },
          ],
        },
      })

      expect(existingLogs.docs.length).toBe(1)
      
      // Cleanup
      await payload.delete({
        collection: 'newsletter-logs',
        context: { disableRevalidate: true },
        where: { newsletter: { equals: newsletter.id } }
      })
      await payload.delete({
        collection: 'newsletters',
        context: { disableRevalidate: true },
        id: newsletter.id
      })
    })
  })
})
