import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post(`${process.env.BASE_URL}/auth/login`, {
      email,
      password
    });

    const { accessToken, refreshToken } = response.data;

    const res = NextResponse.json(
      { success: true, message: 'Login successful', user: response.data },
      { status: 200 }
    );

    // ذخیره توکن‌ها در کوکی سمت سرور
    res.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60, // 1 ساعت
      sameSite: 'strict'
    });

    res.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 روز
      sameSite: 'strict'
    });

    return res;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.response?.data?.message || 'Login failed' },
      { status: 401 }
    );
  }
}
