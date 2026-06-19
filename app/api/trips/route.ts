import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { createTripSchema } from "@/validators/trip.validator";
import { createTrip, getTrips } from "@/services/trip.service";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const body = await request.json();

    const validation = createTripSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const trip = await createTrip(
      validation.data,
      user.companyId
    );

    return NextResponse.json(
      {
        success: true,
        data: trip,
      },
      { status: 201 }
    );
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

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const trips = await getTrips(user.companyId);

    return NextResponse.json({
      success: true,
      data: trips,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unauthorized",
      },
      { status: 401 }
    );
  }
}