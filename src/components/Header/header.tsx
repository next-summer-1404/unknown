"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import megaphone from "../../assets/images/megaphone1.png";
import user1 from "../../assets/images/user1.png";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" flex items-center w-11/12 h-12 mx-auto mt-4 px-2 rounded-2xl bg-[#363636] shadow-[inset_0_4px_8px_rgba(255,255,255,0.16),0_4px_12px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2.5">
        <div className="w-20 h-9 bg-[#4A4A4A] rounded-xl"></div>
        <div className="w-1 h-5 bg-[#4A4A4A] rounded-xl"></div>
      </div>

      <nav className="flex text-[#AAAAAA]">
        <div className="relative">
          {" "}
          <Link
            className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors 
                  ${pathname === "/" ? "text-[#8CFF45]" : ""}`}
            href="/"
          >
            رزرو سریع
            <svg
              className="w-4 h-4 mr-2.5"
              fill="none"
              stroke="currentColor" // take its color from subject
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          {pathname === "/" && (
            <span className="absolute w-3/4 right-4 bottom-0 h-[4px] bg-[#8CFF45] rounded-t-md" />
          )}
        </div>

        <div className="relative">
          {" "}
          <Link
            className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors 
                  ${pathname === "/rentals" ? "text-[#8CFF45]" : ""}`}
            href="/rentals"
          >
            رهن و اجاره
            <svg
              className="w-4 h-4 mr-2.5"
              fill="none"
              stroke="currentColor" // take its color from subject
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          {pathname === "/rentals" && (
            <span className="absolute w-3/4 right-4 bottom-0 h-[4px] bg-[#8CFF45] rounded-t-md" />
          )}
        </div>

        <div className="relative">
          {" "}
          <Link
            className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors 
                  ${pathname === "/about" ? "text-[#8CFF45]" : ""}`}
            href="/about"
          >
            درباره دلتا
          </Link>
          {pathname === "/about" && (
            <span className="absolute w-2/3 right-4 bottom-0 h-[4px] bg-[#8CFF45] rounded-t-md" />
          )}
        </div>
        <div className="relative">
          {" "}
          <Link
            className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors 
                  ${pathname === "/blogs" ? "text-[#8CFF45]" : ""}`}
            href="/blogs"
          >
            مقالات ما
          </Link>
          {pathname === "/blogs" && (
            <span className="absolute w-2/3 right-4 bottom-0 h-[4px] bg-[#8CFF45] rounded-t-md" />
          )}
        </div>
        <div className="relative">
          {" "}
          <Link
            className={`flex items-center px-5 py-2.5 text-lg text-center transition-colors 
                  ${pathname === "/contactUs" ? "text-[#8CFF45]" : ""}`}
            href="/contactUs"
          >
            تماس با ما
          </Link>
          {pathname === "/contactUs" && (
            <span className="absolute w-2/3 right-4 bottom-0 h-[4px] bg-[#8CFF45] rounded-t-md" />
          )}
        </div>
      </nav>

      <div className="flex items-center rounded-xl h-3/4 gap-2 px-3 py-0.5 bg-[#7569FF] drop-shadow-[0_4px_6px_rgba(117,105,255,0.2)] shadow-[inset_0_4px_6px_rgba(0,0,0,0.04)]">
        <Image src={megaphone} alt="!!" width={16} height={16} />
        <h3 className="text-lg font-bold text-white">فروشنده شو!</h3>
      </div>

      <nav className="flex items-center gap-1.5 mr-auto ml-3">
        <Image src={user1} alt="!!" width={16} height={16} />
        <Link href="/register" className=" text-white text-lg font-bold text-center" >
          ورود/ثبت نام
        </Link>
      </nav>
    </header>
    

  );
};

export default Header;
