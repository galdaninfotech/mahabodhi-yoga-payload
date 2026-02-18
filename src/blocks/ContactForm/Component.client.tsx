'use client'
import React from 'react'
import type { ContactFormBlock as ContactFormBlockProps, SambodhiRetreatCentre, } from '@/payload-types'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

interface CustomContactFormBlockProps extends ContactFormBlockProps {
  sambodhiRetreatCentreData: SambodhiRetreatCentre
}

export const ContactFormClient: React.FC<CustomContactFormBlockProps> = (props) => {
  const { enabled, title, subtitle, description, sambodhiRetreatCentreData } = props

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="contact-wrap w-1/2 p-md-5 p-4">
          <h3>{title}</h3>
          <p className="mb-4">{subtitle}</p>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="dbox w-100 d-flex align-items-start">
                <div className="text">
                  {sambodhiRetreatCentreData?.addressline1 && <p><span>Address :</span> {sambodhiRetreatCentreData?.addressline1}</p> }
                  {sambodhiRetreatCentreData?.addressline2 && <p>{sambodhiRetreatCentreData?.addressline2}</p> }
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dbox w-100 d-flex align-items-start">
                <div className="text">
                  {sambodhiRetreatCentreData?.email1 && <p><span>Address :</span> {sambodhiRetreatCentreData?.email1}</p> }
                  {sambodhiRetreatCentreData?.email2 && <p>{sambodhiRetreatCentreData?.email2}</p> }
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dbox w-100 d-flex align-items-start">
                <div className="text">
                  {sambodhiRetreatCentreData?.phone1 && <p><span>Address :</span> {sambodhiRetreatCentreData?.phone1}</p> }
                  {sambodhiRetreatCentreData?.phone2 && <p>{sambodhiRetreatCentreData?.phone2}</p> }
                </div>
              </div>
            </div>
          </div>
          
          <form id="contactForm" name="contactForm" className="contactForm" style={{marginBottom: '50px'}}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group"><input type="text" name="name" id="name" placeholder="Name" className="form-control" /></div>
              </div>
              <div className="col-md-12">
                <div className="form-group"><input type="email" name="email" id="email" placeholder="Email" className="form-control" /></div>
              </div>
              <div className="col-md-12">
                <div className="form-group"><input type="text" name="subject" id="subject" placeholder="Subject" className="form-control" /></div>
              </div>
              <div className="col-md-12">
                <div className="form-group"><textarea name="message" id="message" cols={30} rows={4} placeholder="Write down your message here" className="form-control"></textarea></div>
              </div>
              <div className="col-md-12 mt-4" style={{marginTop: '30px'}}>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary" />
                  <div className="submitting"></div>
                </div>
              </div>
            </div>
          </form>
          <div className="w-100 social-media mt-2">
            <h3>Follow us here</h3>
            <div className="flex justify-start space-x-4">
              <Link href={sambodhiRetreatCentreData.facebook? sambodhiRetreatCentreData.facebook : '#'} target="_new" className="text-[#ff5300] hover:text-gray-300"><FaFacebookF /></Link>
              <Link href={sambodhiRetreatCentreData.twitter? sambodhiRetreatCentreData.twitter : '#'} target="_new" className="text-[#ff5300] hover:text-gray-300"><FaXTwitter /></Link>
              <Link href={sambodhiRetreatCentreData.instagram? sambodhiRetreatCentreData.instagram : '#'} target="_new" className="text-[#ff5300] hover:text-gray-300"><FaInstagram /></Link>
              <Link href={sambodhiRetreatCentreData.youtube? sambodhiRetreatCentreData.youtube : '#'} target="_new" className="text-[#ff5300] hover:text-gray-300"><FaYoutube /></Link>
              <Link href={sambodhiRetreatCentreData.whatsapp? sambodhiRetreatCentreData.whatsapp : '#'} target="_new" className="text-[#ff5300] hover:text-[#ff5300]"><FaWhatsapp /></Link>
            </div>
          </div>
        </div>

        <div className="mkdf-row-grid-section-wrapper w-1/2">
            <div className="mkdf-row-grid-section">
                <div className="vc_row wpb_row vc_row-fluid vc_custom_1575628141825">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                        <div className="mkdf-map-with-destinations-holder">
                            <div
                            className="mkdf-mwl-map"
                            style={{ height: '650px', marginTop: '60px' }}
                            >
                            <Image src="/images/about.jpg" alt="" width={500} height={450} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mkdf-row-grid-section-wrapper">
            <div className="mkdf-row-grid-section">
                <div className="vc_row wpb_row vc_row-fluid vc_custom_1575628141825">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                        <div className="mkdf-map-with-destinations-holder">
                            <div
                            className="mkdf-mwl-map"
                            style={{ height: '650px', marginTop: '60px' }}
                            >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11202.735543713867!2d77.60758365997896!3d34.09430523540439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb3c1e50f4b1%3A0x93ba775523cf3084!2sMahabodhi%20Sambodhi%20Retreat%20Centre!5e1!3m2!1sen!2sin!4v1732172673771!5m2!1sen!2sin"
                                width="1200"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
