import { ContactSchema } from "@/app/schemas/contactSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parse = ContactSchema.safeParse(data);
  if (!parse.success) {
    return NextResponse.json({ error: "Invalid data", details: parse.error.errors }, { status: 400 });
  }

  await fetch('https://script.google.com/macros/s/AKfycbxpv36kAFole5dL0Tu6NhHP8DTQg6SboHFxfs_utbn6sZw77BNMPJNvk-psewUx8TpxDg/exec',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parse.data),
    });
  return NextResponse.json({ success: true });
}
