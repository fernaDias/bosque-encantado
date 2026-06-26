import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'), { ssr: false })
const About = dynamic(() => import('../components/About'), { ssr: false })
const Activities = dynamic(() => import('../components/Activities'), { ssr: false })
const Timeline = dynamic(() => import('../components/Timeline'), { ssr: false })
const Differentials = dynamic(() => import('../components/Differentials'), { ssr: false })
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false })
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false })
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: false })
const CTA = dynamic(() => import('../components/CTA'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <Timeline />
      <Differentials />
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
