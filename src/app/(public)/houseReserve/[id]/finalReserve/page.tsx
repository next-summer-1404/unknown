"use client";

import { useParams, useSearchParams } from "next/navigation";
import FirstStep from "@/components/HouseReserveDetail/ReserveAndPayment/FirstStep/Index";
import StepIndicator from "@/components/HouseReserveDetail/ReserveAndPayment/StepIndicator";
import SecondStep from "@/components/HouseReserveDetail/ReserveAndPayment/SecondStep/Index";
import ThirdFinalReserve from "@/components/HouseReserveDetail/ReserveAndPayment/ThirdStep/ThirdFinalReserve";

export default function FinalReservePage() {
 const params = useParams(); // unwrap params
  const searchParams = useSearchParams();
  const stepNumber = Number(searchParams.get("step") ?? 1);
  const id = params?.id;

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
