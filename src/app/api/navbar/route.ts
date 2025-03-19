import { components } from "@/data/navbar/navbar";
import { NextResponse } from "next/server";

export async function GET() {
  const data = components;

  return NextResponse.json(components);
}
