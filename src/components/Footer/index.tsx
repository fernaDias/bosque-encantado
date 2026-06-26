'use client'

import { Box, Flex, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM_URL, PHONE, WHATSAPP_URL } from '../../constants'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#1A1A1A"
      color="white"
      py={12}
      px={{ base: 5, md: 8 }}
      data-testid="footer"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'center', md: 'flex-start' }}
        gap={8}
        maxW="container.xl"
        mx="auto"
        textAlign={{ base: 'center', md: 'left' }}
      >
        {/* Logo / Brand */}
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
          <HStack spacing={2}>
            <Text fontSize="3xl">🍄</Text>
            <Text textStyle="cardTitle" color="white">
              Bosque Encantado
            </Text>
          </HStack>
          <Text color="gray.400" fontSize="sm" maxW="280px">
            Experiências ao ar livre para crianças — natureza, diversão e memórias inesquecíveis.
          </Text>
        </VStack>

        {/* Contact */}
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
          <Text textStyle="subtitle" color="white">
            Contato
          </Text>
         
          <HStack
            as={Link}
            href={WHATSAPP_URL}
            isExternal
            color="gray.400"
            _hover={{ color: '#42B649' }}
            spacing={2}
          >
            <Icon as={FaWhatsapp} />
            <Text fontSize="sm">
              {PHONE}
            </Text>
          </HStack>
          <HStack
            as={Link}
            href={INSTAGRAM_URL}
            isExternal
            color="gray.400"
            _hover={{ color: '#E1306C' }}
            spacing={2}
          >
            <Icon as={FaInstagram} />
            <Text fontSize="sm">
              @bosqueencantado.pr
            </Text>
          </HStack>
        </VStack>

        {/* Event info */}
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
          <Text textStyle="subtitle" color="white">
            Evento
          </Text>
          <Text color="gray.400" fontSize="sm">
            📅 Julho de 2026
          </Text>
          <Text color="gray.400" fontSize="sm">
            ⏰ das 13h às 18h
          </Text>
          <Text color="gray.400" fontSize="sm">
            📍 Saída: Loja Ciranda
          </Text>
        </VStack>
      </Flex>

      <Box
        maxW="container.xl"
        mx="auto"
        mt={10}
        pt={6}
        borderTop="1px solid rgba(255,255,255,0.1)"
        textAlign="center"
      >
        <Text color="gray.600" fontSize="xs">
          © {new Date().getFullYear()} Colônia de Férias Bosque Encantado. Todos os direitos
          reservados.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
