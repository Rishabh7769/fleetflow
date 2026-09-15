import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { createUserSchema } from "@/validators/user.validator";
import { createUser, getUsers } from "@/services/user.service";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const body = await request.json();

    const validation = createUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const created = await createUser(
      validation.data,
      user.companyId
    );

    return NextResponse.json(
      {
        success: true,
        data: created,
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

    const users = await getUsers(user.companyId);

    return NextResponse.json({
      success: true,
      data: users,
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
      { status: 500 }
    );
  }
}