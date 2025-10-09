import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import styles from "./AboutUsSection.module.css";
import Tik from "../../../assets/images/tik.png";
import GoldenCup from "../../../assets/images/goldenCup.png";
import HandsFree from "../../../assets/images/handsFree.png";
import Heart3D from "../../../assets/images/heart3D.png";

import {
  ClockIcon,
  FaceSmileIcon,
  GiftIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-7 justify-center bg-[#232323] rounded-b-[60px] w-full min-h-96 py-10 px-7">
      <div className="h-fit flex flex-col justify-center items-center gap-6 text-white">
        <div className="h-fit flex justify-center items-center gap-5 ">
          <Image src={GreenArrow} width={60} height={70} alt="" />
          <h3 className=" text-center text- font-bold text-[#8CFF45]">
            درباره دلتا
          </h3>
          <Image
            src={GreenArrow}
            width={60}
            height={70}
            alt=""
            className="rotate-180"
          />
        </div>
        <h3 className="text-2xl">دلتا رو بیشتر بشناس!</h3>
        <h3 className="">
          تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد
          تا بتواند در تمام لحظات کنار شما باشد .
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="flex flex-col gap-5 items-center justify-center px-4 col-span-3 md:col-span-1 ">
          <div className="relative bg-[#2D2D2D] rounded-3xl  min-h-56 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#444444] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-10 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="flex flex-col relative gap-4 pr-5 overflow-hidden h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-white">+12000 خونه فعال</h1>
                <h4 className="text-[13px] font-extralight text-white">
                  خانه هایی که نظافت و امنیت شان تامین شده!
                </h4>

                {/* جهت غیرفعال کردن ارور برای تگ  img */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={Tik.src}
                  alt=""
                  className=" absolute left-0 -top-7 z-0"
                />
              </div>
            </div>
          </div>
          <div className="relative bg-[#2D2D2D] rounded-3xl min-h-56 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#232323] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-10 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="flex flex-col relative gap-4 pr-5 overflow-hidden h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white">
                  <GiftIcon className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-white">+10 سال سابقه درخشان</h1>
                <h4 className="text-[13px] font-extralight text-white">
                  در مهمان نوازی به شما مسافران عزیز
                </h4>

                {/* جهت غیرفعال کردن ارور برای تگ  img */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GoldenCup.src}
                  alt=""
                  className=" absolute left-0 -top-1 z-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#2D2D2D] rounded-3xl h-full p-4 ">
          <div
            className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
          ></div>
          <div className="relative rounded-3xl px-3 h-full bg-[#7569FF] ">
            <div
              className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-0 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
            ></div>
            <p className="pt-10 pb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو د...
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-5 items-center justify-center px-4  col-span-3 md:col-span-2 lg:col-span-1">
          <div className="relative bg-[#2D2D2D] rounded-3xl  min-h-56 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#232323] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-10 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>

              <div className="flex flex-col relative gap-4 pr-5 overflow-hidden h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-white">7 / 24 ساعت شبانه روز</h1>
                <h4 className="text-[13px] font-extralight text-white">
                  تیم پشتیبانی در تمام طول روز همراه شما هستن
                </h4>

                {/* جهت غیرفعال کردن ارور برای تگ  img */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HandsFree.src}
                  alt=""
                  className=" absolute -left-1 -top-6 z-0"
                />
              </div>
            </div>
          </div>
          <div className="relative bg-[#2D2D2D] rounded-3xl  min-h-56 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#444444] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-10 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              {/* <div className="h-full bg-amber-50"></div> */}
              <div className="flex flex-col relative gap-4 pr-5 overflow-hidden h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white">
                  <FaceSmileIcon className="w-6 h-6" />
                </div>
                <h1 className="text-xl text-white">7 / 24 ساعت شبانه روز</h1>
                <h4 className="text-[13px] font-extralight text-white">
                  تیم پشتیبانی در تمام طول روز همراه شما هستن
                </h4>

                {/* جهت غیرفعال کردن ارور برای تگ  img */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={Heart3D.src}
                  alt=""
                  className=" absolute -left-1 -top-6 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
