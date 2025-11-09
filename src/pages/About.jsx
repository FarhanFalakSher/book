import React from 'react'
import AboutHeroSection from '../components/About/AboutHero'
import AboutStorySection from '../components/About/AboutStorySection'
import AboutFeaturesSection from '../components/About/AboutFeaturesSection'
import AboutTestimonialsSection from '../components/About/AboutTestimonialsSection'
import ApproachAndCtaSection from '../components/About/ApproachAndCtaSection'
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