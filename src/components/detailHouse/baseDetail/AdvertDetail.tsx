import { BuildingOffice2Icon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import SliderAdvertise from './SliderAdvertise'
import { getHouses } from '@/utils/service/api/getAllHouses';
import { IHouses } from '@/types/IHouses';


const AdvertDetail =async () => {
   const HouseList = await getHouses();
  const Houses: IHouses[]  =HouseList.houses 
  // console.log(Houses)

  
  return (
    <div className="w-11/12 m-auto bg-[#232323]">
        <div className="w-full h-10 bg-[#393939] rounded-2xl flex justify-between items-center p-3">
          <div className="flex gap-1">
            <BuildingOffice2Icon className="w-5 h-5 text-white" />
            <p className="text-white">آگهی های مشابه</p>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#8CFF45]">  مشاهده همه</p>
            <ChevronLeftIcon className="w-5 h-5 text-[#8CFF45]" />
          </div>
        </div>
        <div className="relative py-6">
          <SliderAdvertise Houses={Houses}/>
        </div>
      </div>
  )
}

export default AdvertDetail
