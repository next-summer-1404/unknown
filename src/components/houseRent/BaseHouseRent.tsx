"use client";
import React, { useEffect, useMemo, useState } from "react";
import BaseTopFilter from "./topFilter/BaseTopFilter";
import BottomFilter from "./bottomFilter.tsx/BottomFilter";
import CardRent from "./cardReserve/CardRent";
import { IHouses } from "@/types/IHouses";
import { getRentHouse } from "@/utils/service/api/getRentHouse";
import { useSearchParams } from "next/navigation";

const BaseHouseRent = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const currentCity = searchParams.get("city") || "";
  const selectedFacility = searchParams.get("Facility") || "";
  const property = searchParams.get("property_type") || "";
  const sort = searchParams.get("sort") || "";

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

  const filteredHouses = useMemo(() => {
    console.log({ query, currentCity, property, selectedFacility, houses });

    let result = houses.filter((h) => {
      const queryMatch = query
        ? h.title?.toLowerCase().includes(query.toLowerCase())
        : true;

      const cityMatch = currentCity
        ? h.address?.toLowerCase().includes(currentCity.toLowerCase()) ||
          h.tags?.some((t) =>
            t.toLowerCase().includes(currentCity.toLowerCase())
          )
        : true;

      const typeMatch = property
        ? h.categories?.name &&
          h.categories.name.toLowerCase() === property.toLowerCase()
        : true;

      const facilityMatch = selectedFacility
        ? (selectedFacility === "پارکینگ" && h.parking > 0) ||
          (selectedFacility === "تعداد اتاق" && h.rooms > 0)
        : true;

      return queryMatch && cityMatch && typeMatch && facilityMatch;
    });

    switch (sort) {
      case "newest":
        result = result.sort(
          (a, b) =>
            new Date(b.last_updated).getTime() -
            new Date(a.last_updated).getTime()
        );
        break;
      case "oldest":
        result = result.sort(
          (a, b) =>
            new Date(a.last_updated).getTime() -
            new Date(b.last_updated).getTime()
        );
        break;
      case "price_asc":
        result = result.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price_desc":
        result = result.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      default:
        break;
    }

    return result;
  }, [houses, query, currentCity, property, selectedFacility, sort]);

  const totalCount = filteredHouses.length;

  return (
    <div className="w-full bg-[#232323] py-8">
      <BaseTopFilter totalCount={totalCount} />
      <BottomFilter />

      <div className="w-full px-13 pt-5 flex justify-between flex-wrap gap-6 mb-20">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <CardRent key={house.id} house={house} />
          ))
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
