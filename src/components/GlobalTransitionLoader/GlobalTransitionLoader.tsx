"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalTransitionLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 700); // مدت نمایش (می‌تونی کمتر یا بیشترش کنی)
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0e0e0e]/95 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 transition-all duration-300">
      {/* حلقه لودینگ */}
      <div className="w-14 h-14 border-4 border-[#8CFF45] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[#8CFF45] text-lg tracking-widest animate-pulse">
        در حال بارگذاری...
      </p>
    </div>
  );
}
