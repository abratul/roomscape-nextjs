import { NextResponse } from "next/server";
import { fetchPropertyDetails } from "@/utils/actions";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const property = await fetchPropertyDetails(params.id);
    
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error fetching property details:", error);
    return NextResponse.json(
      { error: "Failed to fetch property details" },
      { status: 500 }
    );
  }
}