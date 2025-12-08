import { NextResponse } from "next/server";
import { resolveAcceptLanguage } from "resolve-accept-language";
import { locales } from "./config";

export const config = {
  matcher: [
    "/",
    "/(en|de|es|fr|it|nl|pt)/:path*",
    "/(help|faq|imprint|privacy)",
  ],
};

const BACKWARD_LINKS = ["/help", "/faq", "/imprint", "/privacy"];

export default function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    try {
      const acceptHeader = request.headers.get("accept-language") || "";
      const userLanguage = resolveAcceptLanguage(
        acceptHeader,
        locales,
        "en-US"
      );
      return NextResponse.redirect(
        new URL(`/${userLanguage.substring(0, 2)}`, request.url)
      );
    } catch (error) {
      return NextResponse.redirect(new URL("/en", request.url));
    }
  }

  if (BACKWARD_LINKS.indexOf(request.nextUrl.pathname) !== -1) {
    return NextResponse.redirect(
      new URL(`/en/${request.nextUrl.pathname}`, request.url)
    );
  }

  if (request.url.indexOf("localhost") !== -1) {
    return NextResponse.next();
  }

  if (
    request.url.indexOf("briefe.app") === -1 &&
    request.nextUrl.pathname.indexOf("/de") === 0
  ) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname, "https://briefe.app")
    );
  }

  if (
    request.url.indexOf("briefe.app") !== -1 &&
    request.nextUrl.pathname.indexOf("/de") !== 0
  ) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname, "https://letter-app.com")
    );
  }

  return NextResponse.next();
}
