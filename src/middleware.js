import { NextResponse } from "next/server";

export async function middleware(request) {
  const tokenInfo = request.cookies.get("token");
  const token = tokenInfo?.value;

  const userNavigatingRoute = request.nextUrl.pathname;

  // Redirect logged-in users away from login and register pages
  if (
    token &&
    (userNavigatingRoute === "/login" || userNavigatingRoute === "/register")
  ) {
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("message", "You are already logged in");
    return NextResponse.redirect(redirectUrl);
  }

  if (
    !token &&
    (userNavigatingRoute.startsWith("/course") ||
      userNavigatingRoute.startsWith("/dashboard"))
  ) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("callbackUrl", userNavigatingRoute);
    return NextResponse.redirect(redirectUrl);
  }
  if (!token && userNavigatingRoute.startsWith("/checkout")) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("callbackUrl", userNavigatingRoute);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/course/:path*",
    "/dashboard/:path*",
    "/checkout",
  ],
};
