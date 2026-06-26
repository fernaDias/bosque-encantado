'use client'

import { useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { gsap, animateHeroWords, applyHeroTitleParallax } from '../../animations/gsap'
import { useMouseParallax } from '../../hooks/useScrollAnimation'
import WhatsAppButton from '../Button/WhatsAppButton'

const HeroScene = () => (
  <>
    {/* Sky gradient */}
    <Box
      position="absolute"
      inset={0}
      bgGradient="linear(to-b, #87CEEB 0%, #B8E4F7 40%, #D4F0A0 70%, #7BC142 100%)"
      zIndex={0}
    />

    {/* Clouds layer - slow */}
    <Box position="absolute" top="8%" left="5%" data-depth="0.15" zIndex={1}>
      <Text fontSize={{ base: '5xl', md: '8xl' }}>☁️</Text>
    </Box>
    <Box position="absolute" top="12%" right="10%" data-depth="0.12" zIndex={1}>
      <Text fontSize={{ base: '4xl', md: '7xl' }}>☁️</Text>
    </Box>
    <Box position="absolute" top="5%" left="40%" data-depth="0.1" zIndex={1}>
      <Text fontSize={{ base: '3xl', md: '5xl' }}>☁️</Text>
    </Box>

    {/* Birds */}
    <Box position="absolute" top="15%" left="20%" data-depth="0.2" zIndex={2}>
      <Text fontSize="2xl">🐦</Text>
    </Box>
    <Box position="absolute" top="20%" right="25%" data-depth="0.18" zIndex={2}>
      <Text fontSize="xl">🐦</Text>
    </Box>

    {/* Far trees - back layer */}
    <Box
      position="absolute"
      bottom="0"
      left={0}
      right={0}
      height="50%"
      data-depth="0.05"
      zIndex={2}
      display="flex"
      alignItems="flex-end"
      justifyContent="space-around"
      px={2}
    >
      {['🌲', '🌳', '🌲', '🌳', '🌲', '🌳', '🌲', '🌳', '🌲', '🌳', '🌲', '🌳'].map(
        (tree, i) => (
          <Text key={i} fontSize={{ base: '5xl', md: '9xl' }} style={{ opacity: 0.5 }}>
            {tree}
          </Text>
        )
      )}
    </Box>

    {/* Mid trees */}
    <Box
      position="absolute"
      bottom="0"
      left={0}
      right={0}
      height="40%"
      data-depth="0.1"
      zIndex={3}
      display="flex"
      alignItems="flex-end"
      justifyContent="space-around"
    >
      {['🌳', '🌲', '🌳', '🌲', '🌳', '🌲', '🌳', '🌲', '🌳'].map((tree, i) => (
        <Text key={i} fontSize={{ base: '6xl', md: '10xl' }} style={{ opacity: 0.75 }}>
          {tree}
        </Text>
      ))}
    </Box>

    {/* Mushrooms */}
    <Box position="absolute" bottom="12%" left="8%" data-depth="0.25" zIndex={4}>
      <Text fontSize={{ base: '3xl', md: '5xl' }}>🍄</Text>
    </Box>
    <Box position="absolute" bottom="10%" right="12%" data-depth="0.22" zIndex={4}>
      <Text fontSize={{ base: '2xl', md: '4xl' }}>🍄</Text>
    </Box>
    <Box position="absolute" bottom="14%" left="55%" data-depth="0.28" zIndex={4}>
      <Text fontSize={{ base: '2xl', md: '3xl' }}>🍄</Text>
    </Box>

    {/* Fireflies */}
    <Box position="absolute" bottom="25%" left="15%" data-depth="0.35" zIndex={5} className="firefly">
      <Text fontSize="lg">✨</Text>
    </Box>
    <Box position="absolute" bottom="30%" right="20%" data-depth="0.3" zIndex={5} className="firefly">
      <Text fontSize="xl">✨</Text>
    </Box>
    <Box position="absolute" bottom="22%" left="60%" data-depth="0.32" zIndex={5} className="firefly">
      <Text fontSize="lg">✨</Text>
    </Box>

    {/* Grass foreground */}
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height="15%"
      data-depth="0.4"
      zIndex={6}
      display="flex"
      alignItems="flex-end"
      gap={1}
      px={1}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <Text key={i} fontSize={{ base: '3xl', md: '5xl' }}>
          🌿
        </Text>
      ))}
    </Box>

    {/* Leaves falling */}
    <Box position="absolute" top="30%" left="30%" data-depth="0.45" zIndex={5}>
      <Text fontSize="2xl" style={{ transform: 'rotate(45deg)' }}>🍃</Text>
    </Box>
    <Box position="absolute" top="45%" right="15%" data-depth="0.4" zIndex={5}>
      <Text fontSize="xl" style={{ transform: 'rotate(-30deg)' }}>🍃</Text>
    </Box>
    <Box position="absolute" top="35%" left="70%" data-depth="0.5" zIndex={5}>
      <Text fontSize="2xl" style={{ transform: 'rotate(20deg)' }}>🍂</Text>
    </Box>
  </>
)

