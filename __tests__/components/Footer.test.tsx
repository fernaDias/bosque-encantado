import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../../src/components/Footer'
import theme from '../../src/theme'
import { PHONE } from '../../src/constants'

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('Footer', () => {
  it('renders the footer', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('displays brand name', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText('Bosque Encantado')).toBeInTheDocument()
  })

  it('displays phone number', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText(PHONE)).toBeInTheDocument()
  })

  it('displays WhatsApp link', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText('WhatsApp')).toBeInTheDocument()
  })

  it('displays Instagram link', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText('@bosqueencantado.pr')).toBeInTheDocument()
  })

  it('displays copyright', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText(/direitos reservados/i)).toBeInTheDocument()
  })

  it('displays event info', () => {
    renderWithChakra(<Footer />)
    expect(screen.getByText(/Julho de 2026/)).toBeInTheDocument()
    expect(screen.getByText(/13h às 18h/)).toBeInTheDocument()
    expect(screen.getByText(/Loja Ciranda/)).toBeInTheDocument()
  })
})
