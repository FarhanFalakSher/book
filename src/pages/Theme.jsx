import AboutAuthorSections from "../components/Theme/AboutAuthorSections";
import ThemeEmotionalConnections from "../components/Theme/ThemeEmotionalConnections";
import ThemeInsightsHeroSection from "../components/Theme/ThemeInsightsHeroSection";
import ThemeInsightsOverviewSection from "../components/Theme/ThemeInsightsOverviewSection";
import ThemePracticalToolsSection from "../components/Theme/ThemePracticalToolsSection";
import TherapyEducationSections from "../components/Theme/TherapyEducationSections";

const Theme = () => {
  return (
    <div>
      <ThemeInsightsHeroSection />
      <ThemeInsightsOverviewSection />
      <TherapyEducationSections />
      <ThemeEmotionalConnections />
      <ThemePracticalToolsSection />
      <AboutAuthorSections />
    </div>
  );
};

export default Theme;
