import { IHouses } from "@/types/IHouses";
import UserComment from "./CommentForm/UserComment";
import CommentsShowSlider from "./CommentsShowSlider/Index";
import UserCommentReply from "./CommentForm/UserCommentReply";
import { useState } from "react";
import { ICommentsData } from "@/types/ICommentCardProps";

interface UserCommentsHouseProps {
  house: IHouses;
}

const Index = ({ house }: UserCommentsHouseProps) => {
  const [currentTab, setCurrentTab] = useState("comment");
  const [replyCommentData, setReplyCommentData] =
    useState<ICommentsData | null>(null);

  const houseId = house.id;
  return (
    <div className="w-full pt-4">
      {currentTab === "comment" && <UserComment house={house} />}
      {currentTab === "commentReply" && (
        <UserCommentReply commentData={replyCommentData} />
      )}

      <div className="w-full h-0.5 bg-gradient-to-r from-[#232323] via-[#AAAAAA] to-[#232323]"></div>

      <CommentsShowSlider
        houseId={houseId}
        setCurrentTab={setCurrentTab}
        setReplyCommentData={setReplyCommentData}
      />
    </div>
  );
};

export default Index;
