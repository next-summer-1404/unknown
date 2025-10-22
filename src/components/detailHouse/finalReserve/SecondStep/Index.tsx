import React from 'react'
import CostSecondReserve from './CostSecondReserve'
import TravelInfoSecond from './TravelInfoSecond'
import DiscountSecondReserve from './DiscountSecondReserve'
import FinishSecond from './FinishSecond'
import InfoSecondReserve from './InfoSecondReserve'

const Index = () => {
  return (
    <div className='w-full h-auto mb-40'>
      <InfoSecondReserve/>
      <CostSecondReserve/>
      <TravelInfoSecond/>
      <DiscountSecondReserve/>
      <FinishSecond/>
    </div>
  )
}

export default Index
