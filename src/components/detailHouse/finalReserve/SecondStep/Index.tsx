import React from 'react'
import AdditionalCost from './AdditionalCost'
import DiscountCodeForm from './DiscountCodeForm'
import BookerInfo from './BookerInfo'
import PaymentConfirmationSection from './PaymentConfirmationSection'
import TravelerContactInfo from './TravelerContactInfo'

const Index = () => {
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
