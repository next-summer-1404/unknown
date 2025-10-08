import AboutUs from "@/components/HomeContainer/AboutUs/AboutUs";
import DiscountSection from "@/components/HomeContainer/DiscountSection/DiscountSection";
import HeroSection from "@/components/HomeContainer/HeroSection/heroSection";
import PropertyCategories from "@/components/HomeContainer/PropertyCategories/PropertyCategories";
import Rental from "@/components/HomeContainer/Rental/Rental";
import React from "react";

const Landing = () => {
  return (
    <div className="">
      <HeroSection />
      <PropertyCategories />
      <DiscountSection />
      <Rental />
      <AboutUs />
    </div>
  );
};

export default Landing;
