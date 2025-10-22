import React from 'react'
import AdditionalCost from './AdditionalCost'
import TravelerContactInfo from './TravelerContactInfo'
import DiscountCodeForm from './DiscountCodeForm'
import PaymentConfirmationSection from './PaymentConfirmationSection'
import BookerInfo from './BookerInfo'

const Index = () => {
  return (
    <div className='w-full h-auto mb-40'>
      <BookerInfo/>
      <AdditionalCost/>
      <TravelerContactInfo/>
      <DiscountCodeForm/>
      <PaymentConfirmationSection/>
    </div>
  )
}

export default Index
