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
  Location?: {
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
const MapInRent: React.FC<MapProps> = ({ Location, zoom, center }) => {
  const [position, setPosition] = useState<[number, number] | null>(
    Location ? [Location.lat, Location.lng] : null
  );
  useEffect(() => {
    if (Location) {
      setPosition([Location.lat, Location.lng]);
    } else {
      setPosition(null);
    }
  }, [Location]);


  // console.log(position, "aaaaa")
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
      // key={center.toString()}
      key={Location ? Location.lat + Location.lng : "default"}
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
        center={Location ? [Location.lat, Location.lng] : center}
      />
    </MapContainer>
  );
};

export default MapInRent;
