import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'
import { seed as seedData } from '../endpoints/seed'
import { createLocalReq } from 'payload'

const seed = async () => {
  const payload = await getPayload({ config })

  const req = await createLocalReq({}, payload)

  try {
    await seedData({ payload, req })
    console.log('Seed completed successfully')
    process.exit(0)
  } catch (err) {
    console.error('Error seeding data:', err)
    process.exit(1)
  }
}

seed()
