import DiscountSection from "@/components/HomeContainer/DiscountSection/DiscountSection";
import HeroSection from "@/components/HomeContainer/HeroSection/heroSection";
import PropertyCategories from "@/components/HomeContainer/PropertyCategories/PropertyCategories";
import React from "react";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <PropertyCategories />
      <DiscountSection />
    </div>
  );
};

export default Landing;
