import React from "react";
import BookingPropertyInf from "./BookingPropertyInf";
import BookerInfoSection from "./BookerInfoSection";
import CheckoutSummary from "./CheckoutSummary";

const Index = () => {
  return (
    <div className="w-full h-auto mb-60">
      <BookingPropertyInf />
      <BookerInfoSection />
      <CheckoutSummary/>
    </div>
  );
};

export default Index;
