"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IHouses } from "@/types/IHouses";

const MyMap = dynamic<{ positions: [number, number][]; zoom: number }>(
  () => import("./Map"),
  { ssr: false }
);

interface MapReserveProps {
  houses: IHouses[];
}

const MapReserve: React.FC<MapReserveProps> = ({ houses }) => {
  const positions: [number, number][] = houses
    .filter(h => h.location?.lat && h.location?.lng)
    .map(h => [h.location.lat, h.location.lng]);

  const zoom = 11;

  return (
    <div className="w-2/5 h-[650px] border border-green-300 rounded-xl overflow-hidden">
      <MyMap positions={positions} zoom={zoom} />
    </div>
  );
};

export default MapReserve;
