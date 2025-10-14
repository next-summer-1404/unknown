"use client";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapProps {
  positions: [number, number][];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ positions, zoom }) => {
  const defaultCenter: [number, number] = positions[0] || [35.6892, 51.3890];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((pos, i) => (
        <Marker key={i} position={pos}>
          <Tooltip>خانه شماره {i + 1}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
