import React from 'react'
import type { ClientTestimonialsBlock as ClientTestimonialsBlockProps } from '@/payload-types'

export const ClientTestimonials: React.FC<ClientTestimonialsBlockProps> = (props) => {
  const { testimonials } = props

  return (
    <div className="my-8">
      <section className="section ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div className="col-md-7 text-center section-heading-section aos-init aos-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Meditators</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 aos-init aos-animate">
              <div id="tns1-ow" className="tns-outer">
                <div id="tns1-mw" className="tns-ovh">
                  <div id="tns1-iw" className="tns-inner">
                    <div id="tns1" className="carousel-testimony tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" >
                      {testimonials &&
                        testimonials.map((item, index) => (
                          <div className="item max-w-full" key={index}>
                              <div className="testimony-wrap">
                                <div className="icon d-flex align-items-center justify-content-center">
                                  <span className="fa fa-quote-left"></span>
                                </div>
                                <div className="text max-w-full mx-auto">
                                  <p className="mb-4 msg">{item.content}</p>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="user-img d-none" style={{ backgroundImage: `url(${item.image || '/images/person_1.jpg'})` }}></div> */}
                                    <div className="ps-3 tx">
                                      <p className="name">{item.author}</p>
                                      {/* <span className="position d-none">{item.position}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
