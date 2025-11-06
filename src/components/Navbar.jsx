import { Briefcase, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
            <Briefcase size={20} />
          </span>
          <span className="font-semibold tracking-tight">TalentBridge</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a className="hover:text-indigo-600" href="#jobs">Jobs</a>
          <a className="hover:text-indigo-600" href="#companies">Companies</a>
          <a className="hover:text-indigo-600" href="#about">About</a>
          <a className="hover:text-indigo-600" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 md:inline-flex">
            Post a job
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <User size={16} /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
