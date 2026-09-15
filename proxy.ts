import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function proxy(request: NextRequest) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3001",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  const response = NextResponse.next();

  response.headers.set(
    "Access-Control-Allow-Origin",
    "http://localhost:3001"
  );

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/auth")) {
    return response;
  }

  if (pathname.startsWith("/api")) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
          headers: response.headers,
        }
      );
    }

    try {
      verifyToken(authHeader.split(" ")[1]);
      return response;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        {
          status: 401,
          headers: response.headers,
        }
      );
    }
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};