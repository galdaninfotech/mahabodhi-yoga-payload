"use client"
import React from 'react'
import type { RegistrationFormBlock as RegistrationFormBlockProps, SambodhiRetreatCentre } from '@/payload-types'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import Link from 'next/link';

interface CustomRegistrationFormBlockProps extends RegistrationFormBlockProps {
  sambodhiRetreatCentreData: SambodhiRetreatCentre;
}

export const RegistrationFormClient: React.FC<CustomRegistrationFormBlockProps> = (props) => {
  const { enabled, title, description, sambodhiRetreatCentreData } = props

  return (
    <>
      <div className="contact-form-mimc-block bg-white p-3 md:p-8 rounded-lg shadow-md">
        {enabled && (
          <>
            <h2 className="text-xl text-gray-800 mb-4" style={{ fontFamily: 'Oswald, serif' }}>{title}</h2>
            <p className="text-xs text-gray-600 mb-8">{description}</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fisrtname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fisrtname"
                    id="firstname"
                    autoComplete="firstname"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="lastname"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                    Checkin Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    autoComplete="checkIn"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Checkin Date"
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
                    Checkout Date
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    autoComplete="checkout"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Checkout Date"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Select Course/Retreat
                </label>
                <select
                  id="course"
                  name="course"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select a course/retreat</option>
                  <option value="hatha-yoga">Three Day Retreat</option>
                  <option value="meditation-retreat">10-Day Meditation Retreat</option>
                  <option value="ashtanga-yoga">Himalayan Yoga & Meditation Retreat</option>
                  <option value="vinyasa-flow">Daily Yoga and Meditation Classes</option>
                  <option value="yoga-teacher-training">Yoga Instructor Course (One Month)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Please write special requirements for your registration."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center py-3 px-8 rounded-xs border border-transparent rounded-xs shadow-sm text-xs font-medium text-white bg-[orange] hover:bg-[#ff5300] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 max-w-1/3"
                >
                  Register Now
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div className="bg-white flex flex-col mt-12 p-8 text-xs">
        <h2 className="text-xl text-gray-800 mb-4" style={{ fontFamily: 'Oswald, serif' }}>Our Office</h2>
        <p className="text-xs text-gray-600 mb-8">Need help or do you have any Wishes or Questions? Just drop us a line and get more information!</p>

        {/* Contact Person */}
        {sambodhiRetreatCentreData?.contactPerson && (
          <span className="text-xs text-gray-800 uppercase" style={{ fontFamily: 'Oswald, serif' }} > {sambodhiRetreatCentreData?.contactPerson} </span>
        )}
        {sambodhiRetreatCentreData?.designation && (
          <span className="text-[12px] text-gray-600 mb-2">({sambodhiRetreatCentreData?.designation})</span>
        )}

        {/* Name */}
        {sambodhiRetreatCentreData?.name && (
          <h5 className="text-sm text-gray-800" style={{ fontFamily: 'Oswald, serif' }} > {sambodhiRetreatCentreData?.name} </h5>
        )}
        {sambodhiRetreatCentreData?.slogan && (
          <p className="text-[10px] text-gray-600 mb-2">{sambodhiRetreatCentreData?.slogan}</p>
        )}


        {(sambodhiRetreatCentreData?.addressline1 || sambodhiRetreatCentreData?.addressline2) && (
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-[orange]" />
            {
              sambodhiRetreatCentreData?.addressline1 + (sambodhiRetreatCentreData.addressline2 ? `, ${sambodhiRetreatCentreData.addressline2}` : '')
            }
          </p>
        )}

        {(sambodhiRetreatCentreData?.phone1 || sambodhiRetreatCentreData?.phone2) && (
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2 text-[orange]" />
            {
              sambodhiRetreatCentreData?.phone1 + (sambodhiRetreatCentreData.phone2 ? `, ${sambodhiRetreatCentreData.phone2}` : '')
            }
          </p>
        )}

        {(sambodhiRetreatCentreData?.email1 || sambodhiRetreatCentreData?.email2) && (
          <p className="flex items-center mb-2">
            <TbMail className="mr-2 text-[orange]" />
            {
              sambodhiRetreatCentreData?.email1 + (sambodhiRetreatCentreData.email2 ? `, ${sambodhiRetreatCentreData.email2}` : '')
            }
          </p>
        )}

        {(sambodhiRetreatCentreData?.website) && (
          <p className="flex items-center mb-2">
            <FaGlobeAmericas className="mr-2 text-[orange]" />
            { sambodhiRetreatCentreData.website }
          </p>
        )}

        <div className="flex space-x-4 mt-4">
            <Link href={sambodhiRetreatCentreData.facebook ?? '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[orange]"><FaFacebookF /></Link>
            <Link href={sambodhiRetreatCentreData.twitter ?? '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[orange]"><FaXTwitter /></Link>
            <Link href={sambodhiRetreatCentreData.instagram ?? '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[orange]"><FaInstagram /></Link>
            <Link href={sambodhiRetreatCentreData.youtube ?? '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[orange]"><FaYoutube /></Link>
            <Link href={sambodhiRetreatCentreData.whatsapp ?? '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[orange]"><FaWhatsapp /></Link>
        </div>
      </div>
    </>
  )
}