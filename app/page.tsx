export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-green-400">
          PickleBook PH
        </h1>

        <div className="flex gap-4">
          <button className="hover:text-green-400">
            Login
          </button>

          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl font-semibold">
            Register
          </button>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-6xl font-bold max-w-4xl leading-tight mb-6">
          Book Pickleball Courts
          <span className="text-green-400"> Anytime, Anywhere</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Easily reserve courts, manage schedules, track payments,
          and connect with players across the Philippines.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-semibold">
            Book a Court
          </button>

          <button className="border border-gray-500 hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg font-semibold">
            Explore Courts
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">
            Easy Booking
          </h3>

          <p className="text-gray-400">
            Reserve pickleball courts in just a few clicks with real-time availability.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">
            Smart Scheduling
          </h3>

          <p className="text-gray-400">
            Court owners can manage schedules and avoid double bookings easily.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">
            Payment Tracking
          </h3>

          <p className="text-gray-400">
            Track reservations, payments, and booking history in one dashboard.
          </p>
        </div>

      </section>

    </main>
  );
}