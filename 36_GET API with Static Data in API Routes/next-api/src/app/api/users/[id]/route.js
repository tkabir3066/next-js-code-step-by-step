import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  console.log(content.params.id);
  const user = users.filter((user) => user.id == content.params.id);

  return NextResponse.json(
    user.length == 0
      ? { result: "No data Found", success: false }
      : { result: user, success: true },
    { status: 200 }
  );
}
