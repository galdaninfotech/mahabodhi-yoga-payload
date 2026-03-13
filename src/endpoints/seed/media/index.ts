import type { Payload, File } from 'payload'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import type { Media } from '@/payload-types'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const seedMedia = async ({ payload }: { payload: Payload }): Promise<Record<string, Media>> => {
  payload.logger.info(`— Seeding media...`)

  const mediaMap: Record<string, Media> = {}

  // Legacy images
  const [imageHatBuffer, imageTshirtBlackBuffer, imageTshirtWhiteBuffer, heroBuffer] =
    await Promise.all([
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/hat-logo.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/tshirt-black.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/tshirt-white.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
      ),
    ])

  const [imageHat, imageTshirtBlack, imageTshirtWhite, imageHero] = await Promise.all([
    payload.create({
      collection: 'media',
      data: { alt: 'Hat Logo' },
      file: imageHatBuffer,
      context: { disableRevalidate: true },
    }),
    payload.create({
      collection: 'media',
      data: { alt: 'T-Shirt Black' },
      file: imageTshirtBlackBuffer,
      context: { disableRevalidate: true },
    }),
    payload.create({
      collection: 'media',
      data: { alt: 'T-Shirt White' },
      file: imageTshirtWhiteBuffer,
      context: { disableRevalidate: true },
    }),
    payload.create({
      collection: 'media',
      data: { alt: 'Hero Image' },
      file: heroBuffer,
      context: { disableRevalidate: true },
    }),
  ])

  // Add legacy images to map with their original names or expected keys
  mediaMap['imageHat'] = imageHat
  mediaMap['imageTshirtBlack'] = imageTshirtBlack
  mediaMap['imageTshirtWhite'] = imageTshirtWhite
  mediaMap['imageHero'] = imageHero
  mediaMap['hat-logo.png'] = imageHat
  mediaMap['tshirt-black.png'] = imageTshirtBlack
  mediaMap['tshirt-white.png'] = imageTshirtWhite
  mediaMap['image-hero1.webp'] = imageHero

  // Local directories to seed
  const publicImagesDir = path.resolve(dirname, '../../../../public/images')
  const directoriesToScan = [
    'pages', 
    'pages/about', 
    'pages/founder', 
    'pages/courses-and-retreats', 
    'pages/changspa-centre', 
    'gallery',
    'news-posts', 
    'newsletters',
    'slider',
  ]

  for (const subDir of directoriesToScan) {
    const fullPath = path.join(publicImagesDir, subDir)
    if (fs.existsSync(fullPath)) {
      const files = fs.readdirSync(fullPath)
      
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|gif|webp|svg|pdf)$/i)) {
          const filePath = path.join(fullPath, file)
          const fileBuffer = fs.readFileSync(filePath)
          const stats = fs.statSync(filePath)
          
          const extension = file.split('.').pop()?.toLowerCase()
          let mimetype = `image/${extension?.replace('jpg', 'jpeg')}`
          if (extension === 'pdf') {
            mimetype = 'application/pdf'
          }
          
          const createdMedia = await payload.create({
            collection: 'media',
            data: {
              alt: file.split('.')[0].replace(/-/g, ' ').replace(/_/g, ' '),
            },
            file: {
              name: file,
              data: fileBuffer,
              mimetype,
              size: stats.size,
            },
            context: {
              disableRevalidate: true,
            },
          })
          
          mediaMap[file] = createdMedia
          // Also store with subDir prefix to avoid collisions if needed
          mediaMap[`${subDir}/${file}`] = createdMedia
        }
      }
    }
  }

  return mediaMap
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()
  const extension = url.split('.').pop()?.toLowerCase()
  let mimetype = `image/${extension}`
  if (extension === 'pdf') {
    mimetype = 'application/pdf'
  }

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype,
    size: data.byteLength,
  }
}
