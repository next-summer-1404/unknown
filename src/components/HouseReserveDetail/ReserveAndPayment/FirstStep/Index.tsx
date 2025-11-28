'use client'
import React, { useState } from "react";
import BookingPropertyInf from "./BookingPropertyInf";
import PaymentSummary from "./PaymentSummary";
import TicketSendingForm from "./TicketSendingForm";
import BookerInfoForm from "./BookerInfoForm";
import { FC } from "react";
import { Traveler } from "@/store/useBookingStore";

interface FirstStepProps {
  id: string;
}

const FirstStep: FC<FirstStepProps> = ({ id }) => {
  // console.log(id, "wwww")
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [contactInfo, setContactInfo] = useState({ email: "", phone: "" });
 

  // تابع اعتبارسنجی مسافران
  const validateTravelers = () => {
    if (travelers.length === 0) return false;
    return travelers.every(
      (t) =>
        t.firstName.trim() !== "" &&
        t.lastName.trim() !== "" &&
        t.gender.trim() !== "" &&
        t.birthDate.trim() !== "" &&
        t.nationalId.trim() !== ""
    );
  };

  // تابع اعتبارسنجی اطلاعات تماس
  const validateContact = () => {
    return contactInfo.email.trim() !== "" && contactInfo.phone.trim() !== "";
  };

  return (
    <div className="w-full px-14 pt-4 pb-20 flex flex-col gap-7 ">
      <BookingPropertyInf id={id} />
      <BookerInfoForm onSaveTravelers={(data) => setTravelers(data)} />
      <TicketSendingForm setContactInfo={(info) => setContactInfo(info)} />
      <PaymentSummary
        validateTravelers={validateTravelers}
        validateContact={validateContact}
      />
    </div>
  );
};

export default FirstStep;
