import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ??
    "unknown";

  const { success } = await rateLimit.limit(ip);

  if (!success) {
    return new Response("Too many requests", { status: 429 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Portfolio Support",
            description: "Support my work / paid consultation"
          },
          unit_amount: 5000
        },
        quantity: 1
      }
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`
  });

  return NextResponse.json({ url: session.url });
}
