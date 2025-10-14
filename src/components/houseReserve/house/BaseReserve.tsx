import TopFilter from "./topFilter/TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "../house/MapReserve";
import CardReserve from "../house/CardReserve";
import toast from "react-hot-toast";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";

const BaseReserve = async () => {
 
  const Data = await getHouses();
    // console.log(Data.houses)
    const houses: IHouses[]  = Data.houses 

  return (
    <div className="w-full h-auto ">
      <TopFilter />

      <div className="w-11/12 h-[1080px] m-auto mt-5 mb-30 bg-[#2A2A2A] p-4 rounded-xl flex gap-5 ">
        <div className="w-3/5  overflow-y-auto flex flex-col gap-5">
          <BottomFilter />
          {houses.map((house) => (
            <CardReserve key={house.id} house={house} />
          ))}
        </div>
        {/*map*/}
        <MapReserve />
      </div>
    </div>
  );
};

export default BaseReserve;
