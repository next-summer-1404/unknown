"use client";

import FirstStep from "@/components/HouseReserveDetail/finalReserve/FirstStep/Index";
import StepIndicator from "@/components/HouseReserveDetail/finalReserve/StepIndicator";
import SecondStep from "@/components/HouseReserveDetail/finalReserve/SecondStep/Index";
import ThirdFinalReserve from "@/components/HouseReserveDetail/finalReserve/ThirdStep/ThirdFinalReserve";

export default function FinalReservePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { step?: string };
}) {
  const stepNumber = Number(searchParams.step ?? 1);
  const { id } = params;

  return (
    <div className="flex flex-col gap-6">
      <StepIndicator />

      {stepNumber === 1 && <FirstStep id={id} />}
      {stepNumber === 2 && <SecondStep />}
      {stepNumber === 3 && <ThirdFinalReserve />}

      {![1, 2, 3].includes(stepNumber) && (
        <p className="text-center text-red-400">مرحله ناشناخته است</p>
      )}
    </div>
  );
}
