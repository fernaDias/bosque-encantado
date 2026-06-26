'use client'

import { useEffect, useRef } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import { FAQ_ITEMS } from '../../constants'
import Section from '../Section'
import WhatsAppButton from '../Button/WhatsAppButton'

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

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

      if (accordionRef.current) {
        const items = accordionRef.current.querySelectorAll('[data-faq-item]')
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: accordionRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="faq-section">
      <Section id="faq" bg="#F0FFF4">
        <VStack spacing={10}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.green"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              ❓ Dúvidas frequentes ❓ 
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Suas perguntas{' '}
              <Text as="span" color="brand.green">
                respondidas!
              </Text>
            </Heading>
          </VStack>

          <Box w="full" maxW="750px" mx="auto" ref={accordionRef}>
            <Accordion allowToggle>
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  data-faq-item
                  border="none"
                  mb={3}
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionButton
                    bg="white"
                    borderRadius="xl"
                    px={6}
                    py={4}
                    boxShadow="0 2px 12px rgba(0,0,0,0.06)"
                    _hover={{ bg: '#F0FFF4', boxShadow: '0 4px 20px rgba(66,182,73,0.15)' }}
                    _expanded={{ bg: 'brand.green', color: 'white', borderBottomRadius: 0 }}
                    transition="all 0.3s"
                    data-testid={`faq-button-${i}`}
                  >
                    <Box flex="1" textAlign="left">
                      <Text textStyle="subtitle" fontSize="lg">
                        {item.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel
                    bg="white"
                    px={6}
                    py={4}
                    borderBottomRadius="xl"
                    boxShadow="0 4px 12px rgba(0,0,0,0.06)"
                    data-testid={`faq-answer-${i}`}
                  >
                    <Text color="gray.600" lineHeight="1.7">
                      {item.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          <VStack spacing={3} textAlign="center">
            <Text color="gray.500" fontSize="md">
              Ainda tem dúvidas? Fala com a gente! 😊
            </Text>
            <WhatsAppButton
              label="Tirar dúvidas no WhatsApp"
              size="md"
              message="Olá! Tenho algumas dúvidas sobre a Colônia de Férias Bosque Encantado."
            />
          </VStack>
        </VStack>
      </Section>
    </Box>
  )
}

export default FAQ
