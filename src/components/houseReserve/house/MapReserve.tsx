"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IHouses } from "@/types/IHouses";


const MyMap = dynamic<{
  zoom: number;
  center: [number, number];
  selectedHouse?: { lat: number; lng: number } | null;
}>(
  () => import("./Map"),
  { ssr: false }
);

interface MapReserveProps {
  selectedHouse: IHouses | null;
}

const MapReserve: React.FC<MapReserveProps> = ({ selectedHouse }) => {

  const zoom = selectedHouse ? 14 : 11;
  const center: [number, number] = selectedHouse?.location
    ? [selectedHouse.location.lat, selectedHouse.location.lng]
    : [35.6892, 51.3890];

// console.log("Map rendered", selectedHouse.location)

  return (
    <div className="w-2/5 h-[650px] border border-green-300 rounded-xl overflow-hidden">
      <MyMap  selectedHouse={selectedHouse ? selectedHouse.location : null}  zoom={zoom} center={center}/>
    </div>
  );
};

export default MapReserve;
