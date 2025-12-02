import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { deleteRentalAction } from "@/utils/actions";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await deleteRentalAction({ propertyId: params.id });
  
  return NextResponse.json(result);
}