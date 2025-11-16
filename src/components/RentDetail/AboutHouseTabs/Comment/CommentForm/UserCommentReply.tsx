"use client";

import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { ICommentsParams } from "@/types/ICommentsParams";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import LoginModal from "@/components/common/LogInModal/LogInModal";
import { PostComment } from "@/utils/service/api/postComment";
import { ICommentsData } from "@/types/ICommentCardProps";

interface UserCommentsHouseProps {
  commentData: ICommentsData | null;
}

const UserCommentReply = ({ commentData }: UserCommentsHouseProps) => {
  const router = useRouter();
  const houseId = Number(commentData?.house_id);
  const CommentId = Number(commentData?.id);
  const userId = Number(Cookies.get("userId")) || null;

  console.log(commentData);
  const [message, setMessage] = useState<ICommentsParams>({
    house_id: houseId,
    user_id: userId,
    title: "پاسخ",
    caption: "",
    rating: null,
    parent_comment_id: CommentId,
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
        title: "پاسخ",
        caption: "",
        rating: null,
        parent_comment_id: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-between py-10">
        <div className="w-[35%] h-12 relative">
          <label
            htmlFor="comment"
            className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
          >
            برای پیام:
          </label>
          <input
            type="text"
            id="comment"
            disabled
            value={commentData?.caption}
            className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="w-[64%] flex items-center gap-5">
          <div className="flex-1 h-12 relative">
            <label
              htmlFor="caption"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              پاسخ شما:
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
            <h4 className="">ارسال پاسخ</h4>
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

export default UserCommentReply;
