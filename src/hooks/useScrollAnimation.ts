import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return ref
}

export const useStaggerAnimation = (stagger = 0.12) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const children = Array.from(containerRef.current.children)
    if (!children.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [stagger])

  return containerRef
}

export const useFloating = (amplitude = 12, duration = 2.5) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: `-=${amplitude}`,
        duration,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [amplitude, duration])

  return ref
}

export const useMouseParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const layers = containerRef.current.querySelectorAll('[data-depth]')

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const xPercent = (e.clientX / innerWidth - 0.5) * 2
      const yPercent = (e.clientY / innerHeight - 0.5) * 2

      layers.forEach((layer) => {
        const depth = parseFloat((layer as HTMLElement).dataset.depth || '0')
        const x = xPercent * depth * 30
        const y = yPercent * depth * 20

        gsap.to(layer, {
          x,
          y,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return containerRef
}

export const useParallax = (speed = 0.3) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return ref
}

export { ScrollTrigger }
