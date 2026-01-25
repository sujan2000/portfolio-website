import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Unauthorized</p>;
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Welcome, {session.user?.name}
      </h1>

      <p className="text-sm opacity-80">
        Email: {session.user?.email}
      </p>
    </section>
  );
}
