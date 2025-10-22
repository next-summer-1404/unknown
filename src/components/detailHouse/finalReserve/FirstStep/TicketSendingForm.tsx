import { CheckCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
const TicketSendingForm = () => {
  return (
    <div className="py-2 px-2 bg-[#393939]  rounded-2xl ">
      <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
        <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> ارسال بلیط به دیگری</p>
        <span className="text-sm text-[#8CFF45]">
          (ارسال بلیط به ایمیل و شماره همراه دیگر)
        </span>
      </div>
      <form className=" w-full py-7 px-2 flex items-center justify-between">
        <div className=" w-1/2 flex gap-2">
          {/* شماره تلفن */}
          <div className="w-1/2 relative">
            <label
              htmlFor="username"
              className="absolute right-5 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              شماره تلفن:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-3xl px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* ایمیل */}
          <div className="w-1/2 relative">
            <label
              htmlFor="email"
              className="absolute right-5 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              ایمیل:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-3xl px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <button className="flex items-center border border-[#8CFF45] rounded-2xl p-2 gap-2 cursor-pointer">
          <CheckCircleIcon className="w-5 h-5 text-[#8CFF45]" />
          <p className="text-[#8CFF45] text-sm">ثبت اطلاعات</p>
        </button>
      </form>
    </div>
  );
};

export default TicketSendingForm;
