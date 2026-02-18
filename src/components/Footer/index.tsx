import type { Footer, SambodhiRetreatCentre } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { FooterAbout } from '@/components/Footer/about'
// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { Suspense } from 'react'
// import { LogoIcon } from '@/components/icons/logo'
import Image from 'next/image'
// import { CMSLink } from '@/components/Link'

// const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const about = (Array.isArray(footer.about) && footer.about.length === 0) ? undefined : footer.about
  const menu = footer.moreLinks || []

  const sambodhiRetreatCentreData: SambodhiRetreatCentre = await getCachedGlobal(
    'sambodhiRetreatCentre',
    1,
  )()
  
  // const currentYear = new Date().getFullYear()
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  // const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    // <footer className="text-sm text-neutral-500 dark:text-neutral-400">
    //   <div className="container">
    //     <div className="flex w-full flex-col gap-6 border-t border-neutral-200 py-12 text-sm md:flex-row md:gap-12 dark:border-neutral-700">
    //       <div>
    //         <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
    //           <LogoIcon className="w-6" />
    //           <span className="sr-only">{SITE_NAME}</span>
    //         </Link>
    //       </div>
    //       <Suspense
    //         fallback={
    //           <div className="flex h-[188px] w-[200px] flex-col gap-2">
    //             <div className={skeleton} />
    //             <div className={skeleton} />
    //             <div className={skeleton} />
    //             <div className={skeleton} />
    //             <div className={skeleton} />
    //             <div className={skeleton} />
    //           </div>
    //         }
    //       >
    //         <FooterAbout about={about} />
    //         <FooterMenu menu={menu} />
    //       </Suspense>
    //       <div className="md:ml-auto flex flex-col gap-4 items-end">
    //         <ThemeSelector />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
    //     <div className="container mx-auto flex w-full flex-col items-center gap-1 md:flex-row md:gap-0">
    //       <p>
    //         &copy; {copyrightDate} {copyrightName}
    //         {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
    //       </p>
    //       <hr className="mx-4 hidden h-4 w-px border-l border-neutral-400 md:inline-block" />
    //       <p>Designed in Michigan</p>
    //       <p className="md:ml-auto">
    //         <a className="text-black dark:text-white" href="https://payloadcms.com">
    //           Crafted by Payload
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </footer>

     <footer className="ftco-footer bg-amber-800">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <Link className="navbar-brand d-flex align-items-center" href="index.html">
                  <div className="icon d-flex align-items-center justify-content-center"> 
                    <Image width="20" height="32" style={{ width: '20px' }} src="/images/logo1.png" alt="" />
                  </div>
                  <span className=""> Mahabodhi <small>Meditation &amp; & Yoga</small> </span>
                </Link>
              </h2>

              <FooterAbout about={about} />

              <ul className="ftco-footer-social list-unstyled mt-2">
                <li> <Link href={ sambodhiRetreatCentreData.facebook ? sambodhiRetreatCentreData.facebook : '#' } > <span className="fa fa-facebook"></span> </Link> </li>
                <li> <Link href={ sambodhiRetreatCentreData.twitter ? sambodhiRetreatCentreData.twitter : '#' } > <span className="fa fa-twitter"></span> </Link> </li>
                <li> <Link href={ sambodhiRetreatCentreData.instagram ? sambodhiRetreatCentreData.instagram : '#' } > <span className="fa fa-instagram"></span> </Link> </li>
                <li> <Link href={ sambodhiRetreatCentreData.youtube ? sambodhiRetreatCentreData.youtube : '#' } > <span className="fa fa-youtube"></span> </Link> </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Explore More</h2>
              <Suspense
                  fallback={
                  <div className="flex h-47 w-50 flex-col gap-2">
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                      <div className={skeleton} />
                  </div>
                  }
              >
                  <FooterMenu menu={menu} />
              </Suspense>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contacts Us</h2>
              <div className="block-23 mb-3">
                <ul>
                  {sambodhiRetreatCentreData.name && (
                    <li>
                      <span className="icon fa fa-map marker"></span>
                      <span className="text">{sambodhiRetreatCentreData.name}</span>
                    </li>
                  )}
                  {sambodhiRetreatCentreData.phone1 && (
                    <li> <Link href={`tel:${sambodhiRetreatCentreData.phone1.replace(/-/g, '')}`} >
                        <span className="icon fa fa-phone"></span>
                        <span className="text">{sambodhiRetreatCentreData.phone1}</span>
                      </Link>
                    </li>
                  )}
                  {sambodhiRetreatCentreData.phone2 && (
                    <li> 
                      <Link href={`tel:${sambodhiRetreatCentreData.phone2.replace(/-/g, '')}`} >
                        <span className="icon fa fa-phone"></span>
                        <span className="text">{sambodhiRetreatCentreData.phone2}</span>
                      </Link>
                    </li>
                  )}
                  {(sambodhiRetreatCentreData.email1 || sambodhiRetreatCentreData.email2) && (
                      <li>
                        {sambodhiRetreatCentreData.email1 && (
                          <Link href="mailto:yogainfocentre@gmail.com">
                            <span className="icon fa fa-paper-plane"></span>
                            <span className="text">
                              <span className="__cf_email__"></span>
                              {sambodhiRetreatCentreData.email1}
                            </span>
                          </Link>
                        )}
                        {sambodhiRetreatCentreData.email2 && (
                          <Link href="mailto:mimc.sambodhi@gmail.com">
                            <span className="icon fa fa-paper-plane"></span>
                            <span className="text">
                              <span className="__cf_email__"></span>
                              {sambodhiRetreatCentreData.email2}
                            </span>
                          </Link>
                        )}
                      </li>
                    )}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-4">
              <div className="flex flex-wrap gap-y-4 row g-sm-2">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-1.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-2.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-3.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-4.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-5.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-6.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-7.jpg)' }} ></Link>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Link href="#" className="img gallery" style={{ backgroundImage: 'url(/images/footer/gallery-8.jpg)' }} ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-2 bg-amber-900">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 flex flex-wrap items-center justify-center gap-y-4 md:justify-between">
              <p className="mb-0 mr-8" style={{ color: 'rgba(255,255,255,.5)', fontSize: '13px' }}>
                Copyright ©<script>document.write(new Date().getFullYear());</script>&nbsp; All rights
                reserved | <Link href="{sambodhiRetreatCentreData.website}" target="_blank" rel="nofollow noopener" >
                  {/* {sambodhiRetreatCentreData.name} */}
                </Link>
              </p>
              <p className='text-xs'>Developed By: <Link target="_blank" rel="nofollow noopener" className='text-xs' href='https://share.google/iGHxSBb1px3VPKD3f'>Galdan Infotech</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
