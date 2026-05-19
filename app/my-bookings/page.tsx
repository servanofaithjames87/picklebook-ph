"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchMyBookings();
  }, []);

  async function fetchMyBookings() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setBookings(data);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-8">
        My Bookings
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
          >
            <h2 className="text-3xl font-bold text-green-400">
              {booking.court_name}
            </h2>

            <p className="text-gray-300 mt-4">
              Date: {booking.booking_date}
            </p>

            <p className="text-gray-300">
              Time: {booking.booking_time}
            </p>

            <p className="text-yellow-400 font-bold mt-3">
              Payment: {booking.payment_status}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}