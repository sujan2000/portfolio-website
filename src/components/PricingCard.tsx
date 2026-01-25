"use client";

export default function PricingCard() {
  const checkout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="mx-auto max-w-xl">
      <div className="card p-8 space-y-6 text-center">
        <h2 className="text-2xl font-semibold">
          Support My Work
        </h2>

        <p className="text-white/70">
          Buy a consultation or support this portfolio.
        </p>

        <div className="text-4xl font-bold">$50</div>

        <button
          onClick={checkout}
          className="button-primary w-full"
        >
          Pay with Stripe
        </button>
      </div>
    </div>
  );
}
