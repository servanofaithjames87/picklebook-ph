"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookingsPage() {

  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setBookings(data || []);
    }
  }

  async function deleteBooking(id: number) {

    const confirmed = confirm("Delete this booking?");

    if (!confirmed) return;

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Booking deleted!");
      fetchBookings();
    }
  }

  async function markAsPaid(id: number) {

    const { error } = await supabase
      .from("bookings")
      .update({
        payment_status: "Paid",
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Payment updated!");
      fetchBookings();
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-6">
        All Bookings
      </h1>

      <div className="grid gap-4">

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
          >

            <h2 className="text-2xl font-bold text-green-400">
              {booking.court_name}
            </h2>

            <p className="text-gray-300 mt-2">
              Date: {booking.booking_date}
            </p>

            <p className="text-gray-300">
              Time: {booking.booking_time}
            </p>

            <p className="text-yellow-400 font-semibold mt-2">
              Payment: {booking.payment_status}
            </p>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => markAsPaid(booking.id)}
                className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-semibold"
              >
                Mark as Paid
              </button>

              <button
                onClick={() => deleteBooking(booking.id)}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold"
              >
                Delete Booking
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}