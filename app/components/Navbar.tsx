"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.replace("/login");
  }

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800 bg-black text-white">
      <Link href="/" className="text-2xl font-bold text-green-400 whitespace-nowrap">
        PickleBook PH
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/courts" className="hover:text-green-400">Courts</Link>
        <Link href="/booking" className="hover:text-green-400">Book</Link>
        <Link href="/bookings" className="hover:text-green-400">Bookings</Link>
        <Link href="/schedules" className="hover:text-green-400">Schedules</Link>
        <Link href="/owner" className="hover:text-green-400">Owner</Link>
        <Link href="/dashboard" className="hover:text-green-400">
          Dashboard
        </Link>
        <Link href="/my-bookings" className="hover:text-green-400">
          My Bookings
        </Link>
        <Link href="/login" className="hover:text-green-400">
          Login
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-semibold"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}