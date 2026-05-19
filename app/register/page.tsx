"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    try {
      // Replace this block with your registration logic.
      // For example, use Supabase Auth or your own API endpoint.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setMessage("Registration successful! Please check your email for next steps.");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl shadow-black/30">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-2">Create an account</p>
          <h1 className="text-4xl font-bold">Register for PickleBook PH</h1>
          <p className="mt-3 text-gray-400">Sign up to reserve courts, manage bookings, and connect with players.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Doe"
              required
              className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-300">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter a strong password"
              required
              minLength={8}
              className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-green-500 px-5 py-3 text-lg font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account…" : "Create account"}
          </button>
        </form>

        {message ? (
          <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-100">
            {message}
          </div>
        ) : null}
      </section>
    </main>
  );
}
