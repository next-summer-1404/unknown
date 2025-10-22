import { IHouses } from '@/types/IHouses';
import React from 'react'

interface Props {
  house: IHouses;
}

const BaseDetailRent = ({ house }: Props) => {
  return (
    <div className='border border-red-400 w-full h-[1080px]'>
      BaseDetailRent
    </div>
  )
}

export default BaseDetailRent
