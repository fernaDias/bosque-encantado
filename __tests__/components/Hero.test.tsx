import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Hero from '../../src/components/Hero'
import theme from '../../src/theme'

// Mock hooks
jest.mock('../../src/hooks/useScrollAnimation', () => ({
  useMouseParallax: () => ({ current: null }),
  useScrollAnimation: () => ({ current: null }),
  useFloating: () => ({ current: null }),
}))

jest.mock('../../src/hooks/useWhatsApp', () => ({
  useWhatsApp: () => ({ openWhatsApp: jest.fn() }),
}))

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('Hero', () => {
  it('renders the hero section', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('displays the event date and time', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText(/Julho de 2026/)).toBeInTheDocument()
    expect(screen.getByText(/13h às 18h/)).toBeInTheDocument()
  })

  it('displays the main title', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText(/Colônia de Férias/)).toBeInTheDocument()
    expect(screen.getByText(/Bosque Encantado/)).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText(/Experiências ao ar livre/)).toBeInTheDocument()
  })

  it('renders the WhatsApp CTA button', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()
  })

  it('shows urgency message', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText(/Vagas limitadas/)).toBeInTheDocument()
  })
})
