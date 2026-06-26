import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (
  element: Element | string,
  delay = 0,
  duration = 0.8
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
    }
  )
}

export const fadeInScale = (
  element: Element | string,
  delay = 0,
  duration = 0.7
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: 'back.out(1.7)',
    }
  )
}

export const staggerFadeInUp = (
  elements: Element[] | string,
  stagger = 0.1,
  delay = 0
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      stagger,
      ease: 'power3.out',
    }
  )
}

export const createScrollTriggerFadeUp = (
  element: Element | string,
  trigger?: Element | string
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export const createScrollTriggerStagger = (
  elements: Element[] | string,
  trigger: Element | string,
  stagger = 0.12
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 50, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export const floatingAnimation = (element: Element | string, amplitude = 15) => {
  return gsap.to(element, {
    y: `-=${amplitude}`,
    duration: 2.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })
}

export const rotateAnimation = (element: Element | string) => {
  return gsap.to(element, {
    rotation: 360,
    duration: 20,
    ease: 'none',
    repeat: -1,
  })
}

export const parallaxElement = (
  element: Element | string,
  speed = 0.5,
  trigger?: Element | string
) => {
  return gsap.to(element, {
    y: () => -(window.innerHeight * speed),
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || 'body',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export const textReveal = (element: Element | string, trigger?: Element | string) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 80, skewY: 3 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  )
}

/**
 * Animates word spans inside a heading element with a staggered bounce reveal.
 * Each word must be wrapped in a span with data-word attribute before calling.
 * Ease and bounce match the "lúdico" Fredoka personality.
 */
export const animateHeroWords = (container: Element) => {
  const words = container.querySelectorAll('[data-word]')
  if (!words.length) return

  return gsap.fromTo(
    words,
    { opacity: 0, y: 40, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      stagger: 0.08,
      ease: 'back.out(1.4)',
    }
  )
}

/**
 * Scroll-triggered section title reveal: fade in + translateY + scale.
 * Used by all section headings to ensure consistent animation across the page.
 */
export const animateSectionTitle = (
  titleEl: Element | null,
  trigger?: Element | null
) => {
  if (!titleEl) return

  const words = titleEl.querySelectorAll('[data-word]')
  const target = words.length ? words : titleEl

  return gsap.fromTo(
    target,
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: words.length ? 0.07 : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || titleEl,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

/**
 * Applies GSAP-driven 3D mouse-parallax to an element (used for Hero title depth).
 * Returns a cleanup function to remove the event listener.
 */
export const applyHeroTitleParallax = (el: HTMLElement): (() => void) => {
  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window
    const xPct = (e.clientX / innerWidth - 0.5) * 2
    const yPct = (e.clientY / innerHeight - 0.5) * 2

    gsap.to(el, {
      rotateX: yPct * -6,
      rotateY: xPct * 8,
      translateZ: 20,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 1000,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Adds GSAP hover interactions to a button element.
 * Returns a cleanup function to remove event listeners.
 */
export const applyButtonHover = (el: HTMLElement): (() => void) => {
  const onEnter = () => {
    gsap.to(el, {
      scale: 1.05,
      rotateZ: 1,
      boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const onLeave = () => {
    gsap.to(el, {
      scale: 1,
      rotateZ: 0,
      boxShadow: '',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const onDown = () => {
    gsap.to(el, { scale: 0.97, duration: 0.1, ease: 'power2.in' })
  }

  const onUp = () => {
    gsap.to(el, { scale: 1.05, duration: 0.2, ease: 'back.out(1.4)' })
  }

  el.addEventListener('mouseenter', onEnter)
  el.addEventListener('mouseleave', onLeave)
  el.addEventListener('mousedown', onDown)
  el.addEventListener('mouseup', onUp)

  return () => {
    el.removeEventListener('mouseenter', onEnter)
    el.removeEventListener('mouseleave', onLeave)
    el.removeEventListener('mousedown', onDown)
    el.removeEventListener('mouseup', onUp)
  }
}

export { gsap, ScrollTrigger }
