"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CourtsPage() {

  const [courts, setCourts] = useState<any[]>([]);

  useEffect(() => {
    fetchCourts();
  }, []);

  async function fetchCourts() {

    const { data, error } = await supabase
      .from("courts")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setCourts(data || []);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold text-green-400 mb-8">
        Available Courts
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {courts.map((court) => (

          <div
            key={court.id}
            className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
          >

            <h2 className="text-3xl font-bold text-green-400">
              {court.name}
            </h2>

            <p className="text-gray-400 mt-3">
              {court.location}
            </p>

            <p className="text-green-400 font-bold mt-3">
              {court.price}
            </p>

            <a
              href="/booking"
              className="inline-block mt-5 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold"
            >
              Book Now
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}