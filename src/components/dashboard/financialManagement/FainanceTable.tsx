"use client";
import React from "react";
import DynamicTable from "../../common/table/DynamicTable";

const FainanceTable = () => {
  const columns = [
    { key: "date", label: "تاریخ" },
    { key: "tracking", label: "شماره پیگیری" },
    { key: "amount", label: "مبلغ" },
    { key: "status", label: "وضعیت پرداخت" },
    { key: "type", label: "نوع تراکنش" },
    { key: "action", label: "مشاهده رسید" },
  ];

  const rows = [
    {
      key: 1,
      date: "۱۴۰۱ / مرداد / ۱۳",
      tracking: "۱۳۴۵۷۸۹۱۳۴۵۷۸۹",
      amount: "۱۲۵۰۰۰۰",
      status: "تایید شده",
      type: "شارژ کیف پول",
      action: (
        <button className="text-[#8CFF45] hover:text-[#aaff6b] font-semibold transition">
          مشاهده رسید
        </button>
      ),
    },
    {
      key: 2,
      date: "۱۴۰۱ / مرداد / ۱۳",
      tracking: "۱۳۴۵۷۸۹۱۳۴۵۷۸۹",
      amount: "۱۲۵۰۰۰۰",
      status: "تایید نشده",
      type: "رزرو",
      action: (
        <button className="text-[#8CFF45] hover:text-[#aaff6b] font-semibold transition">
          مشاهده رسید
        </button>
      ),
    },
    {
      key: 3,
      date: "۱۴۰۱ / مرداد / ۱۳",
      tracking: "۱۳۴۵۷۸۹۱۳۴۵۷۸۹",
      amount: "۱۲۵۰۰۰۰",
      status: "تایید شده",
      type: "شارژ کیف پول",
      action: (
        <button className="text-[#8CFF45] hover:text-[#aaff6b] font-semibold transition">
          مشاهده رسید
        </button>
      ),
    },
    {
      key: 4,
      date: "۱۴۰۱ / مرداد / ۱۳",
      tracking: "۱۳۴۵۷۸۹۱۳۴۵۷۸۹",
      amount: "۱۲۵۰۰۰۰",
      status: "تایید نشده",
      type: "رزرو",
      action: (
        <button className="text-[#8CFF45] hover:text-[#aaff6b] font-semibold transition">
          مشاهده رسید
        </button>
      ),
    },
    {
      key: 5,
      date: "۱۴۰۱ / مرداد / ۱۳",
      tracking: "۱۳۴۵۷۸۹۱۳۴۵۷۸۹",
      amount: "۱۲۵۰۰۰۰",
      status: "تایید شده",
      type: "شارژ کیف پول",
      action: (
        <button className="text-[#8CFF45] hover:text-[#aaff6b] font-semibold transition">
          مشاهده رسید
        </button>
      ),
    },
  ];

  return (
    <div className="text-right">
      <DynamicTable
        title="لیست تراکنش‌های مالی"
        columns={columns}
        rows={rows}
        withActions={false}
      />
    </div>
  );
};

export default FainanceTable;
