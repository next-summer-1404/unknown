"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import TopFilter from "./topFilter/TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "../house/MapReserve";
import CardReserve from "../house/CardReserve";
import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import { getAllHouses } from "@/utils/service/api/houseReserve/getAllHouses";
import toast from "react-hot-toast";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";

const BaseReserve = () => {
  // const [House, setHouse] = useState<HouseReserveTypes[]>([]);
  // const [totalCount, setTotalCount] = useState(0);
  const [houses, setHouses] = useState<IHouses[]>([]);
    const [number, setNumber] = useState();
 console.log(houses);
   console.log(number);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { houses, totalCount } = await getAllHouses();
  //       setHouses(houses);
  //       setTotalCount(totalCount);
  //     } catch (error) {
  //       toast.error("خطا در بارگذاری اطلاعات خانه‌ها");
  //     }
  //   })();
  // }, []);

  // const houseHandle = async () => {
  //   try {
  //     const res = await getAllHouses();
  //     setHouse(res.houses);
  //     // totalCount;
  //     setTotalCount(res.totalCount);
  //   } catch (error) {
  //     toast.error("خطا در بارگذاری  ");
  //   }
  // };
   const GetHouses = async () => {
      // setLoading(true);
      try {
        const result = await getHouses({ page: 1, limit: 100 });
        setHouses(result.houses);
        setNumber(result.totalCount)
      } catch (error) {
        console.error(error);
        // setError(String(error));
        toast.error("خطا در بارگذاری  ");
      } 
    };
  useEffect(() => {
    GetHouses();
  }, []);

  return (
    <div className="w-full h-auto border border-amber-300">
      <TopFilter />
      <div className="w-11/12 m-auto h-[1080px] mt-5 bg-[#2A2A2A] p-4 rounded-xl  flex gap-5">
        <div className="w-3/5 h-auto">
          <BottomFilter />
          {houses.map((house) => <CardReserve key={house.id} house={house} />)}
        </div>
        {/*map*/}
        <MapReserve />
      </div>
    </div>
  );
};

export default BaseReserve;
