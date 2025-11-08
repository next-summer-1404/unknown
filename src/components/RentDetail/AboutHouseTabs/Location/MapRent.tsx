"use client";
import dynamic from "next/dynamic";
import React from "react";
import { ILocation } from "@/types/IHouses";

const MyMap = dynamic<{
  zoom: number;
  center: [number, number];
  Location?: { lat: number; lng: number } | null;
}>(() => import("./MapInRent"), { ssr: false });

interface MapReserveProps {
  Location: ILocation | null;
}

const MapRent: React.FC<MapReserveProps> = ({ Location }) => {
  const zoom = Location ? 17 : 15;
  const center: [number, number] = Location
    ? [Location.lat, Location.lng]
    : [35.6892, 51.389];

  // console.log("Map rendered", selectedHouse.location)

  return (
    <div className="w-[50%] h-[400px]  rounded-xl overflow-hidden">
      <MyMap
        Location={Location ? Location : null}
        zoom={zoom}
        center={center}
      />
    </div>
  );
};

export default MapRent;
