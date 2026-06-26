'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { gsap } from '../../animations/gsap'
import Section from '../Section'

interface GalleryImage {
  id: number
  emoji: string
  label: string
  color: string
  span?: number
}

const galleryItems: GalleryImage[] = [
  { id: 1, emoji: '🌳', label: 'Bosque lindo', color: '#42B649', span: 2 },
  { id: 2, emoji: '🍄', label: 'Cogumelos mágicos', color: '#F44336' },
  { id: 3, emoji: '🏆', label: 'Olimpíadas', color: '#FDCB2D' },
  { id: 4, emoji: '🎨', label: 'Oficina criativa', color: '#26A9E0', span: 2 },
  { id: 5, emoji: '🔥', label: 'Fogueira', color: '#FF7A00' },
  { id: 6, emoji: '🎬', label: 'Cinema na mata', color: '#7A2BBE' },
  { id: 7, emoji: '🥊', label: 'Corrida do saco', color: '#42B649' },
  { id: 8, emoji: '🍭', label: 'Algodão doce', color: '#F44336', span: 2 },
  { id: 9, emoji: '🌿', label: 'Natureza pura', color: '#42B649' },
  { id: 10, emoji: '⭐', label: 'Momentos incríveis', color: '#FDCB2D' },
]

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  const handleClick = (item: GalleryImage) => {
    setSelected(item)
    onOpen()
  }

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

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('[data-gallery-item]')
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out(1.3)',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} data-testid="gallery-section">
      <Section id="galeria" bg="#F7F0FF">
        <VStack spacing={10}>
          <VStack spacing={3} textAlign="center" ref={titleRef}>
            <Text
              color="brand.purple"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              📸 Momentos mágicos
            </Text>
            <Heading
              textStyle="sectionTitle"
              color="brand.text"
            >
              Galeria do{' '}
              <Text as="span" color="brand.purple">
                Bosque
              </Text>
            </Heading>
            <Text color="gray.500" fontSize="md">
              Clique nas imagens para ver mais detalhes ✨
            </Text>
          </VStack>

          <Grid
            ref={gridRef}
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={4}
            w="full"
          >
            {galleryItems.map((item) => (
              <Box
                key={item.id}
                data-gallery-item
                gridColumn={{ md: item.span ? `span ${item.span}` : 'span 1' }}
                bg={`${item.color}20`}
                borderRadius="2xl"
                h={{ base: '140px', md: '180px' }}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                border={`2px solid ${item.color}40`}
                transition="all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)"
                _hover={{
                  transform: 'scale(1.04)',
                  boxShadow: `0 12px 32px ${item.color}40`,
                  borderColor: item.color,
                }}
                onClick={() => handleClick(item)}
                data-testid={`gallery-item-${item.id}`}
                role="button"
                aria-label={`Ver: ${item.label}`}
              >
                <Text fontSize={{ base: '4xl', md: '6xl' }} mb={2}>
                  {item.emoji}
                </Text>
                <Text
                  textStyle="smallText"
                  fontWeight="600"
                  style={{ color: item.color }}
                >
                  {item.label}
                </Text>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Section>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay backdropFilter="blur(8px)" bg="rgba(0,0,0,0.6)" />
        <ModalContent borderRadius="2xl" overflow="hidden" mx={4}>
          <ModalCloseButton
            top={4}
            right={4}
            zIndex={10}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          />
          <ModalBody p={0}>
            {selected && (
              <Box
                bg={`${selected.color}20`}
                h="400px"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="8xl" mb={4}>
                  {selected.emoji}
                </Text>
                <Text
                  textStyle="cardTitle"
                  style={{ color: selected.color }}
                >
                  {selected.label}
                </Text>
                <Text color="gray.500" mt={2} fontSize="sm">
                  Bosque Encantado — Julho 2026
                </Text>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Gallery
