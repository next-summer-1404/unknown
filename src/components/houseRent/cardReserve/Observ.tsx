"use client";
import { IHouses } from '@/types/IHouses';
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  house: IHouses;
}

const Observ: FC<Props> = ({ house }) => {
  return (
   <div className=" h-full flex flex-col gap-3 justify-end items-end">
            <h1 className="text-2xl text-[#8CFF45]">{house.price} ت</h1>
            <Link
              href={`/rentals/${house.id}`}
              className="flex justify-between items-center border-[#8CFF45] border rounded-md w-fit p-2 px-4 group-hover:bg-[#8CFF45]"
            >
              <h5 className="text-xs text-[#8CFF45] group-hover:text-black w-fit">
                مشاهده ملک
              </h5>
              <ChevronLeftIcon className="w-4 h-4 text-[#8CFF45] group-hover:text-black" />
            </Link>
          </div>
  )
}

export default Observ
