import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Request  = ",request)
  const data = await request.json();
  console.log("DATA = ",data)
  const name = data.name;

  console.log("API received name:", name);

  return NextResponse.json({ message: "Success", name });
}
