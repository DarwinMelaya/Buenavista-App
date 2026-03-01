import Layout from "../../Components/Layout/Layout";
import {
  HiOutlineSpeakerphone,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineShieldCheck,
  HiOutlineExclamation,
} from "react-icons/hi";

const sampleAdvisories = [
  {
    id: 1,
    type: "Advisory",
    office: "Mayor's Office",
    title: "Online appointment for Mayor's Office now available",
    time: "2 hours ago",
    location: "Municipal Hall, Buenavista, Marinduque",
    badgeColor: "bg-emerald-500/20 text-emerald-200 border-emerald-400/60",
  },
  {
    id: 2,
    type: "Service Update",
    office: "Business Permits & Licensing",
    title: "Extended processing hours for business permit renewal",
    time: "Yesterday",
    location: "Ground Floor, Municipal Hall",
    badgeColor: "bg-sky-500/20 text-sky-200 border-sky-400/60",
  },
  {
    id: 3,
    type: "Public Notice",
    office: "Municipal DRRM Office",
    title: "Scheduled power interruption advisory and safety reminders",
    time: "3 days ago",
    location: "All barangays",
    badgeColor: "bg-amber-500/20 text-amber-100 border-amber-400/60",
  },
];

const News = () => {
  return (
    <Layout>
      <main className="relative bg-black pt-6 pb-10 sm:pt-8 sm:pb-14">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Buenavista App
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                News & Advisories
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-emerald-50/90 max-w-xl">
                Stay updated with official announcements from the Municipality
                of Buenavista — including service changes, events, and important
                public safety information.
              </p>
            </div>

            <div className="mt-1 sm:mt-0 flex flex-col gap-2 sm:items-end text-[11px] sm:text-xs text-slate-100/90">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1.5">
                <HiOutlineClock className="h-4 w-4 text-emerald-300" />
                <span>Most recent advisories appear at the top.</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300/90">
                For emergencies, check the <span className="font-semibold text-emerald-200">Emergency</span> tab for
                real-time contacts.
              </p>
            </div>
          </header>

          {/* Highlight banner */}
          <section className="rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-sky-500/10 border border-emerald-400/40 px-4 py-4 sm:px-6 sm:py-5 shadow-lg shadow-emerald-900/40 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-100">
                <HiOutlineSpeakerphone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Official digital bulletin of Buenavista
                </h2>
                <p className="mt-1 text-[11px] sm:text-xs text-emerald-50/90">
                  Posts in this section come from verified municipal and barangay
                  offices to keep you informed with clear, timely information.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px]">
              <span className="inline-flex items-center rounded-full bg-slate-950/80 border border-slate-700/80 px-2.5 py-1 font-medium text-slate-100">
                Service advisories
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-950/80 border border-slate-700/80 px-2.5 py-1 font-medium text-slate-100">
                Public safety updates
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-950/80 border border-slate-700/80 px-2.5 py-1 font-medium text-slate-100">
                Events & announcements
              </span>
            </div>
          </section>

          {/* Main content */}
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] items-start">
            {/* Advisories list */}
            <div className="space-y-3 sm:space-y-4">
              {sampleAdvisories.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl bg-slate-950/85 border border-slate-800 px-4 py-3.5 sm:px-5 sm:py-4 shadow-md shadow-slate-950/70 hover:border-emerald-400/70 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${item.badgeColor}`}
                      >
                        {item.type}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                          {item.office}
                        </p>
                        <h3 className="mt-1 text-xs sm:text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-300/90">
                      <HiOutlineClock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-slate-300/90">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">
                      <HiOutlineLocationMarker className="h-3.5 w-3.5 text-emerald-300" />
                      <span>{item.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5">
                      <HiOutlineShieldCheck className="h-3.5 w-3.5 text-sky-300" />
                      <span>Verified source</span>
                    </span>
                  </div>
                </article>
              ))}

              <p className="pt-1 text-[10px] sm:text-[11px] text-slate-400/90">
                Historical advisories and full details can be accessed in the
                municipal information office or through future versions of this
                app.
              </p>
            </div>

            {/* Side rail */}
            <aside className="space-y-4 sm:space-y-5">
              <div className="rounded-3xl bg-slate-950/85 border border-amber-400/40 px-4 py-4 sm:px-5 sm:py-5 shadow-lg shadow-slate-950/70">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-100">
                    <HiOutlineExclamation className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-semibold text-white">
                      In case of severe weather or emergencies
                    </h2>
                    <p className="mt-1 text-[11px] sm:text-xs text-amber-50/90">
                      Always prioritize official alerts from the Municipal DRRM,
                      PDRRMO, and trusted national agencies. Use this app to
                      confirm instructions, not replace them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950/85 border border-slate-800 px-4 py-4 sm:px-5 sm:py-5 shadow-md shadow-slate-950/70 text-[11px] sm:text-xs text-slate-200/90 space-y-2.5">
                <h2 className="text-xs sm:text-sm font-semibold text-white">
                  Tips for staying informed
                </h2>
                <ul className="space-y-1.5 list-disc list-inside marker:text-emerald-300">
                  <li>Check this tab regularly for municipal advisories.</li>
                  <li>Follow verified LGU pages on social media.</li>
                  <li>
                    Confirm viral posts with official sources before sharing.
                  </li>
                  <li>
                    During typhoons, rely on DRRM and PAGASA bulletins for
                    decisions.
                  </li>
                </ul>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default News;
