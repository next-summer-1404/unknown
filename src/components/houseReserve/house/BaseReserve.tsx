"use client";

import TopFilter from "./topFilter/TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "../house/MapReserve";
import CardReserve from "../house/CardReserve";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const BaseReserve = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const destination = searchParams.get("destination") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouses();
        setHouses(data.houses ?? []);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      }
    };
    fetchData();
  }, []);

  const filteredHouses = useMemo(() => {
    return houses.filter((h) => {
      const titleMatch = query
        ? h.title?.toLowerCase().includes(query.toLowerCase())
        : true;

      const destMatch = destination
         
         ? h.address?.toLowerCase().includes(destination.toLowerCase()) ||
          h.tags?.some((t) =>
            t.toLowerCase().includes(destination.toLowerCase())
          )
        : true;

      return titleMatch && destMatch;
    });
  }, [houses, query, destination]);

  return (
    <div className="w-full h-auto">
      <TopFilter />

      <div className="w-11/12 h-[1080px] m-auto mt-5 mb-30 bg-[#2A2A2A] p-4 rounded-xl flex gap-5">
        {/* لیست */}
        <div className="w-3/5 overflow-y-auto flex flex-col gap-5">
          <BottomFilter />
          {filteredHouses.length ? (
            filteredHouses.map((house) => (
              <CardReserve key={house.id} house={house} />
            ))
          ) : (
            <p className="text-gray-400 text-center mt-10">
              هیچ نتیجه‌ای یافت نشد.
            </p>
          )}
        </div>

        {/* نقشه */}
        <MapReserve />
      </div>
    </div>
  );
};

export default BaseReserve;
