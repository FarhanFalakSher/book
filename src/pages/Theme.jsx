import React from 'react'
import ThemeInsightsHero from '../components/theme/ThemeInsightsHero'
import ThemeInsightsOverviewSection from '../components/theme/ThemeInsightsOverviewSection'
import ThemeTherapyEducationSection from '../components/theme/ThemeTherapyEducationSection'
import ThemeRealStoriesSection from '../components/theme/ThemeRealStoriesSection'
import ThemePracticalToolsSection from '../components/theme/ThemePracticalToolsSection'
import ThemeAboutAuthorSection from '../components/theme/ThemeAboutAuthorSection'
// import Footer from './Footer'

const Theme = () => {
  return (
    <div>
        <ThemeInsightsHero/>
        <ThemeInsightsOverviewSection/>
        <ThemeTherapyEducationSection/>
        <ThemeRealStoriesSection/>
        <ThemePracticalToolsSection/>
        <ThemeAboutAuthorSection/>
        {/* <Footer/> */}
    </div>
  )
}

export default Theme