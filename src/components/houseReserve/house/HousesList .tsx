"use client";

import React, { useEffect, useState } from "react";
import { getAllHouses } from "../../../utils/service/api/houseReserve/getAllHouses";
import CardReserve from "@/components/houseReserve/house/CardReserve";
import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import toast from "react-hot-toast";

const HousesList = () => {
  const [houses, setHouses] = useState<HouseReserveTypes[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllHouses();
        setHouses(data);
      } catch (error) {
        toast.error("خطا در بارگذاری لیست خانه‌ها");
      }
    })();
  }, []);

  if (houses.length === 0)
    return <p className="text-white text-center">در حال بارگذاری...</p>;

  return (
    <div className="w-full flex flex-col gap-10">
      {houses.map((house) => (
        <CardReserve key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HousesList;
