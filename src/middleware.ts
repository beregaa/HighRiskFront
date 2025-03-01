import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (token) {
    const response = NextResponse.next();
    
    const stringifiedToken = JSON.stringify(token);

    response.cookies.set("user", stringifiedToken, {
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
