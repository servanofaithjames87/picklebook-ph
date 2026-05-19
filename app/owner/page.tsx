import Link from "next/link";

export default function OwnerPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-4">
        Owner Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Manage your pickleball courts, schedules, bookings, and payments.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/courts"
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-green-500"
        >
          <h2 className="text-3xl font-bold text-green-400">
            View Courts
          </h2>
          <p className="text-gray-400 mt-3">
            See all courts listed in the system.
          </p>
        </Link>

        <Link
          href="/schedules"
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-green-500"
        >
          <h2 className="text-3xl font-bold text-green-400">
            Add Schedule
          </h2>
          <p className="text-gray-400 mt-3">
            Add available court time slots for players.
          </p>
        </Link>

        <Link
          href="/booking"
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-green-500"
        >
          <h2 className="text-3xl font-bold text-green-400">
            Available Slots
          </h2>
          <p className="text-gray-400 mt-3">
            View schedules that players can book.
          </p>
        </Link>

        <Link
          href="/bookings"
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-green-500"
        >
          <h2 className="text-3xl font-bold text-green-400">
            Manage Bookings
          </h2>
          <p className="text-gray-400 mt-3">
            View, delete, and update payment status.
          </p>
        </Link>

        <Link
          href="/dashboard"
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-green-500"
        >
          <h2 className="text-3xl font-bold text-green-400">
            Player Dashboard
          </h2>
          <p className="text-gray-400 mt-3">
            View the player-side dashboard.
          </p>
        </Link>
      </div>
    </main>
  );
}