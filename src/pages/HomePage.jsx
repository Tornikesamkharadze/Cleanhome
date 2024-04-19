import React from "react";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import PartnerSlider from "../components/PartnerSlider";
import Contact from "../components/Contact";
import HeroComponent from "../components/Hero";
import FeatureSection16 from "../components/Categories-test";
import TopContent from "../components/TopContent";
import InformationCard from "../components/InformationCard";
import ThreeColumnCard from "../components/ThreeColumnCard";
import AccordionC from "../components/AccordionC";
const HomePage = () => {
  return (
    <>
      <TopContent />

      {/*  <Slide /> */}
      <InformationCard />
      {/*  <Categories /> */}
    {/*   <ThreeColumnCard /> */}
    <AccordionC/>
      <Contact />
      <PartnerSlider />
      {/*   <SocialPages /> */}
    </>
  );
};

export default HomePage;
