import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { createDriverSchema } from "@/validators/driver.validator";
import {
  createDriver,
  getDrivers,
} from "@/services/driver.service";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const body = await request.json();

    const validation = createDriverSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const driver = await createDriver(
      validation.data,
      user.companyId
    );

    return NextResponse.json(
      {
        success: true,
        data: driver,
      },
      {
        status: 201,
      }
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
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const drivers = await getDrivers(user.companyId);

    return NextResponse.json({
      success: true,
      data: drivers,
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
      {
        status: 401,
      }
    );
  }
}