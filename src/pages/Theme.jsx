import React from 'react'
import ThemeInsightsHero from '../components/Theme/ThemeInsightsHero'
import ThemeInsightsOverviewSection from '../components/Theme/ThemeInsightsOverviewSection'
import ThemeTherapyEducationSection from '../components/Theme/ThemeTherapyEducationSection'
import ThemeRealStoriesSection from '../components/Theme/ThemeRealStoriesSection'
import ThemePracticalToolsSection from '../components/Theme/ThemePracticalToolsSection'
import ThemeAboutAuthorSection from '../components/Theme/ThemeAboutAuthorSection'
import Footer from './Footer'

const Theme = () => {
  return (
    <div>
        <ThemeInsightsHero/>
        <ThemeInsightsOverviewSection/>
        <ThemeTherapyEducationSection/>
        <ThemeRealStoriesSection/>
        <ThemePracticalToolsSection/>
        <ThemeAboutAuthorSection/>
        <Footer/>
    </div>
  )
}

export default Theme