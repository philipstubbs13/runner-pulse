import { NextRequest, NextResponse } from "next/server";
import { Routes } from "@/utils/router/Routes.constants";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/") {
    return NextResponse.redirect(new URL(Routes.Results, request.url));
  }

  return NextResponse.next();
}
