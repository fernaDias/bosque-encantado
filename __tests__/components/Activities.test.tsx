import { render, screen, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Activities from '../../src/components/Activities'
import theme from '../../src/theme'
import { ACTIVITIES } from '../../src/constants'

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)

describe('Activities', () => {
  it('renders the activities section', () => {
    renderWithChakra(<Activities />)
    expect(screen.getByTestId('activities-section')).toBeInTheDocument()
  })

  it('renders all 12 activity cards', () => {
    renderWithChakra(<Activities />)
    ACTIVITIES.forEach((_, i) => {
      expect(screen.getByTestId(`activity-card-${i}`)).toBeInTheDocument()
    })
  })

  it('displays all activity names', () => {
    renderWithChakra(<Activities />)
    ACTIVITIES.forEach((activity) => {
      expect(screen.getByText(activity.name)).toBeInTheDocument()
    })
  })

  it('displays activity descriptions', () => {
    renderWithChakra(<Activities />)
    ACTIVITIES.forEach((activity) => {
      expect(screen.getByText(activity.description)).toBeInTheDocument()
    })
  })

  it('displays section heading', () => {
    renderWithChakra(<Activities />)
    expect(screen.getByText(/vão amar/i)).toBeInTheDocument()
  })

  it('displays the count text', () => {
    renderWithChakra(<Activities />)
    expect(screen.getByText(/12 atividades/)).toBeInTheDocument()
  })

  it('handles mouse enter on cards without errors', () => {
    renderWithChakra(<Activities />)
    const card = screen.getByTestId('activity-card-0')
    expect(() => {
      fireEvent.mouseEnter(card)
      fireEvent.mouseLeave(card)
    }).not.toThrow()
  })
})
