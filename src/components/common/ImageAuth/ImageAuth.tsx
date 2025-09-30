import React from 'react'
import auth1 from "@/assets/images/auth1.png";
import Image from "next/image";

const ImageAuth = () => {
  return (
    
       <div className=" w-full mt-8 md:mt-4 relative h-[480] rounded-xl overflow-hidden">
        <Image
          src={auth1}
          alt="احراز هویت"
          fill
          className="object-cover"
          priority
        />
      </div>

  )
}

export default ImageAuth
