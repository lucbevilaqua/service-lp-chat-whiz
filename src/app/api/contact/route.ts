import { ContactSchema } from "@/app/schemas/contactSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parse = ContactSchema.safeParse(data);
  if (!parse.success) {
    return NextResponse.json({ error: "Invalid data", details: parse.error.errors }, { status: 400 });
  }

  // TODO:integrar com a Google Sheets API usando parse.data
  return NextResponse.json({ success: true });
}
