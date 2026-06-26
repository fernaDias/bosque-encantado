'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import { ACTIVITIES } from '../../constants'
import { Activity } from '../../types'
import Section from '../Section'

interface ActivityCardProps {
  activity: Activity
  index: number
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 15
    const rotateY = (x / rect.width) * 15

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    setIsHovered(false)
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  const handleMouseEnter = () => {
    if (!cardRef.current) return
    setIsHovered(true)
    gsap.to(cardRef.current, {
      y: -10,
      boxShadow: `0 24px 48px ${activity.color}40`,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <Box
      ref={cardRef}
      bg="white"
      borderRadius="2xl"
      p={6}
      boxShadow="0 4px 16px rgba(0,0,0,0.08)"
      cursor="pointer"
      style={{ transformStyle: 'preserve-3d' }}
      transition="background 0.3s"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-testid={`activity-card-${index}`}
      border={isHovered ? `2px solid ${activity.color}` : '2px solid transparent'}
    >
      <VStack spacing={3} align="start">
        <Box
          w={14}
          h={14}
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          style={{ backgroundColor: `${activity.color}20` }}
        >
          {activity.icon}
        </Box>
        <Box>
          <Text
            textStyle="cardTitle"
            color="brand.text"
            mb={1}
            style={{ color: isHovered ? activity.color : undefined }}
            transition="color 0.3s"
          >
            {activity.name}
          </Text>
          <Text fontSize="sm" color="gray.500" lineHeight="1.5">
            {activity.description}
          </Text>
        </Box>
      </VStack>

      {/* Shine effect */}
      {isHovered && (
        <Box
          position="absolute"
          inset={0}
          borderRadius="2xl"
          pointerEvents="none"
          bgGradient="linear(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)"
        />
      )}
    </Box>
  )
}

const Activities = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('[data-testid^="activity-card-"]')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="activities-section">
      <Section id="atividades">
        <VStack spacing={12}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.orange"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              🎉 Programação completa
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Atividades que as crianças{' '}
              <Text as="span" color="brand.orange">
                vão amar!
              </Text>
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.500"
              maxW="500px"
            >
              12 atividades incríveis pensadas para estimular o corpo, a mente e o coração.
            </Text>
          </VStack>

          <Grid
            ref={gridRef}
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={5}
            w="full"
          >
            {ACTIVITIES.map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} index={index} />
            ))}
          </Grid>
        </VStack>
      </Section>
    </Box>
  )
}

export default Activities
