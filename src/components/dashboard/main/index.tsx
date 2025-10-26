import React from "react";
import SideMain from "./SideMain";
import DashboardHeader from "./DashboardHeader";
import HeroDashboard from "./HeroDashboard";
import ContainDashboard from "./ContainDashboard";
import MainTable from "../../common/table/MainTable";
import ReservationSection from "./ReservationSection";

const SellerDashboard = () => {
  return (
    <div className="h-[1189px] px-10 py-20 flex gap-5">
      <SideMain />
      <div className="w-full flex flex-col gap-8">
        <DashboardHeader />
        <HeroDashboard />
        <ContainDashboard/>
        <ReservationSection/>
      </div>
    </div>
  );
};

export default SellerDashboard;
