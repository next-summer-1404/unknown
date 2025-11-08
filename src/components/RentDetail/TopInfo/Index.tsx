import { IHouses } from "@/types/IHouses";
import CallInfo from "./CallInfo/CallInfo";
import { FC } from "react";
import Summary from "./Summary/Summary";
import PicSection from "./PicSection/Index";

interface Props {
  house: IHouses;
}
const Index: FC<Props> = ({ house }) => {
  return (
    <div className="h-auto">
      <div className="w-full flex items-stretch justify-between gap-5">
        <PicSection house={house}/>
        <CallInfo house={house} />
      </div>
      <Summary house={house} />
    </div>
  );
};

export default Index;
