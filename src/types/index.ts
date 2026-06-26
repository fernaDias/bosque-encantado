export interface Activity {
  id: number
  name: string
  description: string
  icon: string
  color: string
}

export interface TimelineStep {
  id: number
  icon: string
  title: string
  description: string
  color: string
}

export interface Differential {
  id: number
  icon: string
  title: string
  description: string
  color: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  stars: number
  avatar: string
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface GalleryItem {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

export interface ButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'whatsapp' | 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  isLoading?: boolean
}

export interface SectionProps {
  children: React.ReactNode
  id?: string
  bg?: string
  pt?: string | number | Record<string, string | number>
  pb?: string | number | Record<string, string | number>
}

export interface CardProps {
  children: React.ReactNode
  color?: string
  onClick?: () => void
  animate?: boolean
}
