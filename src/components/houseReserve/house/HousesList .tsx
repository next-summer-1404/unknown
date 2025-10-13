"use client";
import React, { useEffect, useState } from "react";
import { getAllHouses } from "../../../utils/service/api/houseReserve/getAllHouses";
import CardReserve from "../../../components/houseReserve/house/CardReserve";
import { HouseReserveTypes } from "../../../types/HouseReserveTypes";
import toast from "react-hot-toast";

const HousesList = () => {
  const [House, setHouse] = useState<HouseReserveTypes[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const { houses, totalCount } = await getAllHouses();
  //         setHouses(houses);
  //         totalCount;
  //         console.log(totalCount,'kkkkkkk')
  //         setTotalCount(totalCount);
  //       } catch (error) {
  //         toast.error("خطا در بارگذاری لیست خانه‌ها");
  //       }
  //     })();
  //   }, []);

  const houseHandle = async () => {
    try {
      const res = await getAllHouses();
      setHouse(res.houses);
    //   console.log(res.houses,'ffffff')
    //   totalCount;
      setTotalCount(res.totalCount);
    //   console.log(res.totalCount,'ffffff')

    } catch (error) {
      toast.error("خطا در بارگذاری  ");
    }
  };
  useEffect(() => {
    houseHandle();
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <p className="text-white text-lg">تعداد کل خانه‌ها: {totalCount}</p>
      {House.map((house) => (
        <CardReserve key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HousesList;
