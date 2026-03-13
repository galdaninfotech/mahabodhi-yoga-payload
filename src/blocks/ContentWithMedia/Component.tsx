import { RichText } from '@/components/RichText'
import type { ContentWithMediaBlock as ContentWithMediaBlockProps } from '@/payload-types'
import React from 'react'
import { Media } from '../../components/Media'

type Props = ContentWithMediaBlockProps

export const ContentWithMedia: React.FC<Props> = (props) => {
  const { content, media, title, subtitle } = props

  return (
    <section className="section ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
      <div className="d-flex align-items-start mb-4">
        <div className="img w-100 pt-lg-5">
          {/* <img src="/images/about.jpg" className="img-fluid aos-init aos-animate" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" /> */}
          {typeof media === 'object' && media !== null && (
            <div className="content-media">
              <Media resource={media} />
            </div>
          )}
        </div>
      </div>

      <span className="subheading">{subtitle}</span>
      <h2 className="mb-4" style={{color: '#d19a4a'}}>{title}</h2>
      <div className="">
        <div className="row">
          <div
            className="order-lg-first heading-section aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="py-md-2 px-lg-2">
              {content && (
                <div className="text-gray-700 my-6 prose-h2:text-2xl prose-h2:mb-4">
                  <RichText data={content} enableGutter={false} />
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
