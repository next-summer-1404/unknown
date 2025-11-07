import DashboardBuyer from '@/components/dashboardBuyer'
import { FinanceTypes } from '@/types/FinanceTypes'
import { getDashboardFinance } from '@/utils/service/api/getDashboardFinance'
import React from 'react'

const BuyerPage =async () => {
  // test
  // const Finance :FinanceTypes =await getDashboardFinance()
    // console.log(Finance)
  return (
    <div>
      <DashboardBuyer/>
    </div>
  )
}

export default BuyerPage
