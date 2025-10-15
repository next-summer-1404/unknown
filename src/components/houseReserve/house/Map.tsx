"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useState } from "react";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapProps {
  zoom: number;
  center: [number, number];
  selectedHouse?: {
    lat: number;
    lng: number;
  } | null;
}

const RecenterMap = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);
  return null;
};
const Map: React.FC<MapProps> = ({ selectedHouse, zoom, center }) => {
  const [position, setPosition] = useState<[number, number] | null>(
    selectedHouse ? [selectedHouse.lat, selectedHouse.lng] : null
  );
  useEffect(() => {
    if (selectedHouse) {
      setPosition([selectedHouse.lat, selectedHouse.lng]);
    } else {
      setPosition(null);
    }
  }, [selectedHouse]);


  // console.log(position, "aaaaa")
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
      // key={center.toString()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {position && (
        <Marker position={position}>
          <Tooltip>خانه انتخاب شده</Tooltip>
        </Marker>
      )}

      <RecenterMap
        center={selectedHouse ? [selectedHouse.lat, selectedHouse.lng] : center}
      />
    </MapContainer>
  );
};

export default Map;
