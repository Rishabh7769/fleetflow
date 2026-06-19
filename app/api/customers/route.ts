import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { createCustomerSchema } from "@/validators/customer.validator";
import {
  createCustomer,
  getCustomers,
} from "@/services/customer.service";

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    const body = await request.json();

    const validation = createCustomerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const customer = await createCustomer(
      validation.data,
      user.companyId
    );

    return NextResponse.json(
      {
        success: true,
        data: customer,
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

    const customers = await getCustomers(user.companyId);

    return NextResponse.json({
      success: true,
      data: customers,
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