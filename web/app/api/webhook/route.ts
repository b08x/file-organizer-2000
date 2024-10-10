import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log("Webhook endpoint hit, but Stripe functionality has been removed");
  return NextResponse.json({ status: 200, message: "Webhook received, but no action taken" });
}
