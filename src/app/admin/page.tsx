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

  const payments = await stripe.paymentIntents.list({
    limit: 10
  });

  return (
    <section className="container py-20 space-y-10">
      {/* Page Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-white/60 text-sm">
          Secure overview of recent payments
        </p>
      </div>

      {/* Payments Card */}
      <div className="card p-8 space-y-6">
        <h2 className="text-2xl font-semibold">
          Recent Payments
        </h2>

        {payments.data.length === 0 ? (
          <p className="text-white/60">
            No payments found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/60">
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
                    className="border-b border-white/5"
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

                    <td className="py-3 text-white/60">
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
