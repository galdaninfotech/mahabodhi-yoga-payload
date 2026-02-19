import React from 'react'
import type { SambodhiRetreatCentre } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'

export async function HeaderTop() {
  const sambodhiRetreatCentreData: SambodhiRetreatCentre = await getCachedGlobal(
    'sambodhiRetreatCentre',
    1,
  )()

  return (
    <div className="top-wrap mt-4">
      <div className="container-xl">
        <div className="row justify-content-end">
          <div className="col-md topper d-flex align-items-xl-center">
            <div className="text">
              {sambodhiRetreatCentreData.phone1 && (
                <div className="con flex items-center">
                    {/* <LMMobile /> */}
                    <span className='mr-4'>Call Us Now:</span>
                    {sambodhiRetreatCentreData.phone1 && 
                        <Link
                            href={`tel:${sambodhiRetreatCentreData.phone1.replace(/-/g, '')}`}
                            target="_blank"
                            className="text-white cursor-pointer hover:text-orange-500"
                        > {sambodhiRetreatCentreData.phone1}
                        </Link>
                    }
                    {sambodhiRetreatCentreData.phone2 && 
                        <>
                            <span>&nbsp;/&nbsp;</span>
                            <Link
                                href={`tel:${sambodhiRetreatCentreData.phone2.replace(/-/g, '')}`}
                                target="_blank"
                                className="text-white cursor-pointer hover:text-orange-500"
                            > {sambodhiRetreatCentreData.phone2}
                            </Link>
                        </>
                    }
                </div>
              )}
            </div>
          </div>
          <div className="col-md topper d-flex align-items-xl-center justify-content-end">
            <ul className="ftco-social">
              <li>
                <Link
                  href={
                    sambodhiRetreatCentreData.facebook ? sambodhiRetreatCentreData.facebook : '#'
                  }
                  className="d-flex align-items-center justify-content-center"
                  tabIndex={3}
                  target='_blank'
                  rel="noopener"
                >
                  <span className="fa fa-facebook"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={sambodhiRetreatCentreData.twitter ? sambodhiRetreatCentreData.twitter : '#'}
                  className="d-flex align-items-center justify-content-center"
                  tabIndex={4}
                  target='_blank'
                  rel="noopener"
                >
                  <span className="fa fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    sambodhiRetreatCentreData.instagram ? sambodhiRetreatCentreData.instagram : '#'
                  }
                  className="d-flex align-items-center justify-content-center"
                  tabIndex={5}
                  target='_blank'
                  rel="noopener"
                >
                  <span className="fa fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={sambodhiRetreatCentreData.youtube ? sambodhiRetreatCentreData.youtube : '#'}
                  className="d-flex align-items-center justify-content-center"
                  tabIndex={6}
                  target='_blank'
                  rel="noopener"
                >
                  <span className="fa fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pointer-events-none relative top-1 bottom-0z left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-[#ffb84d] to-transparent" />
        </div>
      </div>
    </div>

    // <div className="relative bg-gradient-to-b from-[#0d1220] to-[#0b1020] text-[13px]">
      
    //   {/* Bottom gold line */}
    //   <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ffb84d] to-transparent" />

    //   <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2">
        
    //     {/* Left */}
    //     <div className="flex items-center gap-1 text-[#e5e9ff]">
    //       <span className="font-medium text-[#ffb84d]">Call Us Now:</span>

    //       <a
    //         href="tel:+919103188699"
    //         className="hover:underline"
    //       >
    //         +91 9103188699
    //       </a>

    //       <span className="opacity-60">/</span>

    //       <a
    //         href="tel:+916005652583"
    //         className="hover:underline"
    //       >
    //         +91 6005652583
    //       </a>
    //     </div>

    //     {/* Right */}
    //     <div className="flex gap-1">
    //       {['f', 't', 'i', '▶'].map((icon, i) => (
    //         <a
    //           key={i}
    //           href="#"
    //           className="flex h-[22px] w-[22px] items-center justify-center rounded-sm bg-[#c89b55] text-[12px] text-[#0b1020] hover:bg-[#ffb84d]"
    //         >
    //           {icon}
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default HeaderTop
