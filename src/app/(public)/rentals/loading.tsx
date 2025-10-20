'use client';
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0e0e0e] text-white">
      <Spinner color="success" />
    </div>
  );
}
