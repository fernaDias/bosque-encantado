'use client'

import { useEffect, useRef } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { applyButtonHover } from '../../animations/gsap'
import { useWhatsApp } from '../../hooks/useWhatsApp'

interface WhatsAppButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  message?: string
}

export const WhatsAppButton = ({
  label = 'Quero reservar uma vaga',
  size = 'lg',
  fullWidth = false,
  message,
}: WhatsAppButtonProps) => {
  const { openWhatsApp } = useWhatsApp(message)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return
    return applyButtonHover(buttonRef.current)
  }, [])

  const sizeMap = {
    sm: { px: 6, py: 5, fontSize: 'md' },
    md: { px: 8, py: 6, fontSize: 'lg' },
    lg: { px: 10, py: 7, fontSize: 'xl' },
  }

  return (
    <Button
      ref={buttonRef}
      onClick={openWhatsApp}
      variant="whatsapp"
      w={fullWidth ? 'full' : 'auto'}
      leftIcon={<Icon as={FaWhatsapp} boxSize={size === 'lg' ? 6 : 5} />}
      data-testid="whatsapp-button"
      aria-label={`Abrir WhatsApp: ${label}`}
      {...sizeMap[size]}
    >
      {label}
    </Button>
  )
}

export default WhatsAppButton
