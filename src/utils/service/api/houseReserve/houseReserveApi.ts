import CardReserve from "../../../../components/houseReserve/house/CardReserve";
import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import http from "../../interceptor/axiosClient";
import toast from "react-hot-toast";

interface Props {
  id: string; // پارامتری که برای فراخوانی جزئیات نیاز است
}

const HouseReserveApi = async ({ id }: Props) => {
  try {
    const res = await http.get<HouseReserveTypes>(`/api/houses/id=${id}`);
    return <CardReserve house={res} />;
  } catch (error) {
    toast.error('خطا در بارگذاری جزئیات خانه. لطفاً بعداً دوباره تلاش کنید')
  }
};

export default HouseReserveApi;
