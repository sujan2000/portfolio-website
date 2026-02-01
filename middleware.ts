import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isAuth = !!token;
  const pathname = req.nextUrl.pathname;

  // Logged-in user on login page → send to home
  if (pathname === "/login" && isAuth) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Not logged in on home → send to login first
  if (pathname === "/" && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
