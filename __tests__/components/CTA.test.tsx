import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import CTA from '../../src/components/CTA'
import theme from '../../src/theme'

jest.mock('../../src/hooks/useWhatsApp', () => ({
  useWhatsApp: () => ({ openWhatsApp: jest.fn() }),
}))

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('CTA', () => {
  it('renders the CTA section', () => {
    renderWithChakra(<CTA />)
    expect(screen.getByTestId('cta-section')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    renderWithChakra(<CTA />)
    expect(screen.getByText(/férias mais divertidas/i)).toBeInTheDocument()
  })

  it('displays event info', () => {
    renderWithChakra(<CTA />)
    expect(screen.getByText(/Julho de 2026/)).toBeInTheDocument()
    expect(screen.getByText(/13h às 18h/)).toBeInTheDocument()
    expect(screen.getByText(/Loja Ciranda/)).toBeInTheDocument()
  })

  it('renders WhatsApp button', () => {
    renderWithChakra(<CTA />)
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()
  })

  it('shows social proof', () => {
    renderWithChakra(<CTA />)
    expect(screen.getByText(/50 famílias/)).toBeInTheDocument()
  })
})
