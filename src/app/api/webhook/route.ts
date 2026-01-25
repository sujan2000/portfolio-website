import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { sendPaymentEmail } from "@/lib/sendReceipt";

import { rateLimit } from "@/lib/rateLimit";



export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;


  const ip = req.headers.get("x-forwarded-for") ?? "stripe";
  const { success } = await rateLimit.limit(ip);

  if (!success) {
    return new Response("Rate limit", { status: 429 });
  }
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response("Webhook error", { status: 400 });
  }


  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    await sendPaymentEmail(session.amount_total ?? 0);
  }

  return NextResponse.json({ received: true });
}
