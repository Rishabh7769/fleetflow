import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { getDashboard } from "@/services/dashboard.service";

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const dashboard = await getDashboard(user.companyId);

    return NextResponse.json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}