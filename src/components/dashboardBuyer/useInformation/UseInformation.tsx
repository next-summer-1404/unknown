import React from 'react'
import ImageInfo from './ImageInfo'
import User from './User'
import SecurityInfo from './SecurityInfo'

const UseInformation = () => {
  return (
    <div className="h-auto bg-[#393939] rounded-2xl flex flex-col">
      <ImageInfo/>
      <User/>
      <SecurityInfo/>
    </div>
  )
}

export default UseInformation
