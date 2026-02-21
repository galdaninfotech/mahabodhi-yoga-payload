'use client'
import { CMSLink } from '@/components/Link'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { MobileMenu } from './MobileMenu'
import type { Header } from 'src/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import Image from 'next/image'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <div className="relative z-20">
      <nav className="flex items-center md:items-end justify-between container pt-2">
        
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        <div className="flex w-full items-end justify-between">
          <div className="flex w-full items-end gap-6 md:w-1/3">
            {/* <Link className="flex w-full items-center justify-center pt-4 pb-4 md:w-auto" href="/">
              <LogoIcon className="w-6 h-auto" />
            </Link> */}
            <Link className="navbar-brand d-flex align-items-center" href="/">
          <div className="icon d-flex align-items-center justify-content-center">
            <Image
              width="20"
              height="32"
              style={{ width: '20px' }}
              src="/images/logo2.png"
              alt=""
            />
          </div>
          <span className="">
            Mahabodhi <small>Meditation &amp; & Yoga</small>
          </span>
        </Link>
            {menu.length ? (
              <ul className="hidden gap-4 text-sm md:flex md:items-center">
                {menu.map((item) => {
                  const hasSubMenu = item.subMenuItems && item.subMenuItems.length > 0
                  
                  return (
                    <li key={item.id} className={cn('relative h-full py-4', hasSubMenu && 'group')}>
                      <CMSLink
                        {...item.link}
                        size={'clear'}
                        className={cn('relative navLink font-oswald', {
                          active:
                            item.link.url && item.link.url !== '/'
                              ? pathname.includes(item.link.url)
                              : false,
                        })}
                        appearance="nav"
                      />
                      
                      {hasSubMenu && (
                        <ul className="absolute -left-4 top-full hidden min-w-75 flex-col bg-white border border-neutral-200 shadow-lg dark:bg-black dark:border-neutral-700 group-hover:flex z-50">
                          {item.subMenuItems?.map((subItem) => (
                            <li key={subItem.id} className="border-b last:border-0 border-neutral-100 dark:border-neutral-800">
                              <CMSLink
                                {...subItem.link}
                                className="block w-full px-4z py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900 whitespace-nowrap"
                                size="clear"
                                appearance="link"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>

          <div className="flex justify-end md:w-1/3 gap-4 pb-4">
            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </div>
  )
}
