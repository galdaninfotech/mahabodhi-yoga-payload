'use client'
import { cn } from '@/utilities/cn'
import { useClickableCard } from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export type PostCardData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>

export const PostCard: React.FC<{
  className?: string
  doc?: PostCardData
  showCategories?: boolean
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, showCategories } = props

  const { slug, categories, meta, title, heroImage } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/posts/${slug}`

  // Prioritize heroImage, fallback to metaImage
  const displayImage = heroImage || metaImage

  return (
    <article
      className={cn(
        'group flex flex-col border border-border rounded-sm overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 mb-12',
        className,
      )}
      ref={card.ref}
    >
      {/* Image Section - Top */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {!displayImage ? (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-big-shoulders uppercase tracking-widest">
            No image available
          </div>
        ) : (
          <Media 
            resource={displayImage} 
            fill
            imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Category Overlay */}
        {showCategories && hasCategories && (
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                return (
                  <span 
                    key={index}
                    className="bg-primary text-primary-foreground text-[10px] md:text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-sm shadow-lg"
                  >
                    {category.title}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
      </div>

      {/* Content Section - Bottom */}
      <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col">
        <h3 className="font-big-shoulders text-sm md:text-xl text-foreground mb-6 leading-tight uppercase tracking-wider">
          <Link className="hover:text-primary transition-colors" href={href} ref={link.ref}>
            {title}
          </Link>
        </h3>

        {description && (
          <p className="text-muted-foreground line-clamp-3 mb-8 leading-relaxed text-sm md:text-sm">
            {sanitizedDescription}
          </p>
        )}

        <div className="pt-6 border-t border-border">
          <Link 
            href={href}
            className="inline-flex items-center text-primary font-bold text-xs md:text-sm uppercase tracking-[0.1em] group/link"
          >
            Explore Story
            <svg 
              className="text-accent ml-3 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
