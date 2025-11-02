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








import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export const config = { matcher: ["/dashboard/:path*"] };

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const raw = process.env.JWT_SECRET!;
    let secret: Uint8Array;

    try {
      secret = new TextEncoder().encode(Buffer.from(raw, "base64").toString());
    } catch {
      secret = new TextEncoder().encode(raw);
    }

    const { payload } = await jwtVerify(token, secret);
    const role = (payload as any)?.role ?? "unknown";

    if (req.nextUrl.pathname === "/dashboard") {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, req.url));
    }

    const res = NextResponse.next();
    res.headers.set("x-role-debug", ` verified role=${role}`);
    return res;
  } catch (err) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.headers.set("x-role-debug", "JWT verification failed");
    return res;
  }
}
