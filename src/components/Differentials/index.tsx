'use client'

import { useEffect, useRef } from 'react'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import { DIFFERENTIALS } from '../../constants'
import Section from '../Section'

const Differentials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

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

      cardRefs.current.forEach((card, i) => {
        if (!card) return

        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.85, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        )

        // Continuous float for each card
        gsap.to(card, {
          y: `-=${8 + i * 2}`,
          duration: 2 + i * 0.3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.4,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="differentials-section">
      <Section id="diferenciais">
        <VStack spacing={12}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.blue"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              ⭐ Nossos diferenciais
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Por que as famílias{' '}
              <Text as="span" color="brand.blue">
                escolhem
              </Text>{' '}
              a gente
            </Heading>
          </VStack>

          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
            gap={6}
            w="full"
          >
            {DIFFERENTIALS.map((d, i) => (
              <Box
                key={d.id}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el
                }}
                bg="white"
                borderRadius="2xl"
                p={{ base: 5, md: 8 }}
                boxShadow="0 4px 24px rgba(0,0,0,0.07)"
                textAlign="center"
                cursor="default"
                transition="box-shadow 0.3s"
                _hover={{ boxShadow: `0 16px 40px ${d.color}30` }}
                data-testid={`differential-card-${i}`}
              >
                <VStack spacing={3}>
                  <Text fontSize={{ base: '4xl', md: '5xl' }}>{d.icon}</Text>
                  <Text
                    textStyle="cardTitle"
                    style={{ color: d.color }}
                  >
                    {d.title}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    lineHeight="1.6"
                  >
                    {d.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Section>
    </Box>
  )
}

export default Differentials
