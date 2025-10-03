import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useForm } from 'react-hook-form';

const onSubmit = (data: any) => {
   
  };

const SendRequest = () => {
      const { register, handleSubmit } = useForm();
    
  return (
    <div>
      <div className="w-full  h-20 flex flex-wrap">
        <p className="text-[#AAAAAA] text-xl">ایمیل :</p>
        <div className="w-full border border-[#AAAAAA] h-auto rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="p-2">
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="مثال: Dakjshbd@Email.Com"
                className="text-[#AAAAAA] outline-none w-full"
              />
              <label className="block text-[#DDDDDD]"></label>
            </div>
          </form>
        </div>
      </div>
      <button
        className="w-full bg-[#8CFF45] mt-14 text-[#363636] py-2 rounded-xl flex items-center justify-center gap-2 text-lg font-bold"
        type="submit"

      >
          تایید
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

export default SendRequest
