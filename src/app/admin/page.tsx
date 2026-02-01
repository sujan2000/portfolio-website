import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";


export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};



export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Not logged in
  if (!session) {
    redirect("/");
  }

  // Not admin
  if (session.user?.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  if (!stripe) {
    return (
      <section className="container py-20 space-y-10">
        <h1 className="text-2xl font-medium">Admin Dashboard</h1>
        <p className="text-[hsl(var(--muted))] text-[15px]">
          Stripe is not configured. Add <code className="text-[13px] bg-[hsl(var(--border))] px-1.5 py-0.5 rounded">STRIPE_SECRET_KEY</code> to <code className="text-[13px] bg-[hsl(var(--border))] px-1.5 py-0.5 rounded">.env.local</code> to view payments.
        </p>
      </section>
    );
  }

  const payments = await stripe.paymentIntents.list({
    limit: 10,
  });

  return (
    <section className="container py-20 space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-[hsl(var(--muted))] text-[15px]">
          Secure overview of recent payments
        </p>
      </div>

      <div className="border border-[hsl(var(--border))] p-6 space-y-6">
        <h2 className="text-xl font-medium">
          Recent Payments
        </h2>

        {payments.data.length === 0 ? (
          <p className="text-[hsl(var(--muted))] text-[15px]">
            No payments found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[hsl(var(--border))] text-[hsl(var(--muted))] text-[15px]">
                  <th className="py-3 text-left">Payment ID</th>
                  <th className="py-3 text-left">Amount</th>
                  <th className="py-3 text-left">Status</th>
                  <th className="py-3 text-left">Created</th>
                </tr>
              </thead>

              <tbody>
                {payments.data.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-[hsl(var(--border))]"
                  >
                    <td className="py-3 font-mono text-xs">
                      {payment.id}
                    </td>

                    <td className="py-3">
                      ${(payment.amount / 100).toFixed(2)}
                    </td>

                    <td className="py-3 capitalize">
                      {payment.status}
                    </td>

                    <td className="py-3 text-[hsl(var(--muted))]">
                      {new Date(
                        payment.created * 1000
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
