import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { createTripExpenseSchema } from "@/validators/trip-expense.validator";
import { createTripExpense } from "@/services/trip-expense.service";
import { getTripExpenses } from "@/services/trip-expense.service";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    const body = await request.json();

    const validation = createTripExpenseSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const expense = await createTripExpense(
      id,
      user.companyId,
      validation.data
    );

    return NextResponse.json(
      {
        success: true,
        data: expense,
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
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    const { id } = await params;

    const expenses = await getTripExpenses(
      id,
      user.companyId
    );

    return NextResponse.json({
      success: true,
      data: expenses,
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