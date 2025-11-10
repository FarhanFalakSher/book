import React from 'react'

import AboutHeroSection from '../components/about/AboutHero'
import StorySection from '../components/about/StorySection'
import AboutFeaturesSection from '../components/about/AboutFeaturesSection'
import TestimonialsSection from '../components/about/TestimonialsSection'
import ApproachSection from '../components/about/ApproachSection'


const About = () => {
  return (
    <div>
   
        <AboutHeroSection/>
        <StorySection/>
        <AboutFeaturesSection/>
        <TestimonialsSection/>
        <ApproachSection/>

    </div>
  )
}

export default About