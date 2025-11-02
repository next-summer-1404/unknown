// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const token = request.cookies.get("accessToken");
  
//   if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/dashboard/:path", "/dashboard"],
// };


import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && pathname.startsWith("/dashboard")) {
    try {
      const { payload } = await jwtVerify(token, secret);
      const role = payload.role as "buyer" | "seller" | "admin" | undefined;

      if (!role) {
        const res = NextResponse.redirect(new URL("/login", request.url));
        res.cookies.delete("accessToken");
        return res;
      }

      const allowedPath = `/dashboard/${role}`;

      if (!pathname.startsWith(allowedPath)) {
        return NextResponse.redirect(new URL(allowedPath, request.url));
      }

      return NextResponse.next();
    } catch (err) {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("accessToken");
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};
