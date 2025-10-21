"use client";

import FirstFinalReserve from "@/components/detailHouse/finalReserve/firstFinalReseve/FirstFinalReserve";
import TopFirstFinal from "@/components/detailHouse/finalReserve/firstFinalReseve/TopFirstFinal";
import SecondFinalReserve from "@/components/detailHouse/finalReserve/secondFinalReserve/SecondFinalReserve";
import ThirdFinalReserve from "@/components/detailHouse/finalReserve/ThirdFinalReserve";

export default function FinalReservePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { step?: string };
}) {
  const stepNumber = Number(searchParams.step ?? 1);

  return (
    <div className="flex flex-col gap-6">
      <TopFirstFinal />

      {stepNumber === 1 && <FirstFinalReserve />}
      {stepNumber === 2 && <SecondFinalReserve />}
      {stepNumber === 3 && <ThirdFinalReserve />}

      {![1, 2, 3].includes(stepNumber) && (
        <p className="text-center text-red-400">مرحله ناشناخته است</p>
      )}
    </div>
  );
}
