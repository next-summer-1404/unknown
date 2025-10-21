import FirstFinalReserve from "@/components/detailHouse/finalReserve/FirstFinalReserve";
import SecondFinalReserve from "@/components/detailHouse/finalReserve/SecondFinalReserve";
import ThirdFinalReserve from "@/components/detailHouse/finalReserve/ThirdFinalReserve";

export default function FinalReservePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { step?: string };
}) {
  const stepNumber = Number(searchParams.step ?? 1);

  switch (stepNumber) {
    case 1:
      return <FirstFinalReserve />;
    case 2:
      return <SecondFinalReserve />;
    case 3:
      return <ThirdFinalReserve />;
    default:
      return <p>مرحله ناشناخته است</p>;
  }
}
