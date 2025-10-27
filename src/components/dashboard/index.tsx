"use client";
import React, { useState } from "react";
import SideMain from "./main/SideMain";
import DashboardHeader from "./main/DashboardHeader";
import HeroDashboard from "./main/HeroDashboard";
import ContainDashboard from "./main/ContainDashboard";
import ReservationSection from "./main/ReservationSection";
import PropertyManagement from "./propertyManagement/PropertyManagement";

const SellerDashboard = () => {
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
      </div>
    </div>
  );
};

export default SellerDashboard;
