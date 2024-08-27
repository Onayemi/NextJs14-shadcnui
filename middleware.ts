// export { auth as middleware } from "@/auth";

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
//   // matcher: ["/about", "/concepts", "/login", "/register"],
// };

import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if (session?.user.role === "USER") {
  //   return NextResponse.redirect(new URL("/customer", request.url));
  // }

  // if (session?.user.role === "ADMIN") {
  //   return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  // }

  return NextResponse.next();
}

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/admin", "/customer"],
  matcher: ["/admin/:path*", "/customer/:path*"],
};
