"use client";

import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { Slider } from "@heroui/react";
import { ICommentsData } from "@/types/ICommentsData";
import { PostComment } from "@/utils/service/api/postComment";
import { IHouses } from "@/types/IHouses";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import LoginModal from "@/components/common/LogInModal/LogInModal";
import { useRouter } from "next/navigation";
interface UserCommentsHouseProps {
  house: IHouses;
}
const UserComment = ({ house }: UserCommentsHouseProps) => {
  const router = useRouter();
  const houseId = Number(house.id);
  const userId = Number(Cookies.get("userId")) || null;
  const [value, SetValue] = useState(0);
  const [message, setMessage] = useState<ICommentsData>({
    house_id: houseId,
    user_id: userId,
    title: "",
    caption: "",
    rating: 0,
    parent_comment_id: null,
  });
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setShowLoginModal(true);
      return;
    }
    if (!message.title.trim() || !message.caption.trim()) {
      toast.error("لطفاً عنوان و پیام خود را وارد کنید!");
      return;
    }
    try {
      const result = await PostComment(message);
      toast.success("پیام شما با موفقیت ارسال شد!");
      setMessage({
        house_id: 0,
        user_id: 0,
        title: "",
        caption: "",
        rating: 0,
        parent_comment_id: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="w-full flex justify-between gap-2">
          <div className="w-[38%] h-12 relative">
            <label
              htmlFor="title"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              عنوان پیام:
            </label>
            <input
              type="text"
              id="title"
              value={message.title}
              onChange={(e) =>
                setMessage({ ...message, title: e.target.value })
              }
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[60%] h-12 relative flex justify-between items-center gap-3.5 px-2 border border-[#AAAAAA] text-[#aaaaaa] rounded-xl ">
            <label
              htmlFor="rating"
              className="absolute right-3 -top-3 bg-[#232323] px-1 text-[#AAAAAA] text-sm "
            >
              امتیاز شما:
            </label>
            <Slider
              id="slider"
              aria-label="Value"
              className={`flex-1 cursor-pointer`}
              minValue={0}
              maxValue={6}
              step={0.5}
              value={value}
              onChange={(val: number | number[]) => {
                const newVal = Array.isArray(val) ? val[0] : val;
                SetValue(newVal); // تغییر اسلایدر
                setMessage({ ...message, rating: newVal });
              }}
              radius="md"
            />

            <div className="flex justify-center items-center gap-1.5">
              <span className="w-4 h-4">{value}</span>
              <StarIconSolid className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="w-full py-10 flex items-center gap-5">
          <div className="flex-1 h-12 relative">
            <label
              htmlFor="caption"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              پیام شما:
            </label>
            <input
              type="text"
              id="caption"
              value={message.caption}
              onChange={(e) =>
                setMessage({ ...message, caption: e.target.value })
              }
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-[20%] h-9 flex items-center justify-center gap-5 bg-[#8CFF45] rounded-xl cursor-pointer text-[#363636] shadow-[0px_8px_16px_0px_#8CFF4514]"
          >
            <h4 className="">ارسال نظر</h4>
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
      <LoginModal
        isOpen={showLoginModal}
        onConfirm={() => router.push("/login")}
        onCancel={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default UserComment;
