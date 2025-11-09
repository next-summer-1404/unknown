import React from 'react'
import CommentSlider from './CommentSlider'
import { getComments } from '@/utils/service/api/getComments';
import { IComments } from '@/types/ICommentCardProps';

const Index =  () => {

  // اینجا
//   const comments =  getComments({
//   page: 1,
//   limit: 10,
// });
// const Comment: IComments[] = comments;

console.log(Comment)
  return (
    <div className='pt-11 pb-3'>
      <CommentSlider />
    </div>
  )
}

export default Index
