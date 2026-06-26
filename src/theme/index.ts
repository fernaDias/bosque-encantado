import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const colors = {
  brand: {
    bg: '#FFFDF8',
    text: '#242424',
    green: '#42B649',
    blue: '#26A9E0',
    purple: '#7A2BBE',
    orange: '#FF7A00',
    red: '#F44336',
    yellow: '#FDCB2D',
  },
}

const fredoka = `var(--font-fredoka), sans-serif`
const nunito = `var(--font-nunito), sans-serif`

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: fredoka,
    body: nunito,
  },
  styles: {
    global: {
      'html, body': {
        bg: 'brand.bg',
        color: 'brand.text',
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
        fontFamily: nunito,
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
  textStyles: {
    hero: {
      fontFamily: fredoka,
      fontWeight: '700',
      fontSize: { base: '40px', md: '52px', lg: '64px' },
      lineHeight: '110%',
      letterSpacing: '-0.02em',
    },
    sectionTitle: {
      fontFamily: fredoka,
      fontWeight: '700',
      fontSize: { base: '32px', md: '40px', lg: '48px' },
      lineHeight: '115%',
    },
    cardTitle: {
      fontFamily: fredoka,
      fontWeight: '600',
      fontSize: { base: '22px', md: '24px', lg: '28px' },
    },
    subtitle: {
      fontFamily: fredoka,
      fontWeight: '500',
      fontSize: { base: '18px', md: '20px', lg: '22px' },
    },
    body: {
      fontFamily: nunito,
      fontWeight: '400',
      fontSize: { base: '16px', md: '17px', lg: '18px' },
      lineHeight: '170%',
    },
    smallText: {
      fontFamily: nunito,
      fontSize: '16px',
      lineHeight: '150%',
    },
    button: {
      fontFamily: fredoka,
      fontWeight: '600',
      fontSize: '18px',
      letterSpacing: '0.02em',
    },
  },
  layerStyles: {
    card: {
      bg: 'white',
      borderRadius: '2xl',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      p: 6,
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 48px rgba(0,0,0,0.15)',
    },
    glass: {
      bg: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      borderRadius: '2xl',
      border: '1px solid rgba(255,255,255,0.6)',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: fredoka,
      },
    },
    Text: {
      baseStyle: {
        fontFamily: nunito,
      },
    },
    Button: {
      baseStyle: {
        fontFamily: fredoka,
        fontWeight: '600',
        letterSpacing: '0.02em',
        textTransform: 'none',
      },
      variants: {
        whatsapp: {
          bg: 'brand.green',
          color: 'white',
          fontFamily: fredoka,
          fontWeight: '600',
          fontSize: '18px',
          letterSpacing: '0.02em',
          textTransform: 'none',
          borderRadius: 'full',
          px: 8,
          py: 6,
          boxShadow: '0 8px 24px rgba(66,182,73,0.4)',
          _hover: {
            bg: '#36A03C',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 12px 32px rgba(66,182,73,0.5)',
          },
          _active: {
            transform: 'scale(0.97)',
          },
          transition: 'all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)',
        },
        primary: {
          bg: 'brand.orange',
          color: 'white',
          fontFamily: fredoka,
          fontWeight: '600',
          fontSize: '18px',
          letterSpacing: '0.02em',
          textTransform: 'none',
          borderRadius: 'full',
          px: 8,
          py: 6,
          boxShadow: '0 8px 24px rgba(255,122,0,0.4)',
          _hover: {
            bg: '#E06E00',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 12px 32px rgba(255,122,0,0.5)',
          },
          _active: {
            transform: 'scale(0.97)',
          },
          transition: 'all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)',
        },
        outline: {
          borderColor: 'brand.green',
          color: 'brand.green',
          fontFamily: fredoka,
          fontWeight: '600',
          fontSize: '18px',
          letterSpacing: '0.02em',
          textTransform: 'none',
          borderRadius: 'full',
          px: 8,
          py: 6,
          _hover: {
            bg: 'brand.green',
            color: 'white',
          },
        },
      },
    },
    Card: {
      variants: {
        activity: {
          container: {
            borderRadius: '2xl',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
            cursor: 'pointer',
            perspective: '1000px',
            _hover: {
              transform: 'translateY(-10px) rotateX(5deg)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
            },
          },
        },
      },
    },
  },
  shadows: {
    card: '0 8px 32px rgba(0,0,0,0.08)',
    cardHover: '0 24px 56px rgba(0,0,0,0.16)',
    colored: {
      green: '0 8px 24px rgba(66,182,73,0.35)',
      blue: '0 8px 24px rgba(38,169,224,0.35)',
      orange: '0 8px 24px rgba(255,122,0,0.35)',
      purple: '0 8px 24px rgba(122,43,190,0.35)',
    },
  },
  space: {
    section: '7rem',
  },
  radii: {
    card: '24px',
    pill: '9999px',
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
})

export default theme
