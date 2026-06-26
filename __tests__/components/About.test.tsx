import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import About from '../../src/components/About'
import theme from '../../src/theme'

jest.mock('../../src/hooks/useWhatsApp', () => ({
  useWhatsApp: () => ({ openWhatsApp: jest.fn() }),
}))

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('About', () => {
  it('renders the about section', () => {
    renderWithChakra(<About />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    renderWithChakra(<About />)
    expect(screen.getByTestId('about-card-0')).toBeInTheDocument()
    expect(screen.getByTestId('about-card-1')).toBeInTheDocument()
  })

  it('displays transport info', () => {
    renderWithChakra(<About />)
    expect(screen.getByText(/Transporte Incluso/)).toBeInTheDocument()
  })

  it('displays Patricia Cavalli info', () => {
    renderWithChakra(<About />)
    expect(screen.getAllByText(/Patricia Cavalli/)[0]).toBeInTheDocument()
  })

  it('renders WhatsApp CTA', () => {
    renderWithChakra(<About />)
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()
  })
})
