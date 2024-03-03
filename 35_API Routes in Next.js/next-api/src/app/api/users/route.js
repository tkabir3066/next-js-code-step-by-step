import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    { name: "anil", age: 30, city: "Kolkata" },
    { status: 200 }
  );
}
