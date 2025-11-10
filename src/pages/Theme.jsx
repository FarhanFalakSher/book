

import ThemeInsightsHero from "../components/theme/ThemeInsightsHero"
import TherapyEducationSection from "../components/theme/TherapyEducationSection"
import ThemeEmotionalConnection from "../components/theme/RealStoriesSection"
import PracticalToolsSection from "../components/theme/PracticalToolsSection"
import AboutAuthorSection from "../components/theme/AboutAuthorSection"
import InsightsOverviewSection from "../components/theme/InsightsOverviewSection"


const Theme = () => {
  return (
    <div>
        
        <ThemeInsightsHero/>
        <InsightsOverviewSection/>
        <TherapyEducationSection/>
        <ThemeEmotionalConnection/>
        <PracticalToolsSection/>
        <AboutAuthorSection/>


    </div>
  )
}

export default Theme