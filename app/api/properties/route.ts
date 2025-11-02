import { NextResponse } from "next/server";
import { fetchProperties } from "@/utils/actions";

export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const search = params.get("search") ?? "";
  const category = params.get("category") ?? undefined;

  const properties = await fetchProperties({ search, category });
  return NextResponse.json(properties);
}
