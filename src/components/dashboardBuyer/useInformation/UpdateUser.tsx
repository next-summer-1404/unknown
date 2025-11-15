"use server";

{/*check*/}

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateUser = async (_prevState: any, formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const cookieStore = await cookies(); 
  const userId = cookieStore.get("id")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
        }),
      }
    );

    
    if (!res.ok) {
      const bodyText = await res.text(); 
      console.error(" UpdateUser failed:", res.status, bodyText);
    }

    const data = await res.json();

    revalidatePath("/user");

    return {
      data,
    };
  } catch (error) {
    return { message: " خطا در بروزرسانی اطلاعات کاربر." };
  }
};
