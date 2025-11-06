export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">About TalentBridge</h4>
            <p className="mt-3 text-sm text-slate-600">
              A modern job marketplace connecting talented people with companies that care.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Candidates</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-700">Browse jobs</a></li>
              <li><a href="#" className="hover:text-indigo-700">Upload resume</a></li>
              <li><a href="#" className="hover:text-indigo-700">Career tips</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Employers</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-700">Post a job</a></li>
              <li><a href="#" className="hover:text-indigo-700">Talent search</a></li>
              <li><a href="#" className="hover:text-indigo-700">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-indigo-700">About</a></li>
              <li><a href="#" className="hover:text-indigo-700">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-700">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} TalentBridge. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-700">Privacy</a>
            <a href="#" className="hover:text-indigo-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
