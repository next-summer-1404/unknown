"use server";

{/*check*/}

import { cookies } from "next/headers";

export async function changePassword(_prevState: any, formData: FormData) {
  const oldPassword = formData.get("oldPassword") as string;
  const newPassword = formData.get("newPassword") as string;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/change-password`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      }
    );

    const text = await res.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }

    if (!res.ok) {
      return {
        success: false,
        message: body?.message || "خطا در تغییر رمز عبور",
      };
    }

    return {
      success: true,
      message: body?.message || "رمز عبور با موفقیت تغییر کرد!",
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || "مشکل در برقراری ارتباط با سرور",
    };
  }
}
