'use client'

import { useEffect } from 'react'
import { startLenis, stopLenis } from '@/lib/smooth-scroll'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      startLenis()

      return () => {
        stopLenis()
      }
    }
  }, [])

  return <>{children}</>
}