/** Wraps each word in an inline-block span for individual animation. */
const WordSplit = ({ text, color }: { text: string; color?: string }) => (
  <>
    {text.split(' ').map((word, i) => (
      <Box
        key={i}
        as="span"
        display="inline-block"
        data-word
        mr="0.25em"
        color={color}
      >
        {word}
      </Box>
    ))}
  </>
)

const Hero = () => {
  const containerRef = useMouseParallax()
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )

      if (titleRef.current) {
        animateHeroWords(titleRef.current)
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '+=0.4'
      )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)' },
          '-=0.4'
        )

      gsap.utils.toArray('.firefly').forEach((el, i) => {
        gsap.to(el as Element, {
          opacity: 0.2,
          duration: 0.8 + i * 0.3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.5,
        })
        gsap.to(el as Element, {
          y: '-=15',
          x: `+=${i % 2 === 0 ? 10 : -10}`,
          duration: 2 + i * 0.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        })
      })
    })

    let cleanupParallax: (() => void) | undefined
    if (titleRef.current) {
      cleanupParallax = applyHeroTitleParallax(titleRef.current)
    }

    return () => {
      ctx.revert()
      cleanupParallax?.()
    }
  }, [])

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      minH="100vh"
      overflow="hidden"
      ref={containerRef}
      data-testid="hero-section"
    >
      <HeroScene />

      {/* Dark overlay for readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.25)"
        zIndex={7}
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={8}
        minH="100vh"
        align="center"
        justify="center"
        px={{ base: 4, md: 8 }}
      >
        <VStack spacing={6} textAlign="center" maxW="900px">
          <Box
            ref={badgeRef}
            bg="rgba(255,255,255,0.2)"
            backdropFilter="blur(10px)"
            borderRadius="full"
            px={5}
            py={2}
            border="2px solid rgba(255,255,255,0.4)"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: 'sm', md: 'md' }}
              letterSpacing="wider"
              color="white"
            >
              🌳 Julho de 2026 · das 13h às 18h 🌳
            </Text>
          </Box>

          <Box
            ref={titleRef}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <Heading
              textStyle="hero"
              color="white"
              textShadow="0 4px 20px rgba(0,0,0,0.4)"
            >
              <WordSplit text="Colônia de Férias" />
              <br />
              <WordSplit text="Bosque Encantado" color="#FDCB2D" />
              {' '}
              <Box as="span" display="inline-block" data-word>🍄</Box>
            </Heading>
          </Box>

          <Text
            ref={subtitleRef}
            textStyle="subtitle"
            color="rgba(255,255,255,0.95)"
            fontWeight="600"
            textShadow="0 2px 8px rgba(0,0,0,0.3)"
            maxW="600px"
          >
            Experiências ao ar livre para crianças — natureza, diversão e memórias inesquecíveis! ✨
          </Text>

          <Box ref={buttonRef} pt={2}>
            <WhatsAppButton label="Quero reservar uma vaga" size="lg" />
          </Box>

          <Text
            color="rgba(255,255,255,0.8)"
            fontSize="sm"
            fontWeight="600"
          >
            ⚡ Vagas limitadas — garanta a sua!
          </Text>
        </VStack>
      </Flex>

      {/* Scroll indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={9}
        textAlign="center"
      >
        <Text color="rgba(255,255,255,0.7)" fontSize="xs" mb={2}>
          role para baixo
        </Text>
        <Box
          w="2px"
          h="40px"
          bg="rgba(255,255,255,0.5)"
          mx="auto"
          borderRadius="full"
          className="scroll-indicator"
        />
      </Box>
    </Box>
  )
}

export default Hero
