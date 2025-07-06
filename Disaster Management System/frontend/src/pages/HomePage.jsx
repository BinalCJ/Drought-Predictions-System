import React from "react";
import HeroSection from "../components/Home/HeroSection";
import QuickLinks from "../components/Home/QuickLinks";
import DisastersSection from "../components/Home/DisastersSection";
import KeyGuidelines from "../components/Home/KeyGuidelines";
import ContactSection from "../components/Home/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <DisastersSection />
      <KeyGuidelines />
      <ContactSection />
    </>
  );
};

export default HomePage;
