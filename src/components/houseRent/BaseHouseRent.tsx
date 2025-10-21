'use client'
import React, { useEffect, useState } from "react";
import BaseTopFilter from "./topFilter/BaseTopFilter";
import BottomFilter from "./bottomFilter.tsx/BottomFilter";
import CardRent from "./cardReserve/CardRent";
import { IHouses } from "@/types/IHouses";
import { getRentHouse } from "@/utils/service/api/getRentHouse";

const BaseHouseRent = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRentHouse();
        setHouses(data.houses ?? []);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#232323] py-8">
      <BaseTopFilter />
      <BottomFilter />

      <div className="w-full px-13 pt-5 flex justify-between flex-wrap gap-6  mb-20">
        {houses.length > 0 ? (
          houses.map((house) => (
            <CardRent key={house.id} house={house} />
          ))
        ) : (
          <p className="text-gray-400 text-sm mx-auto">در حال بارگذاری...</p>
        )}
      </div>
    </div>
  );
};

export default BaseHouseRent;
