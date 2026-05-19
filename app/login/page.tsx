"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 w-full max-w-md">
        <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 p-4 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}