import { getPayload } from 'payload'
import configPromise from './src/payload.config'

const check = async () => {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
    draft: true,
  })

  const posts = await payload.find({
    collection: 'posts',
    limit: 100,
    draft: true,
  })

  console.log('Pages count:', pages.totalDocs)
  console.log('Pages status:', pages.docs.map(d => ({ slug: d.slug, status: d._status })))
  
  console.log('Posts count:', posts.totalDocs)
  console.log('Posts status:', posts.docs.map(d => ({ slug: d.slug, status: d._status })))

  process.exit(0)
}

check()
