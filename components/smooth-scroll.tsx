'use client'

import { useEffect } from 'react'
import { startLenis, stopLenis } from '@/lib/smooth-scroll'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    startLenis()

    return () => {
      stopLenis()
    }
  }, [])

  return <>{children}</>
}
