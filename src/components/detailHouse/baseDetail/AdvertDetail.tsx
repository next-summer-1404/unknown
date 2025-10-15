import { BuildingOffice2Icon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AdvertDetail = () => {
  return (
    <div className="w-11/12 m-auto h-[600px] border border-amber-200">
        <div className="w-full h-10 bg-[#393939] rounded-2xl flex gap-[1140px] items-center p-3">
          <div className="flex">
            <BuildingOffice2Icon className="w-5 h-5 text-white" />
            <p className="text-white">آگهی های مشابه</p>
          </div>
          <div className="flex ">
            <p className="text-[#8CFF45]">  مشاهده همه</p>
            <ChevronLeftIcon className="w-5 h-5 text-[#8CFF45]" />
          </div>
        </div>
      </div>
  )
}

export default AdvertDetail
