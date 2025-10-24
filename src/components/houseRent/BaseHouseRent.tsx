"use client";
import React, { useEffect, useState } from "react";
import BaseTopFilter from "./topFilter/BaseTopFilter";
import BottomFilter from "./bottomFilter.tsx/BottomFilter";
import CardRent from "./cardReserve/CardRent";
import { IHouses } from "@/types/IHouses";
import { getRentHouse } from "@/utils/service/api/getRentHouse";
import { useSearchParams } from "next/navigation";

const BaseHouseRent = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const searchParams = useSearchParams();

  const minRent = searchParams.get("minRent");
  const maxRent = searchParams.get("maxRent");
  const minMortgage = searchParams.get("minMortgage");
  const maxMortgage = searchParams.get("maxMortgage");
  const sort = searchParams.get("sort");
  const order = searchParams.get("order"); 
  const location = searchParams.get("location");
  const transactionType = searchParams.get("transactionType");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          
          transactionType:
            transactionType?.includes(",")
              ? transactionType
              : transactionType || undefined,
          minRent: minRent ? Number(minRent) : undefined,
          maxRent: maxRent ? Number(maxRent) : undefined,
          minMortgage: minMortgage ? Number(minMortgage) : undefined,
          maxMortgage: maxMortgage ? Number(maxMortgage) : undefined,
          sort: sort || undefined,
          order: order || undefined, 
          location: location || undefined,
          page: 1,
          limit: 20,
        };
        // console.log("ببببببببب", params);


        const data = await getRentHouse(params);
        setHouses(data.houses ?? []);
        setTotalCount(data.totalCount ?? 0);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      }
    };

    fetchData();
  }, [
    transactionType,
    minRent,
    maxRent,
    minMortgage,
    maxMortgage,
    sort,
    order,
    location,
  ]);

  return (
    <div className="w-full bg-[#0e0e0e] py-8 text-white">
      <BaseTopFilter totalCount={totalCount} />
      <BottomFilter />
      <div className="w-full px-13 pt-5 flex justify-between flex-wrap gap-6 mb-20">
        {houses.length > 0 ? (
          houses.map((house) => <CardRent key={house.id} house={house} />)
        ) : (
          <p className="text-gray-400 text-sm mx-auto mt-10">
            هیچ نتیجه‌ای یافت نشد.
          </p>
        )}
      </div>
    </div>
  );
};

export default BaseHouseRent;
