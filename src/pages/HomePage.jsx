import React from "react";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import PartnerSlider from "../components/PartnerSlider";
import Contact from "../components/Contact";
import SocialPages from "../components/SocialPages";
import HeroComponent from "../components/Hero";
import FeatureSection16 from "../components/Categories-test";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <HeroComponent />
      {/*  <Slide /> */}
      <FeatureSection16 />
      <Categories />
      <Contact />
      <PartnerSlider />
      {/*   <SocialPages /> */}
    </>
  );
};

export default HomePage;
