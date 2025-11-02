import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decoded: any = jwtDecode(token);
    const role = decoded?.role;

    if (!role) {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("accessToken");
      return res;
    }

    if (pathname === "/dashboard" || !pathname.includes(`/dashboard/${role}`)) {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT decode failed:", error);

    const res = NextResponse.redirect(new URL("/login", request.url));
    res.cookies.delete("accessToken");
    return res;
  }
}
