import AboutUs from "@/components/HomeContainer/AboutUs/AboutUs";
import DiscountSection from "@/components/HomeContainer/DiscountSection/DiscountSection";
import HeroSection from "@/components/HomeContainer/HeroSection/heroSection";
import PropertyCategories from "@/components/HomeContainer/PropertyCategories/PropertyCategories";
import Rental from "@/components/HomeContainer/Rental/Rental";
import React from "react";
import RealEstateSection from "../components/HomeContainer/RealEstateSection/RealEstateSection";

const Landing = () => {
  return (
    <div className="bg-[#2d2d2d]">
      <HeroSection />
      <PropertyCategories />
      <DiscountSection />
      <Rental />
      <AboutUs />
      <RealEstateSection />
    </div>
  );
};

export default Landing;
