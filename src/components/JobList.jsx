import { useMemo } from "react";
import JobCard from "./JobCard";

const DUMMY_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Nova Labs",
    location: "Remote • US/EU",
    posted: "2d ago",
    salary: "$140k – $180k",
    type: "Full-time",
    description:
      "Lead the development of our web applications using React, TypeScript, and modern tooling.",
    tags: ["React", "TypeScript", "GraphQL", "Tailwind"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "PixelWorks",
    location: "New York, NY",
    posted: "1w ago",
    salary: "$110k – $140k",
    type: "Hybrid",
    description:
      "Own end-to-end product design from research and wireframes to polished UI and prototypes.",
    tags: ["Figma", "UX", "UI", "Prototyping"],
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Insightly",
    location: "London, UK",
    posted: "5d ago",
    salary: "£55k – £70k",
    type: "Full-time",
    description:
      "Turn complex datasets into clear insights and dashboards for stakeholders.",
    tags: ["SQL", "Python", "Tableau", "ETL"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudForge",
    location: "Berlin, DE",
    posted: "3d ago",
    salary: "€85k – €110k",
    type: "Remote",
    description:
      "Build and maintain CI/CD pipelines and infrastructure as code.",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
  },
];

export default function JobList({ query = "", onApply }) {
  const jobs = useMemo(() => {
    if (!query) return DUMMY_JOBS;
    const q = query.toLowerCase();
    return DUMMY_JOBS.filter((j) =>
      [j.title, j.company, j.location, j.description, ...(j.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section id="jobs" className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {query ? `Showing results for "${query}"` : "Featured openings"}
            </h2>
            <p className="text-sm text-slate-600">
              {jobs.length} {jobs.length === 1 ? "role" : "roles"} found
            </p>
          </div>
          <button className="text-sm font-medium text-slate-700 hover:text-indigo-700">
            View all
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={onApply} />
          ))}
        </div>
      </div>
    </section>
  );
}
