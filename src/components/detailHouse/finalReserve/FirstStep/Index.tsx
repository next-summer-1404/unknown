import React from "react";
import BookingPropertyInf from "./BookingPropertyInf";
import PaymentSummary from "./PaymentSummary";
import TicketSendingForm from "./TicketSendingForm";
import BookerInfoForm from "./BookerInfoForm";

const Index = () => {
  return (
    <div className="w-full h-auto mb-60">
      <BookingPropertyInf />
      <BookerInfoForm />
      <TicketSendingForm />
      <PaymentSummary/>
    </div>
  );
};

export default Index;
