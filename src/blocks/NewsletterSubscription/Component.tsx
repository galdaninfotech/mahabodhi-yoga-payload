import { RichText } from '@/components/RichText'
import type { NewsletterSubscriptionBlock as NewsletterSubscriptionBlockProps } from '@/payload-types'
import React from 'react'
import { Media } from '@/components/Media'
import { SubscriptionForm } from './Form'

type Props = NewsletterSubscriptionBlockProps

export const NewsletterSubscription: React.FC<Props> = (props) => {
  const { title, subtitle, description, media, showNameField, notes } = props

  return (
    <section className="py-24">
      <div className="container px-0 md:px-4">
        <div
          className="bg-primary/5 rounded-none md:rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-125"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex-1 p-4 md:!p-8 lg:!p-12 xl:!p-24 flex flex-col justify-center space-y-6 relative z-10 w-full lg:w-1/2">
            <div>
              {subtitle && (
                <span className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-2">
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  {title}
                </h2>
              )}
            </div>

            {description && (
              <div className="prose dark:prose-invert max-w-none opacity-80">
                <RichText data={description} enableGutter={false} />
              </div>
            )}

            <SubscriptionForm showNameField={showNameField} />
            
            {notes && notes.map((item, index) => (
              <span key={index} className={`text-xs text-muted-foreground italic ${index === 0 ? 'mt-4' : '-mt-2'}`}>
                {item.note}
              </span>
            ))}
          </div>

          {media && typeof media === 'object' && (
            <div className="flex-1 w-full lg:w-1/2 relative min-h-75 lg:min-h-full order-first lg:order-last">
              <Media 
                resource={media} 
                fill
                imgClassName="object-cover" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}