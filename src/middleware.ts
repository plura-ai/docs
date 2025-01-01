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

  // If the path is `/`, redirect to `/${routesConfig.currentVersion}`
  if (url.pathname === "/") {
    url.pathname = `/${routesConfig.currentVersion}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
