import React from 'react'
import AboutHeroSection from '../components/about/AboutHero'
import AboutStorySection from '../components/about/AboutStorySection'
import AboutFeaturesSection from '../components/about/AboutFeaturesSection'
import AboutTestimonialsSection from '../components/about/AboutTestimonialsSection'
import ApproachAndCtaSection from '../components/about/ApproachAndCtaSection'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <AboutHeroSection/>
        <AboutStorySection/>
        <AboutFeaturesSection/>
        <AboutTestimonialsSection/>
        <ApproachAndCtaSection/>
        <Footer/>
    </div>
  )
}

export default About