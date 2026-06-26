import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import WhatsAppButton from '../../src/components/Button/WhatsAppButton'
import theme from '../../src/theme'

const mockOpenWhatsApp = jest.fn()
jest.mock('../../src/hooks/useWhatsApp', () => ({
  useWhatsApp: () => ({ openWhatsApp: mockOpenWhatsApp }),
}))

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('WhatsAppButton', () => {
  beforeEach(() => {
    mockOpenWhatsApp.mockClear()
  })

  it('renders with default label', () => {
    renderWithChakra(<WhatsAppButton />)
    expect(screen.getByText(/Quero reservar/i)).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    renderWithChakra(<WhatsAppButton label="Reservar agora" />)
    expect(screen.getByText('Reservar agora')).toBeInTheDocument()
  })

  it('calls openWhatsApp when clicked', () => {
    renderWithChakra(<WhatsAppButton />)
    fireEvent.click(screen.getByTestId('whatsapp-button'))
    expect(mockOpenWhatsApp).toHaveBeenCalledTimes(1)
  })

  it('has accessible aria-label', () => {
    renderWithChakra(<WhatsAppButton label="Fale conosco" />)
    expect(screen.getByRole('button', { name: /Abrir WhatsApp/i })).toBeInTheDocument()
  })

  it('renders in different sizes', () => {
    const { rerender } = renderWithChakra(<WhatsAppButton size="sm" />)
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()

    rerender(
      <ChakraProvider theme={theme}>
        <WhatsAppButton size="lg" />
      </ChakraProvider>
    )
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()
  })

  it('renders full width when specified', () => {
    renderWithChakra(<WhatsAppButton fullWidth />)
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument()
  })
})
