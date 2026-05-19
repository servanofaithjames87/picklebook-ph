"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SchedulesPage() {
  const [courtName, setCourtName] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  async function addSchedule() {
    const { error } = await supabase.from("court_schedules").insert([
      {
        court_name: courtName,
        schedule_date: scheduleDate,
        schedule_time: scheduleTime,
        is_available: true,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Schedule added successfully!");
      setCourtName("");
      setScheduleDate("");
      setScheduleTime("");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-8">
        Add Schedule Slot
      </h1>

      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 max-w-xl">
        <input
          type="text"
          placeholder="Court Name"
          value={courtName}
          onChange={(e) => setCourtName(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4"
        />

        <input
          type="date"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-4"
        />

        <input
          type="time"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-6"
        />

        <button
          onClick={addSchedule}
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold"
        >
          Add Schedule
        </button>
      </div>
    </main>
  );
}