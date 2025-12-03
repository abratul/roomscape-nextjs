import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { updatePropertyImageAction } from "@/utils/actions";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  try {
    const formData = await req.formData();
    const result = await updatePropertyImageAction({}, formData);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update image" }, { status: 500 });
  }
}