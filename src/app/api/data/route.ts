import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    id: 1,
    name: "John",
    surname: "Doe",
    age: 23,
  };
  return NextResponse.json(data);
}
