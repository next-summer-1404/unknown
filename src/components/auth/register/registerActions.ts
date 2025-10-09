"use server";

import CompleteRegistrationApi from "@/utils/service/api/auth/register/CompleteRegistrationApi";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export async function RegisterActionStep3(formData: FormData) {
  const phoneNumber = formData.get("phoneNumber") as string | null;
  const password = formData.get("password") as string | null;
  const cookiesStore = await cookies();
  const userId = cookiesStore.get("tempUserId");


  const data = {
    userId: userId?.value || null,
    password: password,
    phoneNumber: phoneNumber,
  };

  try {
    CompleteRegistrationApi(data);
    toast.success("ثبت‌نام کامل شد");
  } catch (error) {
    toast.error("ثبت‌نام ناموفق بود");
  }
}
