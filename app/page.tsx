export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-6xl font-bold max-w-4xl leading-tight mb-6">
          Book Pickleball Courts
          <span className="text-green-400"> Anytime, Anywhere</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Easily reserve courts, manage schedules, track payments, and connect with players across the Philippines.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/booking" className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-semibold">
            Book a Court
          </a>

          <a href="/courts" className="border border-gray-500 hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg font-semibold">
            Explore Courts
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">Easy Booking</h3>
          <p className="text-gray-400">Reserve pickleball courts in just a few clicks with real-time availability.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">Smart Scheduling</h3>
          <p className="text-gray-400">Court owners can manage schedules and avoid double bookings easily.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3 text-green-400">Payment Tracking</h3>
          <p className="text-gray-400">Track reservations, payments, and booking history in one dashboard.</p>
        </div>
      </section>
    </main>
  );
}