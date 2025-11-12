import React from "react";

import Hero from "../components/about/Hero";
import StorySection from "../components/about/StorySection";
import AboutFeatures from "../components/about/AboutFeatures";
import TestimonialsSection from "../components/about/TestimonialsSection";
import ApproachSection from "../components/about/ApproachSection";

const About = () => {
  return (
    <div>
      <Hero />
      <StorySection />
      <AboutFeatures />
      <TestimonialsSection />
      <ApproachSection />
    </div>
  );
};

export default About;
