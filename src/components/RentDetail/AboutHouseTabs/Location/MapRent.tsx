"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IHouses } from "@/types/IHouses";

const MyMap = dynamic<{
  zoom: number;
  center: [number, number];
  selectedHouse?: { lat: number; lng: number } | null;
}>(() => import("./MapInRent"), { ssr: false });

interface MapReserveProps {
  selectedHouse: IHouses | null;
}

const MapRent: React.FC<MapReserveProps> = ({ selectedHouse }) => {
  const zoom = selectedHouse ? 17 : 15;
  const center: [number, number] = selectedHouse?.location
    ? [selectedHouse.location.lat, selectedHouse.location.lng]
    : [35.6892, 51.389];

  // console.log("Map rendered", selectedHouse.location)

  return (
    <div className="w-2/5 h-[400px]  rounded-xl overflow-hidden">
      <MyMap
        selectedHouse={selectedHouse ? selectedHouse.location : null}
        zoom={zoom}
        center={center}
      />
    </div>
  );
};

export default MapRent;
