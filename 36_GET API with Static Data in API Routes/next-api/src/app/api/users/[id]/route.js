import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const data = users;
  console.log(content.params.id);
  const userData = data.filter((user) => user.id == content.params.id);
  return NextResponse.json(userData, { status: 200 });
}
