import React from 'react'
import AdditionalCost from './AdditionalCost'
import DiscountCodeForm from './DiscountCodeForm'
import BookerInfo from './BookerInfo'
import PaymentConfirmationSection from './PaymentConfirmationSection'
import TravelerContactInfo from './TravelerContactInfo'
import { useBookingStore } from "@/store/useBookingStore";

const Index = () => {
  //  const houseId = useBookingStore(state => state);
  // const reservedDates = useBookingStore(state => state.reservedDates);
  const travelers = useBookingStore(state => state.travelers);
  // const sharedEmail = useBookingStore(state => state.sharedEmail);
  // const sharedMobile = useBookingStore(state => state.sharedMobile);
  console.log(travelers)
  return (
    <div className='w-full px-14 pt-4 pb-20 flex flex-col gap-7 '>
      <BookerInfo/>
      <AdditionalCost/>
      <TravelerContactInfo />
      <DiscountCodeForm/>
      <PaymentConfirmationSection/>
    </div>
  )
}

export default Index
