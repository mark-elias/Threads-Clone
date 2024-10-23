import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/api/webhook/clerk"]);

export default clerkMiddleware(async (auth, request) => {
  // Protect all non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Explicitly match API routes and all non-static routes
    "/((?!_next/static|favicon.ico).*)",
    "/api/(.*)",
  ],
};