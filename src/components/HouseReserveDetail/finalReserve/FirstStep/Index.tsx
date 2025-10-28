import React from "react";
import BookingPropertyInf from "./BookingPropertyInf";
import PaymentSummary from "./PaymentSummary";
import TicketSendingForm from "./TicketSendingForm";
import BookerInfoForm from "./BookerInfoForm";
import { FC } from "react";
interface FirstStepProps {
  id: string;
}

const Index: FC<FirstStepProps> = ({id}) => {
  console.log(id, "wwww")
  return (
    <div className="w-full px-14 pt-4 pb-20 flex flex-col gap-7 ">
      <BookingPropertyInf />
      <BookerInfoForm />
      <TicketSendingForm />
      <PaymentSummary/>
    </div>
  );
};

export default Index;
