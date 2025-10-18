import { IHouses } from "./IHouses";

export interface ICommonCardProps {
  house?: IHouses;
  showTitle?: boolean;
  showSecondTitle?: boolean;
  showLocation?: boolean;
  showDetails?: boolean;
  showSecondDetails?: boolean;
  showPrice?: boolean;
  showSecondPrice?: boolean;
  showItemNumber?: boolean;
  showThirdPrice?: boolean;
  bgColor?: string;
}
