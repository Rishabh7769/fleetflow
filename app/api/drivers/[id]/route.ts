import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import {
  getDriverById,
  updateDriver,
  deleteDriver,
} from "@/services/driver.service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    const driver = await getDriverById(id, user.companyId);

    if (!driver) {
      return NextResponse.json(
        {
          success: false,
          message: "Driver not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: driver,
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    const body = await request.json();

    const driver = await updateDriver(
      id,
      user.companyId,
      body
    );

    return NextResponse.json({
      success: true,
      data: driver,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    await deleteDriver(id, user.companyId);

    return NextResponse.json({
      success: true,
      message: "Driver deleted successfully",
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