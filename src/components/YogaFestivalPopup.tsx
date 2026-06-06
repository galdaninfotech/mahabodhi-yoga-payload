'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const YogaFestivalPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const MAX_SHOW_COUNT = 5

  useEffect(() => {
    // Do not show on the contact page
    if (pathname === '/about/contact-us') {
      setIsOpen(false)
      return
    }

    // Get the current show count from this session
    const showCount = parseInt(sessionStorage.getItem('yoga-festival-popup-count') || '0', 10)
    
    if (showCount < MAX_SHOW_COUNT) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // Show after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [pathname])

  const handleClose = () => {
    setIsOpen(false)
    const currentCount = parseInt(sessionStorage.getItem('yoga-festival-popup-count') || '0', 10)
    sessionStorage.setItem('yoga-festival-popup-count', (currentCount + 1).toString())
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors text-2xl font-bold"
              aria-label="Close popup"
            >
              &times;
            </button>
            
            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/yoga-festival.jpg"
                alt="Yoga Festival in Ladakh"
                fill
                className="object-contain sm:object-cover"
                priority
              />
            </div>
            
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Yoga Festival in Ladakh</h2>
              <p className="text-gray-600 mb-6 font-medium">
                Join us for an extraordinary journey of mindfulness and wellness in the heart of the Himalayas.
              </p>
              <Link
                href={'https://docs.google.com/forms/d/e/1FAIpQLScMSlsaa0rLxgYCsoK1wnRBLtj6atZbrFQoDsHUg_-3sdsX9A/viewform'}
                target='_new'
                className="inline-block bg-[#D2691E] hover:bg-[#8B4513] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
