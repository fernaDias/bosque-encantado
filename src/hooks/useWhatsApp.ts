import { useCallback } from 'react'
import { WHATSAPP_URL } from '../constants'

export const useWhatsApp = (customMessage?: string) => {
  const openWhatsApp = useCallback(() => {
    const url = customMessage
      ? `https://wa.me/5543991147316?text=${encodeURIComponent(customMessage)}`
      : WHATSAPP_URL

    window.open(url, '_blank', 'noopener,noreferrer')
  }, [customMessage])

  return { openWhatsApp }
}
