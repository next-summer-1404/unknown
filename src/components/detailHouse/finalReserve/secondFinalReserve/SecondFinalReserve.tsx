import React from 'react'
import InfoSecondReseve from './InfoSecondReseve'
import CostSecondReserve from './CostSecondReserve'
import TravelInfoSecond from './TravelInfoSecond'
import DiscountSecondReserve from './DiscountSecondReserve'
import FinishSecond from './FinishSecond'

const SecondFinalReserve = () => {
  return (
    <div className='w-full h-auto mb-40'>
      <InfoSecondReseve/>
      <CostSecondReserve/>
      <TravelInfoSecond/>
      <DiscountSecondReserve/>
      <FinishSecond/>
    </div>
  )
}

export default SecondFinalReserve
