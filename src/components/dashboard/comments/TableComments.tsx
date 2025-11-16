"use client";

import React, { useEffect, useState } from "react";
import { getComments } from "@/utils/service/api/getComments";
import { IComments, ICommentsData } from "@/types/ICommentCardProps";

const TableComments: React.FC = () => {
  const [data, setData] = useState<ICommentsData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IComments = await getComments();
        setData(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (err) {
        console.error("خطا در دریافت نظرات:", err);
      }
    };
    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="bg-[#393939] mt-8 text-[#AAA] rounded-xl p-6 border border-[#333] shadow-md h-auto overflow-hidden">
      <div className="text-right text-[#AAA] text-base font-semibold mb-4">
        مدیریت نظرات کاربران
      </div>
      <div className="border-t border-dashed border-[#4B4B4B] mb-4" />

      <div className="flex flex-col gap-4">
        {displayedData.length === 0 ? (
          <div className="text-center text-[#777] py-12">هیچ نظری موجود نیست</div>
        ) : (
          displayedData.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg bg-[#2D2B2B] border border-[#444] p-4 hover:bg-[#2a2a2a] transition text-right"
            >
              <div className="mb-2 text-[#8CFF45] font-semibold break-words whitespace-normal">
                {comment.title || "—"}
              </div>

              <p className="text-[#CCC] text-sm whitespace-pre-wrap break-words leading-relaxed">
                {comment.caption || "—"}
              </p>

              <div className="flex flex-wrap justify-between items-center mt-3 text-xs text-[#AAA]">
                <span className="bg-[#333] text-[#8CFF45] px-3 py-1 rounded-full font-semibold">
                  {comment.rating ? `${comment.rating}/5` : "—"}
                </span>
                <span className="text-[#BBB]">
                  {comment.created_at
                    ? new Date(comment.created_at).toLocaleDateString("fa-IR")
                    : "—"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 text-[#AAA]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md border border-[#555] transition ${
                currentPage === page
                  ? "bg-[#8CFF45] text-[#0E0E0E] font-bold"
                  : "hover:bg-[#2a2a2a]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableComments;
