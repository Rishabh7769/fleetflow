import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { startTrip } from "@/services/trip.service";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    const result = await startTrip(id, user.companyId);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}