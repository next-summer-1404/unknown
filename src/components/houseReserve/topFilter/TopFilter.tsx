'use client'
import {MegaphoneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import DestinationFilter from './DestinationFilter'
import SortingFilter from './SortingFilter'
import SearchFilter from './SearchFilter'


interface TopFilterProps {
  totalCount: number;
}

const TopFilter: React.FC<TopFilterProps> = ({ totalCount }) => {
  return (
    
      <div className="w-11/12 m-auto bg-[#2A2A2A] p-4 rounded-xl flex flex-wrap items-center gap-4">
        <DestinationFilter/>
        <SortingFilter/>
        <SearchFilter/>
        <div className=" mr-40 mt-5 flex items-center justify-center rounded-lg border border-[#AAAAAA] w-40">
          <MegaphoneIcon className="w-5 h-5 text-white mr-2" />
          <p className="  text-white text-md  p-2">تعداد آگهی :  {totalCount}</p>
        </div>
      </div>
    
  )
}

export default TopFilter
