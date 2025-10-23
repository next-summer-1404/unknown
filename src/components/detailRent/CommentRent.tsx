import React from 'react'
import UserCommentsHouse from '../detailHouse/userCommentsHouse/UserCommentsHouse'
import { IHouses } from '@/types/IHouses';
import AdvertHouseRent from './AdvertHouseRent';



interface Props {
  house: IHouses;
}

const CommentRent = ({house} :Props) => {
  return (
    <div className='w-11/12 mx-auto mt-10 border-4 border-blue-400'>
      <UserCommentsHouse house={house}/>
      <AdvertHouseRent/>
    </div>
  )
}

export default CommentRent
