import { IHouses } from "@/types/IHouses";
import Slider from "./Slider";
import Image from "next/image";
import Change from "../../../../assets/images/auth1.png";
interface SliderProps {
  house: IHouses;
}
const Index = ({ house }: SliderProps) => {
  console.log(house);
  // بررسی موجود بودن عکس
  const displayPhotos =
    house.photos && house.photos.length > 0 ? house.photos : [Change];
  const photosToShow = displayPhotos.slice(0, 2);
  const remainingCount = displayPhotos.length - 2;

  return (
    <div className="flex-1 flex items-center justify-between">
      <div className="w-[61%] h-[358px] rounded-xl overflow-hidden bg-amber-200">
        {/* <Slider house={house}/> */}
      </div>
      <div className="w-[37%] h-full flex flex-col justify-between">
        {photosToShow.map((Item, index) => {
          const imageSrc =
            typeof Item === "string" && Item.trim() !== "" ? Item : Change;
          return (
            <div
              key={index}
              className="relative h-[168px] w-full bg-red-700 rounded-xl overflow-hidden"
            >
              <Image
                src={imageSrc}
                width={300}
                height={10}
                alt=""
                className="w-full h-full object-cover"
              />
              {index === 1 && remainingCount > 0 && (
                <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center text-white text-xl font-bold">
                  +{remainingCount} تصویر دیگر
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
