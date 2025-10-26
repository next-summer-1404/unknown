import React from "react";

type Column = {
  key: string;
  label: string;
};

type Row = {
  key: string;
  [key: string]: any;
};

type DashboardTableProps = {
  title?: string;
  columns: Column[];
  rows: Row[];
};

const MainTable: React.FC<DashboardTableProps> = ({ title, columns, rows }) => {
  return (
    <div className="h-auto bg-[#393939] rounded-2xl p-6">
      {title && (
        <>
          <div className="text-right text-[#E5E7EB] text-base font-bold mb-4">
            {title}
          </div>
          <hr className="border-t border-dashed border-[#4B4B4B] mb-4" />
        </>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-[#2F2F2F] ">
              {columns.map((col, index) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-[#BFBFBF] text-sm font-medium text-right whitespace-nowrap ${
                    index === 0
                      ? "rounded-tr-2xl"
                      : index === columns.length - 1
                      ? "rounded-tl-2xl"
                      : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.key}
                className="border-b border-[#4B4B4B] hover:bg-[#2f2f2f] transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="py-3 px-4 text-[#E5E7EB] text-sm whitespace-nowrap"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
