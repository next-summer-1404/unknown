import React from "react";
import styles from "./Footer.module.css";
import { PhoneIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <div className="bg-[#232323]  p-9">
      <div className="relative w-full bg-[#8CFF45] rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} flex items-center justify-start gap-3 flex-row-reverse px-3 w-8/12 h-16 absolute top-0 left-0 bg-[#232323] rounded-[0_0_40px_0]`}
        >
          <span className="text-white text-4xl">The</span>
          <span className="text-white text-8xl">DELTA</span>
          <span className="text-white text-4xl"> real statement</span>
        </div>
        <div className="flex justify-center items-center gap-3 rounded-3xl h-10 w-3/12 mt-0.5 text-white bg-[#232323]">
          <div className="text-md"> 09229167194 - 09154569872</div>
          <PhoneIcon className="w-7 h-7" />
        </div>
        <div className="flex flex-wrap bg-amber-200  mt-9 w-full">
            <div className="w-1/2 bg-amber-950 h-52"></div>
            <div className="w-1/2 bg-cyan-600 h-52"></div>
            <div className="w-full bg-indigo-950 h-52">ddddd</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
 