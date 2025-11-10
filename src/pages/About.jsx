import React from 'react'

import AboutHeroSection from '../components/about/AboutHero'
import AboutStorySection from '../components/about/AboutStorySection'
import AboutFeaturesSection from '../components/about/AboutFeaturesSection'
import TestimonialsSection from '../components/about/TestimonialsSection'
import ApproachSection from '../components/about/ApproachSection'


const About = () => {
  return (
    <div>
   
        <AboutHeroSection/>
        <AboutStorySection/>
        <AboutFeaturesSection/>
        <TestimonialsSection/>
        <ApproachSection/>

    </div>
  )
}

export default About