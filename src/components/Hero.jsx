import { Rocket, Search } from "lucide-react";

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">
            <Rocket size={14} /> Your next role starts here
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Find the right job. Build your dream career.
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Discover curated opportunities from top companies. Filter by title, skills, and
            location to land a role you’ll love.
          </p>

          <div className="mt-6 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
                <Search size={16} className="text-slate-500" />
                <input
                  onChange={(e) => onSearch?.(e.target.value)}
                  placeholder="Search job titles, skills, or companies"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                Search
              </button>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
              <span>Popular:</span>
              {[
                "Frontend Developer",
                "React",
                "Product Manager",
                "Data Analyst",
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearch?.(tag)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 hover:border-indigo-300 hover:text-indigo-700"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-0 bg-gradient-to-tr from-indigo-100/70 to-pink-100/50 blur-3xl" />
          <div className="relative z-10 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="People collaborating"
              className="h-72 w-full rounded-lg object-cover sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
