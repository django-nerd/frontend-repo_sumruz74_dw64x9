import { MapPin, Clock, DollarSign, Building2 } from "lucide-react";

export default function JobCard({ job, onApply }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
            <Building2 size={20} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
            <p className="text-sm text-slate-600">{job.company}</p>
          </div>
        </div>
        <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
          {job.type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <div className="inline-flex items-center gap-1">
          <MapPin size={16} className="text-slate-400" /> {job.location}
        </div>
        <div className="inline-flex items-center gap-1">
          <Clock size={16} className="text-slate-400" /> {job.posted}
        </div>
        {job.salary && (
          <div className="inline-flex items-center gap-1">
            <DollarSign size={16} className="text-slate-400" /> {job.salary}
          </div>
        )}
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-slate-600">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags?.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-indigo-700 hover:underline">
          View details
        </a>
        <button
          onClick={() => onApply?.(job)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
