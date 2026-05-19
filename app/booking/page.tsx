"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Schedule = {
  id: number;
  court_name: string;
  schedule_date: string;
  schedule_time: string;
  is_available: boolean;
};

export default function BookingPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  async function fetchSchedules() {
    setLoading(true);
    const { data, error } = await supabase
      .from("court_schedules")
      .select("*")
      .eq("is_available", true)
      .order("schedule_date", { ascending: true });

    if (error) {
      console.error(error);
      setMessage(error.message);
      setSchedules([]);
    } else {
      setSchedules(data || []);
      setMessage(null);
    }

    setLoading(false);
  }

  async function handleBooking(schedule: Schedule) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) {
      alert("You must be signed in to book a schedule.");
      return;
    }

    const { error } = await supabase.from("bookings").insert([
      {
        court_name: schedule.court_name,
        booking_date: schedule.schedule_date,
        booking_time: schedule.schedule_time,
        payment_status: "Pending",
        user_id: user?.id,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    const { error: updateError } = await supabase
      .from("court_schedules")
      .update({ is_available: false })
      .eq("id", schedule.id);

    if (updateError) {
      alert(updateError.message);
      return;
    }

    alert("Booking created successfully. Payment status is Pending.");
    fetchSchedules();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-6">Book a Court</h1>

      {message ? (
        <div className="bg-red-500/10 border border-red-500 text-red-200 p-4 rounded-3xl mb-6">
          {message}
        </div>
      ) : null}

      {loading ? (
        <p className="text-gray-400">Loading available schedules...</p>
      ) : schedules.length === 0 ? (
        <p className="text-gray-400">No available schedules found.</p>
      ) : (
        <div className="grid gap-6">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
            >
              <h2 className="text-2xl font-bold text-green-400">
                {schedule.court_name}
              </h2>
              <p className="text-gray-300 mt-3">Date: {schedule.schedule_date}</p>
              <p className="text-gray-300">Time: {schedule.schedule_time}</p>
              <button
                onClick={() => handleBooking(schedule)}
                className="mt-5 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold"
              >
                Book Schedule
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
