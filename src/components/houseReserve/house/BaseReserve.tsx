"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import TopFilter from "./topFilter/TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "../house/MapReserve";
import CardReserve from "../house/CardReserve";
import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import { getAllHouses } from "@/utils/service/api/houseReserve/getAllHouses";
import toast from "react-hot-toast";

const BaseReserve = () => {
  const [House, setHouse] = useState<HouseReserveTypes[]>([]);
  const [totalCount, setTotalCount] = useState(0);

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

  const houseHandle = async () => {
    try {
      const res = await getAllHouses();
      setHouse(res.houses);
      // totalCount;
      setTotalCount(res.totalCount);
    } catch (error) {
      toast.error("خطا در بارگذاری  ");
    }
  };
  useEffect(() => {
    houseHandle();
  }, []);

  return (
    <div className="w-full h-auto border border-amber-300">
      <TopFilter />
      <div className="w-11/12 m-auto h-[1080px] mt-5 bg-[#2A2A2A] p-4 rounded-xl  flex gap-5">
        <div className="w-3/5 h-auto">
          <BottomFilter />
          {House.map((house) => <CardReserve key={house.id} house={house} />)}
        </div>
        {/*map*/}
        <MapReserve />
      </div>
    </div>
  );
};

export default BaseReserve;
