import React, { FC } from 'react'
import CommentSlider from './CommentSlider'
interface houseIdProps {
  houseId: string;
}
const Index:FC<houseIdProps> =  ({houseId}) => {
  return (
    <div className='pt-11 pb-3'>
      <CommentSlider houseId={houseId}/>
    </div>
  )
}

export default Index
