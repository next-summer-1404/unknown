import React from 'react'
import BaseTopFilter from './topFilter/BaseTopFilter';
import BottomFilter from './bottomFilter.tsx/BottomFilter';
import CardReserve from './cardReserve/CardReserve';


const BaseHouseRent = () => {
  return (
    <div className="w-full bg-[#232323] border border-[#232323] py-8">
      <BaseTopFilter/>
      <BottomFilter/>
      <CardReserve/>
    </div>
  );
};

export default BaseHouseRent;
