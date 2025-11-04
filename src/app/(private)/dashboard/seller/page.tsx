import SellerDashboard from '@/components/dashboard'
import { FinanceTypes } from '@/types/FinanceTypes'
import { getDashboardFinance } from '@/utils/service/api/getDashboardFinance'
import React from 'react'

const SellerPage = async () => {
  const Finance :FinanceTypes =await getDashboardFinance()
  console.log(Finance);
  return (
    <div>
      <SellerDashboard Finance={Finance}/>
    </div>
  )
}

export default SellerPage

