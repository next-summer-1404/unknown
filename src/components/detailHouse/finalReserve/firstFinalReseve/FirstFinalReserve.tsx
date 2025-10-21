import React from "react";
import ContainFirstFinal from "./ContainFirstFinal";
import PassengerFirstFinal from "./PassengerFirstFinal";
import TicketFirstFinal from "./TicketFirstFinal";

const FirstFinalReserve = () => {
  return (
    <div className="w-full h-auto mb-60">
      <ContainFirstFinal />
      <PassengerFirstFinal />
      <TicketFirstFinal/>
    </div>
  );
};

export default FirstFinalReserve;
