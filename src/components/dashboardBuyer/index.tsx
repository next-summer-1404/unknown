"use client";
import React, { useState } from "react";
import SideBuyer from "./mainBuyer/SideBuyer";
import BuyerHeader from "./mainBuyer/BuyerHeader";
import BuyerHero from "./mainBuyer/BuyerHero";
import BuyerContain from "./mainBuyer/BuyerContain";
import Payments from "./payments/Payments";
import BuyerFavorite from "./favorite/BuyerFavorite";
import Notifiction from "./notifiction/Notifiction";
import UseInformation from "./useInformation/UseInformation";
import ReservePart from "./mainBuyer/ReservePart";

const DashboardBuyer = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="h-[1189px] px-10 py-20 flex gap-5">
      <SideBuyer onSectionChange={setActiveSection} />

      <div className="w-full flex flex-col gap-8">
        <BuyerHeader />

        {activeSection === "dashboard" && (
          <>
            <BuyerHero />
            <BuyerContain />
            <ReservePart />
          </>
        )}

        {activeSection === "buyerPay" && <Payments />}
        {activeSection === "favorite" && <BuyerFavorite />}
        {activeSection === "notifications" && <Notifiction />}
        {activeSection === "userinfo" && <UseInformation />}
      </div>
    </div>
  );
};

export default DashboardBuyer;
