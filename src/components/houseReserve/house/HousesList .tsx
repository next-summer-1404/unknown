"use client";
import React, { useEffect, useState } from "react";
import CardReserve from "../../../components/houseReserve/house/CardReserve";
import toast from "react-hot-toast";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";

const HousesList = () => {
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
    <div className="w-full flex flex-col gap-10">
      <p className="text-white text-lg">تعداد کل خانه‌ها: {number}</p>
      {houses.map((house) => (
        <CardReserve key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HousesList;
