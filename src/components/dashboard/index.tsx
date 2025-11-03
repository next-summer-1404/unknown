"use client";
import React, { FC, useState } from "react";
import SideMain from "./main/SideMain";
import DashboardHeader from "./main/DashboardHeader";
import HeroDashboard from "./main/HeroDashboard";
import ContainDashboard from "./main/ContainDashboard";
import ReservationSection from "./main/ReservationSection";
import PropertyManagement from "./propertyManagement/PropertyManagement";
import BookingManagement from "./bookingManagement/BookingManagement";
import FinancialManagement from "./financialManagement/FinancialManagement";
import { FinanceTypes } from "@/types/FinanceTypes";

interface SellerDashboardProps {
  Finance: FinanceTypes;
}

const SellerDashboard:FC<SellerDashboardProps> = ({Finance}) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="h-[1189px] px-10 py-20 flex gap-5">
      <SideMain onSectionChange={setActiveSection} />

      <div className="w-full flex flex-col gap-8">
        <DashboardHeader />

        {activeSection === "dashboard" && (
          <>
            <HeroDashboard />
            <ContainDashboard />
            <ReservationSection />
          </>
        )}

        {activeSection === "property" && <PropertyManagement />}
        {activeSection === "reservation" && <BookingManagement />}
        {activeSection === "finance" && <FinancialManagement Finance={Finance}/>}
      </div>
    </div>
  );
};

export default SellerDashboard;
