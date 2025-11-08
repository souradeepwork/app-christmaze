"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Calendar,
} from "lucide-react";

const heroHighlights = [
  {
    icon: <PhoneCall size={18} />,
    label: "Capture every holiday call",
  },
  {
    icon: <Calendar size={18} />,
    label: "Bookings + promos auto-sync",
  },
  {
    icon: <ShieldCheck size={18} />,
    label: "Verified & compliant",
  },
];

export default function SignInPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    setTimeout(() => {
      router.push("/app/home");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#05070b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#ef5350]/30 blur-[160px] -top-24 -right-24" />
        <div className="absolute w-[500px] h-[500px] bg-[#66bb6a]/25 blur-[180px] bottom-0 left-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c2434,transparent)] opacity-40" />
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        <section className="hidden lg:flex flex-col justify-between border-r border-white/10 p-12">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-white/70">
              <Sparkles className="text-[#c0a85b]" size={20} />
              Christmaze Platform
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-tight">
              Your AI-powered
              <span className="text-[#ef5350]"> Christmas hotline</span> is
              waiting.
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              Operate a full contact center, booking desk, and promo engine
              without hiring seasonal staff. Christmaze routes voice, SMS, and AI
              flows so you can sleigh Q4.
            </p>

            <div className="mt-8 grid gap-4">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ef5350]/20 text-[#ef5350]">
                    {item.icon}
                  </div>
                  <p className="text-white/80 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-white/60">
              Trusted by local operators across LA & the Inland Empire
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                580K+ holiday conversations
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                99.98% uptime
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              <ShieldCheck size={16} />
              Verified partners get instant provisioning.
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Sign in to Christmaze</h2>
              <p className="text-white/60">
                Enter your workspace credentials to jump into the real-time ops
                console.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <label className="group block space-y-2">
                <span className="text-sm font-medium text-white/70">
                  Work email
                </span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-[#ef5350]">
                  <Mail className="text-white/40" size={18} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="owner@northpolecafe.com"
                    className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                    aria-label="Work email"
                  />
                </div>
              </label>

              <label className="group block space-y-2">
                <span className="flex items-center justify-between text-sm font-medium text-white/70">
                  Password
                  <Link
                    href="#"
                    className="text-xs text-[#66bb6a] hover:text-white"
                  >
                    Forgot?
                  </Link>
                </span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-[#ef5350]">
                  <Lock className="text-white/40" size={18} />
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                    aria-label="Password"
                  />
                </div>
              </label>

              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/30 bg-transparent text-[#ef5350] focus:ring-[#ef5350]"
                  defaultChecked
                />
                Keep me signed in on this device
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ef5350] to-[#c62828] px-4 py-3 text-lg font-semibold shadow-lg shadow-[#ef5350]/30 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? "Routing to ops center…" : "Sign in & launch ops"}
                <ArrowRight className="transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-white/60">
              Need an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-[#66bb6a] hover:text-white"
              >
                Request access
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
