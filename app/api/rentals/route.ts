import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createPropertyAction, fetchRentals } from "@/utils/actions";

export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rentals = await fetchRentals();
    return NextResponse.json(rentals);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch rentals" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const formData = await req.formData();
    const result = await createPropertyAction({}, formData);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create rental" }, { status: 500 });
  }
}