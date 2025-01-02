import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routesConfig } from "./config/routes.config";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (url.pathname === "/") {
    url.pathname = `${routesConfig.defaultRoute}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
