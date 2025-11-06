import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => setQuery(value);
  const handleApply = (job) => {
    alert(`Applied to ${job.title} at ${job.company}!`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />
        <JobList query={query} onApply={handleApply} />

        <section id="companies" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-semibold text-slate-900">
              Trusted by top companies
            </h2>
            <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
              {["Stripe", "Airbnb", "Shopify", "Notion", "Figma", "Canva"].map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-pink-50 p-8">
              <h3 className="text-lg font-semibold text-slate-900">Why TalentBridge?</h3>
              <p className="mt-3 text-slate-700">
                We combine powerful search with curated listings to save you time and help you find a
                role that fits. Set alerts, apply in one click, and track your progress.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Curated jobs", desc: "High-signal opportunities only" },
                  { title: "1-click apply", desc: "Share your profile instantly" },
                  { title: "Smart alerts", desc: "Never miss a role you want" },
                ].map((f) => (
                  <li key={f.title} className="rounded-lg border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                    <p className="text-sm text-slate-600">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
