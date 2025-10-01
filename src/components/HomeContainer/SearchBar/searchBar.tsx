// import Image from "next/image";
import { BuildingOffice2Icon, CalendarDaysIcon, DocumentCurrencyDollarIcon } from "@heroicons/react/24/outline";
const SearchBar = () => {
  

  return (
    
    <div className="absolute bottom-2 lg:w-full  z-50 flex flex-col items-center">
      <div className="flex w-3/4 items-center gap-2 px-5 py-2">
        <button className="flex items-center gap-1 cursor-pointer text-[#8C8C8C]">
            <CalendarDaysIcon className="w-5 h-5 text-[#8C8C8C]" />
          <span>رزرو ملک</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl overflow-hidden"></div>
        <button className="flex items-center gap-1 cursor-pointer text-[#8C8C8C]">
            <BuildingOffice2Icon  className="w-5 h-5 text-[#8C8C8C]" />
          <span>رهن و اجاره</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl"></div>
        <button className="flex items-center gap-1 cursor-pointer text-[#8C8C8C]">
            <DocumentCurrencyDollarIcon className="w-5 h-5 text-[#8C8C8C]" />
          <span>خرید و فروش</span>
        </button>
      </div>
      <div className="w-3/4 h-28 bg-[#363636] rounded-3xl drop-shadow-[0px_12px_24px_rgba(0,0,0,0.16)] shadow-[inset_2px_2px_16px_0px_rgba(255,255,255,0.08)]"></div>
    </div>
  );
};

export default SearchBar;
