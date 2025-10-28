import { IHouses } from '@/types/IHouses';
import React from 'react'


interface HouseFacilitiesProps {
  house: IHouses;
}

const HouseFacilities = ({ house }: HouseFacilitiesProps) => {
  return (
    <div className='w-full h-auto mt-10 flex gap-5'>
      <div className='w-3/12 rounded-2xl h-30 border bg-[#393939]'>
        <p className='text-white text-center p-5'> بهداشتی</p>
        <div className='bg-[#7569FF] rounded-2xl w-2/3 m-auto p-1'><p className='text-white text-center'>{house.bathrooms}</p></div>
      </div>
       <div className='w-3/12 rounded-2xl h-30 border bg-[#393939]'>
        <p className='text-white text-center p-5'> پارکینگ</p>
        <div className='bg-[#7569FF] rounded-2xl w-2/3 m-auto p-1'><p className='text-white text-center'>{house.parking}</p></div>
      </div>
       <div className='w-3/12 rounded-2xl h-30 border bg-[#393939]'>
        <p className='text-white text-center p-5'> اتاق خواب</p>
        <div className='bg-[#7569FF] rounded-2xl w-2/3 m-auto p-1'><p className='text-white text-center'>{house.rooms}</p></div>
      </div>
       <div className='w-3/12 rounded-2xl h-30 border bg-[#393939]'>
        <p className='text-white text-center p-5'> نوع حیاط</p>
        <div className='bg-[#7569FF] rounded-2xl w-2/3 m-auto p-1'><p className='text-white text-center'>{house.yard_type}</p></div>
      </div>
      
    </div>
  )
}

export default HouseFacilities
