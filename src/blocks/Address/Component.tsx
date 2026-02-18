import React from 'react'
import type { AddressBlock as AddressBlock } from '@/payload-types'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export const Address: React.FC<AddressBlock> = (props) => {

  return (
    <>
      <div className="address-block bg-white p-4 rounded-lg shadow-md">
        {props.enabled && (
          <>
            <div className="bg-white flex flex-col p-8 text-xs">
              <h2 className="text-xl text-gray-800 mb-4" style={{ fontFamily: 'Oswald, serif' }}>{props.title}</h2>
              <p className="text-xs text-gray-600 mb-8">{props.description}</p>

              <h5 className="text-sm text-gray-800" style={{ fontFamily: 'Oswald, serif' }}>{props.name}</h5>
              {props.slogan && <p className="text-[10px] text-gray-600 mb-4">{props.slogan}</p>}
              
              <p className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-[#ff5300]" /> {props.addressline1}, {props.addressline2}
              </p>
              <p className="flex items-center mb-2">
                <FaPhone className="mr-2 text-[#ff5300]" /> {props.phone1} {props.phone2 && `, ${props.phone2}`}
              </p>
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-[#ff5300]" /> {props.email1} {props.email2 && `, ${props.email2}`}
              </p>
              <div className="flex space-x-4 mt-4">
                  <Link href={props.facebook? props.facebook : '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ff5300]"><FaFacebookF /></Link>
                  <Link href={props.twitter? props.twitter : '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ff5300]"><FaXTwitter /></Link>
                  <Link href={props.instagram? props.instagram : '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ff5300]"><FaInstagram /></Link>
                  <Link href={props.youtube? props.youtube : '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ff5300]"><FaYoutube /></Link>
                  <Link href={props.whatsapp? props.whatsapp : '#'} target="_new" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ff5300]"><FaWhatsapp /></Link>
              </div>
            </div>    
          </>
        )}
      </div>
    </>
  )
}