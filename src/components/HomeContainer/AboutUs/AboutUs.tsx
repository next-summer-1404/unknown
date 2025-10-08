import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import styles from "./AboutUsSection.module.css";

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
          <div className="relative bg-[#2D2D2D] rounded-3xl h-1/2 min-h-36 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#444444] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-0 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="h-full bg-amber-50"></div>
            </div>
          </div>
          <div className="relative bg-[#2D2D2D] rounded-3xl h-1/2 min-h-36 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#232323] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-0 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="h-full bg-amber-50"></div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#2D2D2D] rounded-3xl h-full p-4 ">
          <div
            className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
          ></div>
          <div className="relative rounded-3xl px-3 bg-[#7569FF] ">
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
          <div className="relative bg-[#2D2D2D] rounded-3xl h-1/2 min-h-36 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#232323] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-0 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="h-full bg-amber-50">ppppppp</div>
            </div>
          </div>
          <div className="relative bg-[#2D2D2D] rounded-3xl h-1/2 min-h-36 p-4 w-full">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#232323] rounded-[0_0_40px_0]`}
            ></div>
            <div className="relative rounded-3xl  bg-[#444444] h-full overflow-hidden pt-7">
              <div
                className={`${styles.insideCardShape} w-[79%] h-7 absolute top-0 left-0 z-0 bg-[#2D2D2D]  rounded-[0_0_40px_0]`}
              ></div>
              <div className="h-full bg-amber-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
