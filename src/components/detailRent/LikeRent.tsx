// import { IHouses } from "@/types/IHouses";
// import { HeartIcon } from "@heroicons/react/24/outline";
// import React from "react";

// interface Props{
//   house:IHouses;
// }

// const LikeRent = ({house} :Props) => {
//   return (
//     <div className="w-1/2 h-auto p-2 mr-16 mt-5 flex gap-1 justify-end">
//       <HeartIcon className="w-10 h-7 text-[#AAAAAA] border border-[#393939] bg-[#393939] ml-5" />
//     </div>
//   );
// };

// export default LikeRent;


"use client";

import { IHouses } from "@/types/IHouses";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  HeartIcon as HeartSolid,
  HeartIcon as HeartOutline,
} from "@heroicons/react/24/solid";

interface Props {
  house: IHouses & { favorite_id?: number }; // اگه از API لیست علاقه‌مندی می‌گیری، این مقدار موجوده
  onAuthRequiredTest?: () => void;
  onToggleLikeTest?: (isFavorite: boolean) => void;
}

const LikeRent = ({ house, onAuthRequiredTest, onToggleLikeTest }: Props) => {
  const { data: session, status } = useSession();
  const [isFavorite, setIsFavorite] = useState<boolean>(
    house?.isFavorite ?? false
  );
  const [favoriteId, setFavoriteId] = useState<number | undefined>(
    house?.favorite_id
  );
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    // حالت تست (بدون API واقعی)
    if (onToggleLikeTest) {
      onToggleLikeTest(!isFavorite);
      setIsFavorite(!isFavorite);
      return;
    }

    // تا وقتی سشن لود نشده
    if (status === "loading") return;

    // اگر لاگین نیست
    if (!session) {
      onAuthRequiredTest?.() ?? (window.location.href = "/login");
      return;
    }

    try {
      setLoading(true);
      const token = (session as any)?.accessToken;

      if (isFavorite && favoriteId) {
        // حذف علاقه‌مندی با ID رکورد
        const res = await fetch(`/favorites/${favoriteId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok)
          throw new Error(
            `حذف علاقه‌مندی با خطا مواجه شد (${res.statusText})`
          );
        setIsFavorite(false);
        setFavoriteId(undefined);
      } else {
        // افزودن علاقه‌مندی با house_id
        const res = await fetch(`/favorites`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ house_id: house.id }),
        });

        if (!res.ok)
          throw new Error(
            `افزودن علاقه‌مندی با خطا مواجه شد (${res.statusText})`
          );

        const data = await res.json();
        // بک‌اند معمولاً آیدی رکورد تازه ساخته‌شده رو می‌فرسته
        setIsFavorite(true);
        setFavoriteId(data.id);
      }
    } catch (err) {
      console.error("❌ خطا در LikeRent:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={handleLike}
      className={`w-1/2 h-auto p-2 mr-16 mt-5 flex gap-1 justify-end cursor-pointer transition-all duration-150 ${
        loading ? "opacity-70" : "opacity-100"
      }`}
    >
      {isFavorite ? (
        <HeartSolid className="w-10 h-7 text-[#8CFF45] bg-[#393939] ml-5 drop-shadow-[0_0_4px_#8CFF45]" />
      ) : (
        <HeartOutline className="w-10 h-7 text-[#AAAAAA] bg-[#393939] ml-5" />
      )}
    </div>
  );
};

export default LikeRent;
