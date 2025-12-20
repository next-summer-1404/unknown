"use client";
import TopFilter from "../topFilter/TopFilter";
import BottomFilter from "../bottomFilter/BottomFilter";
import MapReserve from "../MapSection/Index";
import CardReserve from "./CardReserve";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const BaseReserve = () => {
  const [houses, setHouses] = useState<IHouses[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<IHouses | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const destination = searchParams.get("destination") || "";
  const sort = searchParams.get("sort") || "";
  const facility = searchParams.get("facility") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

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
    let result = houses.filter((h) => {
      const titleMatch = query
        ? h.title?.toLowerCase().includes(query.toLowerCase())
        : true;

      const destMatch = destination
        ? h.address?.toLowerCase().includes(destination.toLowerCase()) ||
          h.tags?.some((t) =>
            t.toLowerCase().includes(destination.toLowerCase())
          )
        : true;
      {
        /*bottomFilter*/
      }
      const facilityMatch = facility
        ? (facility === "استخر دار" && h.yard_type?.includes("استخر")) ||
          (facility === "پارکینگ" && h.parking > 0) ||
          (facility === "تعداد اتاق" && h.rooms > 0) ||
          (facility === "تعداد سرویس بهداشتی" && h.bathrooms > 0)
        : true;

      const price = parseInt(h.price);
      const min = parseInt(minPrice);
      const max = parseInt(maxPrice);

      const priceMatch =
        (!minPrice && !maxPrice) ||
        (!isNaN(min) && !isNaN(max) && price >= min && price <= max) ||
        (!isNaN(min) && isNaN(max) && price >= min) ||
        (isNaN(min) && !isNaN(max) && price <= max);

      return titleMatch && destMatch && facilityMatch && priceMatch;
    });
    {
      /*sort*/
    }
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
        result = result.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;
      case "price_desc":
        result = result.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;
      default:
        break;
    }
    return result;
  }, [houses, query, destination, sort, facility, minPrice, maxPrice]);

  const totalCount = filteredHouses.length;

  return (
    <div className="w-full h-auto ">
      <TopFilter totalCount={totalCount} />

      <div className="w-11/12 h-[700px] m-auto mt-5 mb-30 bg-[#2A2A2A] p-4 rounded-xl flex gap-5">
      
        <div className="w-3/5  flex flex-col gap-5 pl-3">
          <BottomFilter />
          <div className="w-full overflow-y-auto ">
            {filteredHouses.length ? (
            filteredHouses.map((house) => (
              <CardReserve
                key={house.id}
                house={house}
                onSelect={() => setSelectedHouse(house)}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center mt-10">
              هیچ نتیجه‌ای یافت نشد.
            </p>
          )}
          </div>
        </div>
        {/* نقشه */}
        <MapReserve selectedHouse={selectedHouse} />
      </div>
    </div>
  );
};

export default BaseReserve;
