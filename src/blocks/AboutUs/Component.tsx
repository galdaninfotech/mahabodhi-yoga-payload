import type { AboutUs as AboutUsProps } from 'src/payload-types'
import React from 'react'
import Image from 'next/image'

type Props = {
  className?: string
} & AboutUsProps

export const AboutUsBlock: React.FC<Props> = ({
  title,
  subtitle,
  description,
  list,
  yearsOfExperience,
  meditationInstructors,
  coursesAvailable,
  satisfiedClients,
  // image1,
}) => {
  return (
    <>
      <section className="ftco-section ftco-about-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row">
            <div
              className="col-lg-6 col-xl-7 order-lg-last py-5 heading-section"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="section">
                <div className="box-border border-0 border-solid border-[hsla(240_6%_80%)]">
                  <span className="subheading">{subtitle}</span>
                  <h2 className="mb-4" style={{fontSize: '16px', lineHeight: '20px'}}>{title}</h2>
                  <p>{description}</p>
                  <p>We offer :</p>
                  <ul>
                    {list &&
                      list.map((item) => {
                        return (
                          <li key={item.id}>
                             <span className="ion-ios-arrow-round-forward"></span> {item.item}
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 d-flex align-items-end">
              <div className="img w-100 pt-lg-5">
                <Image
                  src="/images/about.jpg"
                  className="img-fluid"
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-counter-section ftco-no-pb ftco-no-pt">
        <div className="container-xl px-0">
          <div className="row">
            <div className="col-md-12">
              <div className="counter-section">
                <div className="row g-0">
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap aos-init aos-animate">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count1" className="counter">
                            {yearsOfExperience}
                          </span>
                          +
                        </span>
                        <p>Years of experienced</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap even aos-init aos-animate">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter">
                            {meditationInstructors}
                          </span>
                          +
                        </span>
                        <p>Meditation Instructors</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap aos-init aos-animate">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter">
                            {coursesAvailable}
                          </span>
                          +
                        </span>
                        <p>Courses Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap even aos-init aos-animate">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter">
                            {satisfiedClients}
                          </span>
                          k+
                        </span>
                        <p>Satisfied Meditators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
