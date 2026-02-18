'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { Media } from '@/payload-types'

// Helper to get image URL
const getImageUrl = (image: string | number | Media | null | undefined): string | null => {
  if (!image) return null
  if (typeof image === 'string') return image
  // If image is a number, it's likely just an ID, so we can't get a URL directly
  if (typeof image === 'number') return null 
  if (typeof image === 'object' && image !== null && 'url' in image) {
    return image.url ?? null
  }
  return null
}

export const Gallery: React.FC<GalleryBlockProps> = (props) => {
  const { images: allItems } = props
  const CHUNK_SIZE = 12

  // console.log(allItems)

  const [images, setImages] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)

  const loadMoreImages = useCallback(() => {
    if (!allItems) return
  
    setPage((prevPage) => {
      const start = (prevPage - 1) * CHUNK_SIZE
      const end = start + CHUNK_SIZE
    
      const newImageUrls = allItems
        .slice(start, end)
        .map((item) => getImageUrl(item.image))
        .filter((url): url is string => !!url)

      // ✅ Debug logs
      // console.log("=== Loading Images ===")
      // console.log("Prev Page:", prevPage)
      // console.log("Start:", start, "End:", end)
      // console.log("New Images:", newImageUrls)
      // console.log("Already Loaded:", images.length)

      if (newImageUrls.length > 0) {
        setImages((prevImages) => [
          ...prevImages,
          ...newImageUrls.filter((url) => !prevImages.includes(url)), // dedupe
        ])
        return prevPage + 1  // increment only after using it
      }
    
      return prevPage
    })
  }, [allItems, images.length])

  
  

  // Load initial batch
  useEffect(() => {
    loadMoreImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        allItems &&
        images.length < allItems.length
      ) {
        loadMoreImages()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [images.length, allItems, loadMoreImages])

  // Lightbox handlers...
  const handleImageClick = (index: number) => setSelectedIndex(index)
  const handleCloseModal = () => setSelectedIndex(null)
  const handleNext = () => {
    if (selectedIndex === null) return
    setDirection(1)
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
  }
  const handlePrev = () => {
    if (selectedIndex === null) return
    setDirection(-1)
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    )
  }

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null

  return (
    <div className="p-4">
      {/* ✅ Image Grid (unchanged) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* ✅ Lightbox (unchanged) */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative"
              custom={direction}
              initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage}
                alt="Enlarged gallery view"
                width={800}
                height={600}
                className="object-contain max-w-full max-h-full"
              />
            </motion.div>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10095;
            </button>

            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}