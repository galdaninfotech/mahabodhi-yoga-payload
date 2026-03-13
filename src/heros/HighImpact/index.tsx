'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'

export const HighImpactHero: React.FC<Page['hero']> = ({ slides }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  if (!slides || slides.length === 0) return null

  return (
    <div className="relative -mt-[13.2rem]" data-theme="dark">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative h-125 w-full overflow-hidden">
              {slide.image && typeof slide.image === 'object' && (
                <div className="absolute inset-0 z-0">
                  <Media fill imgClassName="object-cover" priority resource={slide.image} />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}
              <div className="container relative z-10 h-full flex flex-col items-center justify-end text-center -mt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-4xl px-4"
                >
                  {slide.title && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-[#d19a4a] text-xl md:text-2xl uppercase font-bold mb-3"
                    >
                      {slide.title}
                    </motion.div>
                  )}
                  {slide.subtitle && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white text-lg md:text-2xl opacity-90"
                    >
                      {slide.subtitle}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container relative hidden md:block">
          <div className="absolute bottom-12 right-12 flex gap-2 z-20">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white transition-all" />
            <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white transition-all" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
