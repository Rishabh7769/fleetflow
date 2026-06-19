import { NextResponse } from "next/server";
import { signupSchema } from "@/validators/auth.validators";
import { signup } from "@/services/auth.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = signupSchema.safeParse(body);

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

    const result = await signup(validation.data);

    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
  console.error("Signup Error:", error);

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