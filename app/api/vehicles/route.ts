import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import {
  createVehicleSchema,
} from "@/validators/vehicle.validator";
import {
  createVehicle,
  getVehicles,
} from "@/services/vehicle.service";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const body = await request.json();

    const validation = createVehicleSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const vehicle = await createVehicle(
      validation.data,
      user.companyId
    );

    return NextResponse.json(
      {
        success: true,
        data: vehicle,
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

    const vehicles = await getVehicles(user.companyId);

    return NextResponse.json({
      success: true,
      data: vehicles,
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