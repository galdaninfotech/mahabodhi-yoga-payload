import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('Products Transition', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  }, 60000)

  it('should have exactly 2 products (the new courses) with positive inventory', async () => {
    const products = await payload.find({
      collection: 'products',
    })
    
    expect(products.totalDocs).toBe(2)
    
    const titles = products.docs.map(doc => doc.title)
    expect(titles).toContain('7-Day Silent Meditation Retreat')
    expect(titles).toContain('Beginner Hatha Yoga Course')

    products.docs.forEach(product => {
      expect(product.inventory).toBeGreaterThan(0)
    })
  })
})
