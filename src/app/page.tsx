import AboutUs from "@/components/HomeContainer/AboutUs/AboutUs";
import DiscountSection from "@/components/HomeContainer/DiscountSection/DiscountSection";
import HeroSection from "@/components/HomeContainer/HeroSection/heroSection";
import PropertyCategories from "@/components/HomeContainer/PropertyCategories/PropertyCategories";
import Rental from "@/components/HomeContainer/Rental/Rental";
import React from "react";
import RealEstateSection from "../components/HomeContainer/RealEstateSection/RealEstateSection";
import NewPlace from "@/components/HomeContainer/NewPlace/NewPlace";
import UserComments from "@/components/HomeContainer/UserComments/UserComments";

const Landing = () => {
  return (
    <div className="">
      <HeroSection />
      <PropertyCategories />
      <DiscountSection />
      <Rental />
      <AboutUs />
      <RealEstateSection />
      <NewPlace />
      <UserComments />
    </div>
  );
};

export default Landing;
