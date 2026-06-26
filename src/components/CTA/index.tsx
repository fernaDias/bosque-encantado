'use client'

import { useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import WhatsAppButton from '../Button/WhatsAppButton'

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        }
      )

      // Floating emojis
      const emojis = sectionRef.current?.querySelectorAll('[data-float]')
      emojis?.forEach((el, i) => {
        gsap.to(el, {
          y: `-=${12 + i * 4}`,
          duration: 2 + i * 0.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box
      as="section"
      id="reservar"
      ref={sectionRef}
      position="relative"
      overflow="hidden"
      data-testid="cta-section"
    >
      {/* Gradient BG */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(135deg, #42B649 0%, #26A9E0 50%, #7A2BBE 100%)"
      />

      {/* Decorative elements */}
      <Box position="absolute" top="10%" left="5%" data-float opacity={0.3} fontSize="6xl">
        🌳
      </Box>
      <Box position="absolute" top="20%" right="8%" data-float opacity={0.25} fontSize="5xl">
        🍄
      </Box>
      <Box position="absolute" bottom="15%" left="10%" data-float opacity={0.2} fontSize="4xl">
        ✨
      </Box>
      <Box position="absolute" bottom="20%" right="5%" data-float opacity={0.3} fontSize="5xl">
        🌿
      </Box>
      <Box position="absolute" top="50%" left="2%" data-float opacity={0.15} fontSize="3xl">
        🦋
      </Box>
      <Box position="absolute" top="40%" right="3%" data-float opacity={0.2} fontSize="3xl">
        🐦
      </Box>

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        minH="500px"
        align="center"
        justify="center"
        px={{ base: 5, md: 8 }}
        py={{ base: 20, md: 28 }}
      >
        <VStack spacing={8} textAlign="center" maxW="800px" ref={contentRef}>
          <Text fontSize={{ base: '4xl', md: '6xl' }}>🌟</Text>

          <Heading
            textStyle="sectionTitle"
            color="white"
            textShadow="0 4px 20px rgba(0,0,0,0.3)"
          >
            As férias mais divertidas do ano{' '}
            <Text as="span" color="#FDCB2D">
              começam aqui!
            </Text>
          </Heading>

          <Text
            textStyle="subtitle"
            color="rgba(255,255,255,0.95)"
            maxW="500px"
          >
            Garanta uma experiência única de contato com a natureza, diversão e aprendizado para
            seu filho. Vagas limitadas! 🍄
          </Text>

          <VStack spacing={4}>
            <WhatsAppButton label="Quero reservar uma vaga agora!" size="lg" />
            <Text color="rgba(255,255,255,0.8)" fontSize="sm" fontWeight="600">
              📅 Julho de 2026 · ⏰ 13h às 18h · 📍 Loja Ciranda
            </Text>
          </VStack>

          {/* Social proof */}
          {/* <Box
            bg="rgba(255,255,255,0.15)"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            px={8}
            py={4}
            border="1px solid rgba(255,255,255,0.3)"
          >
            <Text color="white" fontSize="md" fontWeight="700">
              ⭐⭐⭐⭐⭐ &nbsp; Mais de 50 famílias já confirmaram!
            </Text>
          </Box> */}
        </VStack>
      </Flex>
    </Box>
  )
}

export default CTA
