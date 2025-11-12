import React from "react";

import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import AboutFeatures from "../components/about/AboutFeatures";
import TestimonialsSection from "../components/about/TestimonialsSection";
import ApproachSection from "../components/about/ApproachSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <AboutFeatures />
      <TestimonialsSection />
      <ApproachSection />
    </div>
  );
};

export default About;
