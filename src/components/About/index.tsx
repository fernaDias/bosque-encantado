'use client'

import { useEffect, useRef } from 'react'
import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaBus, FaHeart, FaLeaf, FaStar, FaTree } from 'react-icons/fa'
import { gsap } from '../../animations/gsap'
import Section from '../Section'
import WhatsAppButton from '../Button/WhatsAppButton'

const features = [
  {
    icon: FaBus,
    title: 'Transporte Incluso',
    desc: 'Saímos da Loja Ciranda sem preocupação.',
    color: '#26A9E0',
    bg: '#EBF8FF',
  },
  {
    icon: FaStar,
    title: 'Recreação Especializada',
    desc: 'Equipe treinada com Patricia Cavalli.',
    color: '#FDCB2D',
    bg: '#FFFFF0',
  },
  {
    icon: FaTree,
    title: 'Contato com a Natureza',
    desc: 'Bosque real para explorar e brincar.',
    color: '#42B649',
    bg: '#F0FFF4',
  },
  {
    icon: FaHeart,
    title: 'Segurança Total',
    desc: 'Ambiente monitorado e preparado.',
    color: '#F44336',
    bg: '#FFF5F5',
  },
  {
    icon: FaLeaf,
    title: 'Experiência Mágica',
    desc: 'Memórias que duram a vida inteira.',
    color: '#7A2BBE',
    bg: '#FAF5FF',
  },
]

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      cardRefs.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="about-section">
      <Section id="sobre" bg="#F0FFF4">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center" ref={titleRef}>
            <Text
              color="brand.green"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              🌟 Por que o Bosque Encantado?
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Uma aventura que os pais confiam
              <br />e as crianças adoram!
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="650px"
            >
              Criamos uma experiência completa: transporte seguro, monitores especializados e
              um bosque de verdade para explorar. Tudo para que pais fiquem tranquilos e crianças
              vivam dias mágicos.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}
            w="full"
          >
            {features.map((f, i) => (
              <Box
                key={f.title}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el
                }}
                bg="white"
                borderRadius="2xl"
                p={7}
                boxShadow="0 4px 24px rgba(0,0,0,0.07)"
                border="2px solid transparent"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.13)',
                  borderColor: f.color,
                }}
                data-testid={`about-card-${i}`}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <VStack align="start" spacing={4}>
                  <Box
                    bg={f.bg}
                    borderRadius="xl"
                    p={3}
                    display="inline-flex"
                  >
                    <Icon as={f.icon} color={f.color} boxSize={6} />
                  </Box>
                  <Box>
                    <Text
                      textStyle="cardTitle"
                      color="brand.text"
                      mb={1}
                    >
                      {f.title}
                    </Text>
                    <Text color="gray.600" fontSize="md">
                      {f.desc}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ))}

            {/* Patricia Cavalli highlight card */}
            <Box
              ref={(el) => {
                if (el) cardRefs.current[features.length] = el
              }}
              bg="linear-gradient(135deg, #7A2BBE, #26A9E0)"
              borderRadius="2xl"
              p={7}
              color="white"
              gridColumn={{ lg: '1 / 4' }}
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 40px rgba(122,43,190,0.4)',
              }}
            >
              <HStack spacing={4} align="start">
                <Text fontSize="4xl">👩‍🏫</Text>
                <VStack align="start" spacing={2}>
                  <Text textStyle="cardTitle">
                    Patricia Cavalli — Especialista em Recreação
                  </Text>
                  <Text fontSize="md" opacity={0.9}>
                    Ex-professora do IEIJI e especialista em tirar os grandinhos para brincar.
                    Com ela, cada criança encontra seu espaço para se expressar e se divertir!
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Grid>

          <WhatsAppButton label="Garantir minha vaga agora" size="md" />
        </VStack>
      </Section>
    </Box>
  )
}

export default About
