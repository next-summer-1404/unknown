"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import TopFilter from "./topFilter/TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "../house/MapReserve";
import CardReserve from "../house/CardReserve";
import toast from "react-hot-toast";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";

const BaseReserve = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);
  const [number, setNumber] = useState();
  console.log(houses);
  console.log(number);

  const GetHouses = async () => {
    try {
      const result = await getHouses({ page: 1, limit: 100 });
      setHouses(result.houses);
      setNumber(result.totalCount);
    } catch (error) {
      console.error(error);
      toast.error("خطا در بارگذاری  ");
    }
  };
  useEffect(() => {
    GetHouses();
  }, []);

  return (
    <div className="w-full h-auto border border-amber-300">
      <TopFilter />

      <div className="w-11/12 h-[1080px] m-auto mt-5 bg-[#2A2A2A] p-4 rounded-xl flex gap-5 ">
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
