"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Building2,
  CheckCircle,
  Phone,
  Sparkles,
  User2,
  ArrowRight,
  Mail,
} from "lucide-react";

const planOptions = [
  {
    id: "starter",
    name: "Starter",
    price: "$99/mo",
    perks: ["1 number", "Bookings lite", "EN voice + SMS"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$249/mo",
    perks: ["Multi-channel", "Campaigns + A/B", "EN + ES auto routing"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$499/mo",
    perks: [
      "Dedicated success engineer",
      "Priority provisioning",
      "Unlimited campaigns",
    ],
  },
];

export default function SignUpPage() {
  const router = useRouter();
  const [plan, setPlan] = useState("growth");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    setTimeout(() => router.push("/app/home"), 1100);
  };

  return (
    <main className="min-h-screen bg-[#05070b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-[#66bb6a]/30 blur-[200px] -top-16 left-0" />
        <div className="absolute w-[500px] h-[500px] bg-[#ef5350]/25 blur-[180px] bottom-0 right-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1c2434,transparent)] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 md:px-10 lg:flex-row lg:gap-16 lg:py-16">
        <div className="flex flex-1 flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/60">
            <Sparkles size={16} className="text-[#c0a85b]" />
            Season-ready in under 5 minutes
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            Spin up your{" "}
            <span className="text-[#66bb6a]">holiday AI frontline</span>.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            We’ll verify your brand, provision compliant numbers, and preload
            hours, FAQs, and bilingual flows so you never miss another festive
            booking.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {planOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPlan(option.id)}
                className={`rounded-2xl border px-5 py-5 text-left transition ${
                  plan === option.id
                    ? "border-[#66bb6a] bg-[#66bb6a]/10"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{option.name}</p>
                  <span className="text-sm text-white/60">{option.price}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  {option.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#66bb6a]" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>

        <section className="mt-10 flex flex-1 flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10 lg:mt-0">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Create workspace
            </p>
            <h2 className="text-3xl font-semibold">Request access</h2>
            <p className="text-white/65">
              We’ll review your details, send verification links, and route you
              straight into ops once approved.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-white/70">Full name</span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-[#66bb6a]">
                  <User2 className="text-white/40" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Ariana Winters"
                    className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/70">Business name</span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-[#66bb6a]">
                  <Building2 className="text-white/40" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="North Pole Café"
                    className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm text-white/70">Work email</span>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-[#66bb6a]">
                <Mail className="text-white/40" size={18} />
                <input
                  required
                  type="email"
                  placeholder="owner@northpolecafe.com"
                  className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>
            </label>

            <label className="space-y-2">
              <span className="text-sm text-white/70">
                Phone (for provisioning updates)
              </span>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-[#66bb6a]">
                <Phone className="text-white/40" size={18} />
                <input
                  required
                  type="tel"
                  placeholder="+1 (909) 555-1234"
                  className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>
            </label>

            <label className="space-y-2">
              <span className="text-sm text-white/70">
                Tell us what you need
              </span>
              <textarea
                rows={3}
                placeholder="Bookings, SMS campaigns, bilingual hotline…"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#66bb6a] focus:outline-none"
              />
            </label>

            <input type="hidden" name="plan" value={plan} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#66bb6a] to-[#2e7d32] px-4 py-3 text-lg font-semibold text-black shadow-lg shadow-[#66bb6a]/30 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting ? "Submitting request…" : "Launch verification"}
              <ArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-white/60">
            Already onboarded?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#ef5350] hover:text-white"
            >
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
