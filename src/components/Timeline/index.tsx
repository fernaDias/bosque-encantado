'use client'

import { useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import { TIMELINE_STEPS } from '../../constants'
import Section from '../Section'

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

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

      itemRefs.current.forEach((item, i) => {
        if (!item) return
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: i % 2 === 0 ? -60 : 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="timeline-section">
      <Section id="como-funciona" bg="#FFF8F0">
        <VStack spacing={12}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.purple"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              📅 Como funciona o dia
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Um dia{' '}
              <Text as="span" color="brand.purple">
                mágico
              </Text>{' '}
              de ponta a ponta!
            </Heading>
          </VStack>

          <Box position="relative" w="full" maxW="700px" mx="auto">
            {/* Vertical line */}
            <Box
              position="absolute"
              left={{ base: '28px', md: '50%' }}
              top={0}
              bottom={0}
              w="3px"
              bg="linear-gradient(to bottom, #42B649, #26A9E0, #7A2BBE, #FF7A00, #F44336)"
              borderRadius="full"
              transform={{ md: 'translateX(-50%)' }}
              zIndex={0}
            />

            <VStack spacing={0} align="stretch">
              {TIMELINE_STEPS.map((step, i) => {
                const isLeft = i % 2 === 0
                return (
                  <Box
                    key={step.id}
                    ref={(el) => {
                      if (el) itemRefs.current[i] = el
                    }}
                    data-testid={`timeline-item-${i}`}
                    position="relative"
                    mb={8}
                  >
                    <Flex
                      direction={{ base: 'row', md: isLeft ? 'row' : 'row-reverse' }}
                      align="center"
                      gap={4}
                    >
                      {/* Circle */}
                      <Box
                        flexShrink={0}
                        w={14}
                        h={14}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="2xl"
                        zIndex={1}
                        style={{ backgroundColor: step.color }}
                        boxShadow={`0 4px 16px ${step.color}50`}
                        position={{ md: 'absolute' }}
                        left={{ md: 'calc(50% - 28px)' }}
                      >
                        {step.icon}
                      </Box>

                      {/* Content */}
                      <Box
                        ml={{ base: 4, md: isLeft ? 0 : 'auto' }}
                        mr={{ base: 0, md: isLeft ? 'auto' : 0 }}
                        w={{ md: 'calc(50% - 50px)' }}
                        bg="white"
                        borderRadius="2xl"
                        p={5}
                        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                        border={`2px solid ${step.color}30`}
                        transition="all 0.3s"
                        _hover={{
                          transform: 'translateY(-4px)',
                          boxShadow: `0 12px 32px ${step.color}25`,
                        }}
                      >
                        <Text
                          textStyle="cardTitle"
                          color="brand.text"
                          mb={1}
                        >
                          {step.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {step.description}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                )
              })}
            </VStack>
          </Box>
        </VStack>
      </Section>
    </Box>
  )
}

export default Timeline
