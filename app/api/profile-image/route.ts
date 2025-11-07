import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { fetchProfileImage } from "@/utils/actions";

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profileImage = await fetchProfileImage();

  return NextResponse.json({ url: profileImage ?? null });
}
