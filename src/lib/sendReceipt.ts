import { resend } from "./email";

export async function sendPaymentEmail(amount: number) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: process.env.EMAIL_TO!,
    subject: "Payment received ✅",
    html: `
      <h2>New Payment</h2>
      <p>You received a payment of <strong>$${amount / 100}</strong>.</p>
    `
  });
}
