"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, Lock, Heart, RefreshCw, ArrowRight } from "lucide-react";
import { programs, donationAmounts } from "@/lib/data";

type Frequency = "once" | "monthly";

function DonateForm() {
  const searchParams = useSearchParams();
  const programSlug = searchParams.get("program");

  const [frequency, setFrequency] = useState<Frequency>("once");
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(programSlug || "");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
  });

  useEffect(() => {
    if (programSlug) setSelectedProgram(programSlug);
  }, [programSlug]);

  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const programName = programs.find((p) => p.slug === selectedProgram)?.title;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-cream" size={36} fill="currentColor" />
          </div>
          <h1 className="font-display text-display-md text-forest mb-4">
            Thank you, {form.firstName}!
          </h1>
          <p className="font-body text-base text-ink/70 mb-2">
            Your {frequency === "monthly" ? "monthly " : ""}donation of{" "}
            <strong className="text-forest">${finalAmount}</strong>{" "}
            {programName ? `to ${programName}` : "to our general fund"} has been received.
          </p>
          <p className="font-body text-sm text-ink/50 mb-10">
            A receipt has been sent to {form.email}. Your donation is tax-deductible.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-forest text-cream px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-forest-light transition-colors"
            >
              Explore More Programs <ArrowRight size={14} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center font-body text-sm text-ink/60 hover:text-forest transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(196,98,45,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(247,243,237,0.2) 0%, transparent 40%)`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Make a Difference
          </span>
          <h1 className="font-display text-display-lg text-cream mb-3">Donate</h1>
          <p className="font-body text-base text-cream/70">
            94¢ of every dollar goes directly to programs. No overhead excess.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="sticky top-16 md:top-20 z-20 bg-cream/95 backdrop-blur-sm border-b border-sand/50">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-2">
          {(["Amount", "Program", "Payment"] as const).map((label, i) => {
            const stepNum = (i + 1) as 1 | 2 | 3;
            const isActive = step === stepNum;
            const isDone = step > stepNum;
            return (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-body font-semibold shrink-0 transition-all ${
                    isDone
                      ? "bg-forest text-cream"
                      : isActive
                      ? "bg-terra text-cream"
                      : "bg-sand text-ink/40"
                  }`}
                >
                  {isDone ? <Check size={12} /> : stepNum}
                </div>
                <span
                  className={`font-body text-xs hidden sm:block ${
                    isActive ? "text-terra font-medium" : isDone ? "text-forest" : "text-ink/40"
                  }`}
                >
                  {label}
                </span>
                {i < 2 && <div className="flex-1 h-px bg-sand" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* STEP 1 – Amount */}
            <div className={step === 1 ? "block" : "hidden"}>
              <h2 className="font-display text-2xl font-semibold text-forest mb-6">
                Choose your amount
              </h2>

              {/* Frequency toggle */}
              <div className="inline-flex bg-cream-dark border border-sand rounded-full p-1 mb-7">
                {(["once", "monthly"] as Frequency[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                      frequency === f
                        ? "bg-forest text-cream shadow-sm"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {f === "monthly" && <RefreshCw size={12} />}
                    {f === "once" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((d) => (
                  <button
                    key={d.amount}
                    type="button"
                    onClick={() => { setAmount(d.amount); setCustomAmount(""); }}
                    className={`py-4 px-2 rounded-xl border-2 text-center transition-all ${
                      amount === d.amount && !customAmount
                        ? "border-terra bg-terra/5"
                        : "border-sand hover:border-forest/30"
                    }`}
                  >
                    <p className={`font-display text-xl font-semibold ${amount === d.amount && !customAmount ? "text-terra" : "text-forest"}`}>
                      ${d.amount}
                    </p>
                    <p className="font-body text-xs text-ink/50 mt-0.5 leading-tight">{d.impact}</p>
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-sm font-medium text-ink/50">
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full pl-8 pr-4 py-3 border border-sand rounded-xl font-body text-sm focus:outline-none focus:border-terra transition-colors bg-white"
                />
              </div>

              {/* Summary */}
              {finalAmount > 0 && (
                <div className="bg-cream-dark rounded-xl p-4 flex items-center justify-between mb-6">
                  <div>
                    <p className="font-body text-sm text-ink/60">Your donation</p>
                    <p className="font-display text-2xl font-semibold text-forest">
                      ${finalAmount.toFixed(2)}
                      {frequency === "monthly" && (
                        <span className="font-body text-sm font-normal text-terra ml-1">/mo</span>
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-ink/40">Goes to programs</p>
                    <p className="font-body text-sm font-semibold text-forest">
                      ${(finalAmount * 0.94).toFixed(2)} (94%)
                    </p>
                  </div>
                </div>
              )}

              <button
                type="button"
                disabled={finalAmount <= 0}
                onClick={() => setStep(2)}
                className="w-full bg-terra hover:bg-terra-light disabled:opacity-40 disabled:cursor-not-allowed text-cream py-3.5 rounded-full font-body text-base font-semibold transition-colors"
              >
                Continue
              </button>
            </div>

            {/* STEP 2 – Program */}
            <div className={step === 2 ? "block" : "hidden"}>
              <h2 className="font-display text-2xl font-semibold text-forest mb-2">
                Direct your donation
              </h2>
              <p className="font-body text-sm text-ink/60 mb-6">
                Choose a program to support, or let us allocate it where it&apos;s needed most.
              </p>

              <div className="space-y-3 mb-8">
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedProgram === ""
                      ? "border-terra bg-terra/5"
                      : "border-sand hover:border-forest/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="program"
                    value=""
                    checked={selectedProgram === ""}
                    onChange={() => setSelectedProgram("")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      selectedProgram === "" ? "border-terra" : "border-sand"
                    }`}
                  >
                    {selectedProgram === "" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-terra" />
                    )}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-forest">
                      Where Needed Most
                    </p>
                    <p className="font-body text-xs text-ink/50">
                      We&apos;ll allocate your gift to the highest-priority programs.
                    </p>
                  </div>
                </label>

                {programs.map((p) => (
                  <label
                    key={p.slug}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedProgram === p.slug
                        ? "border-terra bg-terra/5"
                        : "border-sand hover:border-forest/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="program"
                      value={p.slug}
                      checked={selectedProgram === p.slug}
                      onChange={() => setSelectedProgram(p.slug)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        selectedProgram === p.slug ? "border-terra" : "border-sand"
                      }`}
                    >
                      {selectedProgram === p.slug && (
                        <div className="w-2.5 h-2.5 rounded-full bg-terra" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-semibold text-forest truncate">
                        {p.title}
                      </p>
                      <p className="font-body text-xs text-ink/50 truncate">{p.impact}</p>
                    </div>
                    <span className="shrink-0 text-xs font-body bg-cream-dark px-2 py-1 rounded-full text-ink/50">
                      {p.category}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-sand py-3.5 rounded-full font-body text-sm font-medium text-ink/60 hover:border-forest/30 hover:text-forest transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-terra hover:bg-terra-light text-cream py-3.5 rounded-full font-body text-sm font-semibold transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>

            {/* STEP 3 – Payment */}
            <div className={step === 3 ? "block" : "hidden"}>
              <h2 className="font-display text-2xl font-semibold text-forest mb-6">
                Your details
              </h2>

              {/* Donor info */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                    First Name *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                    Last Name *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Card details */}
              <div className="bg-cream-dark border border-sand/50 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock size={14} className="text-forest" />
                  <span className="font-body text-xs font-semibold text-forest">
                    Secure Payment
                  </span>
                  <span className="font-body text-xs text-ink/40 ml-auto">
                    256-bit SSL Encrypted
                  </span>
                </div>

                <div className="mb-4">
                  <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                    Card Number
                  </label>
                  <input
                    value={form.cardNumber}
                    onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                    className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors bg-white"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                      Expiry
                    </label>
                    <input
                      value={form.expiry}
                      onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                      className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors bg-white"
                      placeholder="MM / YY"
                      maxLength={7}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                      CVC
                    </label>
                    <input
                      value={form.cvc}
                      onChange={(e) => setForm({ ...form, cvc: e.target.value })}
                      className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors bg-white"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-ink/60 block mb-1.5">
                    Name on Card
                  </label>
                  <input
                    value={form.nameOnCard}
                    onChange={(e) => setForm({ ...form, nameOnCard: e.target.value })}
                    className="w-full border border-sand rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-terra transition-colors bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-forest text-cream rounded-2xl p-5 mb-6">
                <h3 className="font-display text-lg font-semibold mb-3">Donation Summary</h3>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-cream/70">Amount</span>
                    <span className="font-semibold">
                      ${finalAmount.toFixed(2)}
                      {frequency === "monthly" && " / month"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/70">Program</span>
                    <span className="font-semibold">{programName || "Where Needed Most"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/70">Frequency</span>
                    <span className="font-semibold capitalize">{frequency}</span>
                  </div>
                  <div className="border-t border-cream/20 pt-2 mt-2 flex justify-between">
                    <span className="text-cream/70">Total Today</span>
                    <span className="font-bold text-terra">${finalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-sand py-3.5 rounded-full font-body text-sm font-medium text-ink/60 hover:border-forest/30 hover:text-forest transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-2 flex-1 bg-terra hover:bg-terra-light text-cream py-3.5 rounded-full font-body text-base font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Lock size={14} />
                  Complete Donation
                </button>
              </div>

              <p className="font-body text-xs text-ink/40 text-center mt-4">
                Your donation is secure and tax-deductible. Horizons is a registered 501(c)(3).
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { icon: "🔒", label: "Secure & Encrypted", sub: "256-bit SSL" },
              { icon: "🏛️", label: "Tax Deductible", sub: "501(c)(3) Registered" },
              { icon: "📋", label: "Full Transparency", sub: "Annual reports published" },
            ].map((t) => (
              <div key={t.label}>
                <p className="text-2xl mb-1">{t.icon}</p>
                <p className="font-body text-xs font-semibold text-forest">{t.label}</p>
                <p className="font-body text-xs text-ink/50">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <DonateForm />
    </Suspense>
  );
}
