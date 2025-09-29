"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" flex w-11/12 h-12 mx-auto mt-4 rounded-2xl bg-[#363636] shadow-[inset_0_4px_8px_rgba(255,255,255,0.16),0_4px_12px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2.5">
        <div className="w-20 h-9 bg-[#4A4A4A] rounded-xl  mr-2"></div>
        <div className="w-1 h-5 bg-[#4A4A4A] rounded-xl"></div>
      </div>

    <nav className="flex text-[#AAAAAA]">
      <Link
          className=" px-5 py-2.5 text-lg text-center"
          href="/"
        >رزرو سریع</Link>
        <Link
          className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors
                  ${pathname === "/" ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}
          href="/"
        >رهن و اجاره
        <svg
        className="w-4 h-4 mr-2.5"   
        fill="none"
        stroke="currentColor"          // take its color from subject
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg></Link>
        <Link
          className="px-5 py-2.5 text-lg text-center"
          href="/about"
        >درباره دلتا</Link>
        <Link
          className="px-5 py-2.5 text-lg text-center"
          href="/blogs"
        >مقالات ما</Link>
        <Link
          className="px-5 py-2.5 text-lg text-center"
          href="/contactUs"
        >تماس با ما</Link>
    </nav>

      <nav
        className="
    flex flex-col md:flex-row 
    gap-2 md:gap-1.5 w-full md:w-fit
    justify-center md:justify-start
  "
      >
        <Link
          className="relative bg-[#F0F0F0] rounded-3xl px-5 py-2.5 text-lg text-center"
          href="/"
        >
          {pathname === "/" && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-xl">
              •
            </span>
          )}
          خانه
        </Link>
       
        
       
        
      </nav>

      <nav
        className="
    flex flex-col md:flex-row 
    gap-2 md:gap-1.5 w-full md:w-fit
    justify-center md:justify-end items-center
  "
      >
        <Link
          className="bg-[#7575FE] text-white rounded-3xl px-5 py-2.5 text-lg font-bold text-center"
          href="/"
        >
          ورود
        </Link>
        <Link
          className="bg-[#7575FE] text-white rounded-3xl px-5 py-2.5 text-lg font-bold text-center"
          href="/"
        >
          ثبت نام
        </Link>
      </nav>
    </header>
  );
};

export default Header;
