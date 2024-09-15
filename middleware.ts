import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/results", request.url));
  }

  return NextResponse.next();
}
