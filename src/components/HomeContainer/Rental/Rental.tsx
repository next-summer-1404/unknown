import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";
import RentMortgage from "./RentMortgage";

const Rental = async () => {
  const HouseList = await getHouses();
  const Houses: IHouses[] = HouseList.houses;
  return (
    <>
      <RentMortgage Houses={Houses} />
    </>
  );
};

export default Rental;
