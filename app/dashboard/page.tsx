export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Player Dashboard
      </h1>

      <p className="text-gray-300 mb-8">
        Welcome to PickleBook PH. Here you can view courts, manage bookings, and check payments.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Book a Court</h2>
          <p className="text-gray-400">Find available pickleball courts and reserve your schedule.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-green-400 mb-2">My Bookings</h2>
          <p className="text-gray-400">View your upcoming and past court reservations.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Payments</h2>
          <p className="text-gray-400">Track your payment status and booking confirmations.</p>
        </div>
      </div>
    </main>
  );
}