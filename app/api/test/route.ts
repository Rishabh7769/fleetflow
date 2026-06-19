import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "FleetFlow API is working 🚀",
  });
}