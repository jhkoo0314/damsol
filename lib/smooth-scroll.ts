import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function getLenis() {
  if (typeof window === 'undefined') return null

  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  }

  return lenisInstance
}

export function startLenis() {
  const lenis = getLenis()
  if (!lenis) return

  function raf(time: number) {
    if (lenis) {
      lenis.raf(time)
    }
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export function stopLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}
