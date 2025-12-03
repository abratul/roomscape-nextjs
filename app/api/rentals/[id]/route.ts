import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { deleteRentalAction, fetchRentalDetails, updatePropertyAction } from "@/utils/actions";

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

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  try {
    const rental = await fetchRentalDetails(params.id);
    if (!rental) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(rental);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch rental" }, { status: 500 });
  }
}


export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  try {
    const formData = await req.formData();
    const result = await updatePropertyAction({}, formData);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update rental" }, { status: 500 });
  }
}