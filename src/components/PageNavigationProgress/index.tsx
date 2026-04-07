'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const MIN_VISIBLE_MS = 700
const HIDE_DELAY_MS = 260
const PROGRESS_INTERVAL_MS = 140

export function PageNavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const isNavigatingRef = useRef(false)
  const hasMountedRef = useRef(false)
  const startedAtRef = useRef(0)
  const progressTimerRef = useRef<number | null>(null)
  const completeTimerRef = useRef<number | null>(null)
  const hideTimerRef = useRef<number | null>(null)

  const clearTimers = () => {
    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current)
      progressTimerRef.current = null
    }

    if (completeTimerRef.current) {
      window.clearTimeout(completeTimerRef.current)
      completeTimerRef.current = null
    }

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }

  const start = () => {
    if (isNavigatingRef.current) return

    clearTimers()
    isNavigatingRef.current = true
    startedAtRef.current = window.performance.now()

    setIsVisible(true)
    setProgress(16)

    progressTimerRef.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 94) return current

        const next = current + Math.max((96 - current) * 0.16, 1.8)
        return Math.min(next, 94)
      })
    }, PROGRESS_INTERVAL_MS)
  }

  const shouldTrackUrl = (href: string | URL | null | undefined) => {
    if (!href) return false

    const url = new URL(href.toString(), window.location.href)

    if (url.origin !== window.location.origin) return false

    return !(url.pathname === window.location.pathname && url.search === window.location.search)
  }

  const complete = () => {
    if (!isNavigatingRef.current) return

    isNavigatingRef.current = false

    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current)
      progressTimerRef.current = null
    }

    const elapsed = window.performance.now() - startedAtRef.current
    const delay = Math.max(0, MIN_VISIBLE_MS - elapsed)

    completeTimerRef.current = window.setTimeout(() => {
      setProgress(100)

      hideTimerRef.current = window.setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, HIDE_DELAY_MS)
    }, delay)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target

      if (!(target instanceof Element)) return

      const anchor = target.closest('a')

      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return
      if (!anchor.href) return

      if (!shouldTrackUrl(anchor.href)) return

      start()
    }

    const handlePopState = () => {
      start()
    }

    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function pushState(...args) {
      if (shouldTrackUrl(args[2])) {
        start()
      }

      return originalPushState.apply(this, args)
    }

    window.history.replaceState = function replaceState(...args) {
      if (shouldTrackUrl(args[2])) {
        start()
      }

      return originalReplaceState.apply(this, args)
    }

    document.addEventListener('click', handleClick, true)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('popstate', handlePopState)
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
      clearTimers()
    }
  }, [])

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    complete()
  }, [pathname, searchParams])

  return (
    <div
      aria-hidden="true"
      className={`page-navigation-progress${isVisible ? ' is-visible' : ''}`}
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  )
}
