"use client";

export default function PricingCard() {
  const checkout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="border-t border-[hsl(var(--border))] pt-8">
      <h2 className="text-xl font-medium">
        Support My Work
      </h2>
      <p className="mt-2 text-[15px] text-[hsl(var(--muted))]">
        Buy a consultation or support this portfolio.
      </p>
      <div className="mt-4 text-2xl font-medium">$50</div>
      <button
        onClick={checkout}
        className="button-primary mt-4"
      >
        Pay with Stripe
      </button>
    </div>
  );
}
