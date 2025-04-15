import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import next from "next";

export default clerkMiddleware(async (auth, req, next) => {
  const protectedRoutes = createRouteMatcher(["/dashboard/:path*"]);
  if (protectedRoutes(req)) {
    const { sessionId } = await auth();
    if (!sessionId) {
      throw new Error("Unauthorized access");
    }
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};