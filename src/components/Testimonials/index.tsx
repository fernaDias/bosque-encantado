'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import { TESTIMONIALS } from '../../constants'
import Section from '../Section'

const Stars = ({ count }: { count: number }) => (
  <HStack spacing={1}>
    {Array.from({ length: count }).map((_, i) => (
      <Text key={i} color="#FDCB2D" fontSize="lg">
        ★
      </Text>
    ))}
  </HStack>
)

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    if (!carouselRef.current) return

    const cards = carouselRef.current.querySelectorAll('[data-testimonial]')

    gsap.to(cards[current], {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrent(index)
        gsap.fromTo(
          cards[index],
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
        )
      },
    })
  }, [current])

  const next = useCallback(() => {
    const nextIndex = (current + 1) % TESTIMONIALS.length
    goTo(nextIndex)
  }, [current, goTo])

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [next])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
        }
      )

      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll('[data-testimonial]')
        cards.forEach((card, i) => {
          if (i !== 0) {
            gsap.set(card, { opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 })
          }
        })

        gsap.fromTo(
          cards[0],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: carouselRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="testimonials-section">
      <Section id="depoimentos" bg="#FFFDF8">
        <VStack spacing={12}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.yellow"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              💛 O que as famílias dizem
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Depoimentos de quem{' '}
              <Text as="span" color="#FDCB2D">
                viveu a magia
              </Text>
            </Heading>
          </VStack>

          <Box position="relative" w="full" maxW="700px" mx="auto" minH="260px" ref={carouselRef}>
            {TESTIMONIALS.map((t, i) => (
              <Box
                key={t.id}
                data-testimonial={i}
                bg="white"
                borderRadius="3xl"
                p={{ base: 7, md: 10 }}
                boxShadow="0 8px 40px rgba(0,0,0,0.1)"
                border="2px solid #FDCB2D30"
              >
                <VStack align="start" spacing={4}>
                  <Stars count={t.stars} />
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="gray.700"
                    lineHeight="1.7"
                    fontStyle="italic"
                  >
                    &ldquo;{t.text}&rdquo;
                  </Text>
                  <HStack spacing={3}>
                    <Text fontSize="2xl">{t.avatar}</Text>
                    <Box>
                      <Text textStyle="cardTitle" fontSize="lg" color="brand.text">
                        {t.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {t.role}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </Box>

          {/* Dots */}
          <Flex gap={2} justify="center">
            {TESTIMONIALS.map((_, i) => (
              <Box
                key={i}
                as="button"
                w={i === current ? 8 : 3}
                h={3}
                borderRadius="full"
                bg={i === current ? 'brand.yellow' : 'gray.200'}
                transition="all 0.3s"
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current)
                  goTo(i)
                }}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </Flex>
        </VStack>
      </Section>
    </Box>
  )
}

export default Testimonials
