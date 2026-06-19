import { NextResponse } from "next/server";
import { companySchema } from "@/validators/company.validator";
import { createCompany, getCompanies } from "@/services/company.service";

export async function GET() {
  try {
    const companies = await getCompanies();

    return NextResponse.json({
      success: true,
      companies,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch companies",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = companySchema.safeParse(body);

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

    const company = await createCompany(validation.data);

    return NextResponse.json(
      {
        success: true,
        company,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}