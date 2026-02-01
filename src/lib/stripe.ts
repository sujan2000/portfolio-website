import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

export const stripe: Stripe | null =
  key && key.length > 0
    ? new Stripe(key, { typescript: true })
    : null;
