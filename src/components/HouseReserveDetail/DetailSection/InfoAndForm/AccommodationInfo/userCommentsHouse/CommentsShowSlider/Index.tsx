import React, { FC } from "react";
import CommentSlider from "./CommentSlider";
import { ICommentsData } from "@/types/ICommentCardProps";

interface houseIdProps {
  houseId: string;
  setReplyCommentData: (data: ICommentsData) => void;
  setCurrentTab: (tab: string) => void;
}

const Index: FC<houseIdProps> = ({
  houseId,
  setReplyCommentData,
  setCurrentTab,
}) => {
  return (
    <div className="pt-11 pb-3">
      <CommentSlider
        houseId={houseId}
        setReplyCommentData={setReplyCommentData}
        setCurrentTab={setCurrentTab}
      />
    </div>
  );
};

export default Index;
