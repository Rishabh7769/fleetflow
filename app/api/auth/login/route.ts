import { NextRequest, NextResponse } from "next/server";
import { login } from "@/services/auth.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await login(
      body.email,
      body.password
    );

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }
}