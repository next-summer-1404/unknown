import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useBookingStore } from "@/store/useBookingStore";
import { postBooking } from "@/utils/service/api/postBooking";


const PaymentConfirmationSection = () => {
  const router = useRouter();
  const params = useParams();
const bookingStore = useBookingStore();
  const dataToSend = {
  houseId: Number(bookingStore.houseId),
  reservedDates: [
    bookingStore.reservedDates[0],
    bookingStore.reservedDates[1],
  ] as [string, string],
  traveler_details: bookingStore.travelers,
  sharedEmail: bookingStore.sharedEmail,
  sharedMobile: bookingStore.sharedMobile,
};

  const handleConfirm = async () => {
    try {
      const reserve = await postBooking(dataToSend)
      // console.log(dateToSend)
    } catch (error) {
      
    }
router.push(`/houseReserve/${params.id}/finalReserve?step=3`)
    // router.push(`/houseReserve/${params.id}/finalReserve?step=2`);
  };

  return (
    <div className="w-full flex px-4 py-4 rounded-2xl  justify-between items-center border-2 border-dashed border-[#AAAAAA]">
      {/* قیمت بلیط */}
      <div className="flex  gap-2 text-[#8CFF45] text-sm items-center">
        <span className="text-[#fff] text-lg">قیمت بلیط:</span>
        <span className="font-semibold text-[#8CFF45]">
          ۱.۵۰۰.۰۰۰&nbsp;تومان
        </span>
      </div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() =>
            router.push(`/houseReserve/${params.id}/finalReserve?step=1`)
          }
          className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-xl text-sm hover:bg-[#8CFF45]/10 transition cursor-pointer"
        >
          <span className="rotate-180">{">"}</span>
          <span> مرحله قبل</span>
        </button>

        <button
          type="button"
          // onClick={() =>
          //   router.push(`/houseReserve/${params.id}/finalReserve?step=3`)
          // }
          onClick={handleConfirm}
          className="flex items-center gap-2 text-[#8CFF45] border border-[#8CFF45] px-4 py-2 rounded-xl text-sm hover:bg-[#8CFF45]/10 transition cursor-pointer"
        >
          <span> پرداخت آنلاین</span>
          <span className="rotate-180">{"<"}</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmationSection;
