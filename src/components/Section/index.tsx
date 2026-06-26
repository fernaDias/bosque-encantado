'use client'

import { Box, Container } from '@chakra-ui/react'
import { SectionProps } from '../../types'

const Section = ({
  children,
  id,
  bg = 'transparent',
  pt = { base: 16, md: 24 },
  pb = { base: 16, md: 24 },
}: SectionProps) => {
  return (
    <Box as="section" id={id} bg={bg} pt={pt} pb={pb} position="relative" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 5, md: 8 }}>
        {children}
      </Container>
    </Box>
  )
}

export default Section
