import Image from "next/image";
import React from "react";
import backgroundImg from "../../../../public/assets/Rectangle6481.png";
import textImg from "../../../../public/assets/Group12.png";
import building from "../../../../public/assets/building.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-t from-black/80 to-transparent">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* text */}
      <div className="absolute left-[8%] top-[12%] transform   z-0">
        <Image src={textImg} alt="Text" width={1100} height={200} />
      </div>

      {/* building */}
      <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2  inset-0 z-10 ">
        <Image
          src={building}
          alt="Building"
          width={530}
          className=""
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent z-50"></div>
    </section>
  );
};

export default HeroSection;
