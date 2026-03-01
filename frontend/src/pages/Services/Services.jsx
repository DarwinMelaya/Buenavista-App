import Layout from "../../Components/Layout/Layout";
import {
  HiOutlineClipboardCheck,
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlinePhone,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const servicesSections = [
  {
    title: "Everyday Citizen Services",
    icon: HiOutlineClipboardCheck,
    color: "from-emerald-500/15 to-emerald-400/5 border-emerald-400/40",
    items: [
      "Barangay & residency certifications",
      "Indigency & social assistance endorsements",
      "Document requests and status tracking",
    ],
  },
  {
    title: "Household & Community",
    icon: HiOutlineHome,
    color: "from-sky-500/15 to-sky-400/5 border-sky-400/40",
    items: [
      "Household profiling & census updates",
      "Community events and announcements",
      "Feedback for your barangay",
    ],
  },
  {
    title: "Business & Permits",
    icon: HiOutlineBriefcase,
    color: "from-amber-500/15 to-amber-400/5 border-amber-400/40",
    items: [
      "Business permit applications & renewals",
      "Clearances and documentary requirements",
      "Status monitoring of applications",
    ],
  },
  {
    title: "Health & Social Care",
    icon: HiOutlineHeart,
    color: "from-rose-500/15 to-rose-400/5 border-rose-400/40",
    items: [
      "Health advisories from RHU",
      "Maternal & child care programs",
      "Senior citizen & PWD assistance",
    ],
  },
  {
    title: "Safety, DRRM & Emergency",
    icon: HiOutlineLightningBolt,
    color: "from-red-500/15 to-red-400/5 border-red-400/40",
    items: [
      "Disaster preparedness information",
      "Evacuation & relief center updates",
      "Urgent incident reporting (via Emergency tab)",
    ],
  },
  {
    title: "Records & Official Documents",
    icon: HiOutlineDocumentText,
    color: "from-indigo-500/15 to-indigo-400/5 border-indigo-400/40",
    items: [
      "Downloadable forms & guides",
      "Guided checklist per service",
      "Digital copies when available",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <main className="relative bg-black pt-6 pb-10 sm:pt-8 sm:pb-14">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Buenavista Smart Services
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Municipal Services Directory
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-emerald-50/90 max-w-xl">
                Explore the key services you can access through the Buenavista
                App. Start your request online, prepare your documents, and
                follow up without needing to line up at the municipal hall.
              </p>
            </div>

            <div className="mt-2 sm:mt-0 flex flex-col sm:items-end gap-2 text-[11px] sm:text-xs text-slate-100/90">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-emerald-400/40 px-3 py-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold">
                  ✓
                </span>
                <span className="font-medium">
                  One portal for local government services
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300/90">
                For urgent cases, go to the <span className="font-semibold text-emerald-200">Emergency</span> tab in the
                navigation bar.
              </p>
            </div>
          </header>

          {/* Intro cards */}
          <section className="grid gap-4 sm:gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] items-stretch">
            <div className="rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-teal-400/10 border border-emerald-400/40 px-4 py-4 sm:px-6 sm:py-5 shadow-lg shadow-emerald-900/40 space-y-3 sm:space-y-4">
              <h2 className="text-sm sm:text-base font-semibold text-white">
                How services work in Buenavista App
              </h2>
              <p className="text-xs sm:text-sm text-emerald-50/90">
                Each service is designed to match actual municipal processes in
                Buenavista — from barangay clearances to business permits. We
                guide you step-by-step so you know what to expect.
              </p>
              <ul className="text-[11px] sm:text-xs text-emerald-50/90 space-y-1.5">
                <li>• View requirements and processing timelines before you go.</li>
                <li>• Submit requests online (when available) or prepare documents in advance.</li>
                <li>• Track the status of your applications from your Home dashboard.</li>
              </ul>
            </div>

            <aside className="rounded-3xl bg-slate-950/80 border border-sky-400/40 px-4 py-4 sm:px-5 sm:py-5 shadow-xl shadow-slate-950/70 flex flex-col gap-3 justify-between">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-sky-200">
                  <HiOutlinePhone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    Need help choosing the right service?
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-200/90">
                    Start a request in the category that feels closest to your
                    concern. Staff at the municipal or barangay level will help
                    route your request correctly.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-[10px] font-medium text-slate-100">
                  Frequently Asked Questions
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-[10px] font-medium text-slate-100">
                  Service guides per office
                </span>
              </div>
            </aside>
          </section>

          {/* Services grid */}
          <section className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Service categories
              </h2>
              <p className="text-[10px] sm:text-[11px] text-slate-300/90">
                These categories will appear as actions in your Home dashboard.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {servicesSections.map((section) => {
                const Icon = section.icon;
                const isBusinessPermits = section.title === "Business & Permits";

                const card = (
                  <article
                    key={section.title}
                    className={`group rounded-3xl bg-gradient-to-br ${section.color} px-4 py-4 sm:px-5 sm:py-5 border shadow-md shadow-slate-950/70 flex flex-col gap-3 ${
                      isBusinessPermits ? "cursor-pointer hover:border-emerald-400/80" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-slate-950/70 border border-slate-700/80 flex items-center justify-center text-emerald-200 group-hover:border-emerald-400/80 transition-colors">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-white">
                          {section.title}
                        </h3>
                        <p className="mt-0.5 text-[10px] sm:text-[11px] text-emerald-50/85">
                          Tap the related tiles from your Home screen to start a
                          request in this category.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-1 space-y-1.5 text-[10px] sm:text-[11px] text-slate-50/95">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-1.5">
                          <span className="mt-0.5 h-1 w-1 rounded-full bg-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );

                if (isBusinessPermits) {
                  return (
                    <Link key={section.title} to="/services/business-permits" className="block">
                      {card}
                    </Link>
                  );
                }

                return card;
              })}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}