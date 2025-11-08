import { IHouses } from "@/types/IHouses";
import UserComment from "./CommentForm/UserComment";
import CommentsShowSlider from "./CommentsShowSlider/Index";

interface UserCommentsHouseProps {
  house: IHouses;
}

const Index = ({ house }: UserCommentsHouseProps) => {
  return (
    <div className="w-full pt-4 ">
      <UserComment />

      <div className="w-full h-0.5 bg-gradient-to-r from-[#232323] via-[#AAAAAA] to-[#232323]"></div>

      <CommentsShowSlider />
    </div>
  );
};

export default Index;
