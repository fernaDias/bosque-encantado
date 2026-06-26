import { renderHook } from '@testing-library/react'
import { useWhatsApp } from '../../src/hooks/useWhatsApp'
import { WHATSAPP_URL } from '../../src/constants'

const mockOpen = jest.fn()
Object.defineProperty(window, 'open', { value: mockOpen, writable: true })

describe('useWhatsApp', () => {
  beforeEach(() => {
    mockOpen.mockClear()
  })

  it('opens the default WhatsApp URL', () => {
    const { result } = renderHook(() => useWhatsApp())
    result.current.openWhatsApp()
    expect(mockOpen).toHaveBeenCalledWith(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
  })

  it('opens WhatsApp with a custom message', () => {
    const custom = 'Hello custom'
    const { result } = renderHook(() => useWhatsApp(custom))
    result.current.openWhatsApp()
    const calledUrl = mockOpen.mock.calls[0][0] as string
    expect(calledUrl).toContain(encodeURIComponent(custom))
    expect(calledUrl).toContain('wa.me')
  })
})
