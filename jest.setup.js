require('@testing-library/jest-dom')

// Mock GSAP
jest.mock('gsap', () => {
  const mockTimeline = {
    fromTo: jest.fn().mockReturnThis(),
    to: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    kill: jest.fn(),
  }
  return {
    gsap: {
      registerPlugin: jest.fn(),
      fromTo: jest.fn(() => ({ kill: jest.fn() })),
      to: jest.fn(() => ({ kill: jest.fn() })),
      from: jest.fn(() => ({ kill: jest.fn() })),
      set: jest.fn(),
      context: jest.fn((fn) => {
        try { fn() } catch (_) {}
        return { revert: jest.fn() }
      }),
      utils: { toArray: jest.fn(() => []) },
      timeline: jest.fn(() => mockTimeline),
    },
    ScrollTrigger: { create: jest.fn(), getAll: jest.fn(() => []), kill: jest.fn() },
  }
})

jest.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: { create: jest.fn(), getAll: jest.fn(() => []), kill: jest.fn() },
}))

// Mock animations module
jest.mock('./src/animations/gsap', () => ({
  gsap: {
    registerPlugin: jest.fn(),
    fromTo: jest.fn(() => ({ kill: jest.fn() })),
    to: jest.fn(() => ({ kill: jest.fn() })),
    from: jest.fn(() => ({ kill: jest.fn() })),
    set: jest.fn(),
    context: jest.fn((fn) => {
      try { fn() } catch (_) {}
      return { revert: jest.fn() }
    }),
    utils: { toArray: jest.fn(() => []) },
    timeline: jest.fn(() => ({
      fromTo: jest.fn().mockReturnThis(),
      to: jest.fn().mockReturnThis(),
    })),
  },
  ScrollTrigger: { create: jest.fn(), getAll: jest.fn(() => []) },
  fadeInUp: jest.fn(),
  staggerFadeInUp: jest.fn(),
  floatingAnimation: jest.fn(),
  parallaxElement: jest.fn(),
  textReveal: jest.fn(),
}))

// Mock useScrollAnimation hooks
jest.mock('./src/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({ current: null }),
  useStaggerAnimation: () => ({ current: null }),
  useFloating: () => ({ current: null }),
  useMouseParallax: () => ({ current: null }),
  useParallax: () => ({ current: null }),
  ScrollTrigger: { create: jest.fn() },
}))

// Suppress console noise in tests
const originalError = console.error.bind(console)
beforeAll(() => {
  console.error = (...args) => {
    const msg = args[0]
    if (typeof msg === 'string' && (msg.includes('Warning:') || msg.includes('act('))) return
    originalError(...args)
  }
})
afterAll(() => {
  console.error = originalError
})
