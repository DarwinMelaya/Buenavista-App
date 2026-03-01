import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import {
  HiOutlineViewGrid,
  HiOutlineBookOpen,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineDotsHorizontal,
  HiOutlineBell,
} from "react-icons/hi";

const getTimeGreeting = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 1 && hour < 12) {
    // 1:00am - 11:59am (covers 1:00am - 10:00am in spec, plus 11am)
    return "Magandang Umaga";
  }

  if (hour === 12) {
    // 12:00pm - 12:59pm
    return "Magandang Tanghali";
  }

  if (hour >= 13 && hour < 19) {
    // 1:00pm - 6:59pm (spec: 1:00pm - 7:00pm, treat 7pm as Gabi)
    return "Magandang Hapon";
  }

  // 7:00pm - 11:59pm and 12:00am - 12:59am fallback
  return "Magandang Gabi";
};

const Home = () => {
  const greeting = getTimeGreeting();
  const [showMoreActions, setShowMoreActions] = useState(false);

  return (
    <Layout>
      {/* Fixed top utility bar with search + notifications */}
      <div className="fixed top-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex justify-end">
          <div className="flex items-center gap-2 w-full sm:w-auto sm:min-w-[320px]">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search permits, services, advisories..."
                className="w-full rounded-full bg-slate-900/90 border border-slate-700/80 px-4 py-2 pl-9 pr-4 text-xs sm:text-sm text-slate-50 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border border-slate-400" />
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 hover:border-emerald-400/70 hover:text-emerald-300 transition-colors"
              aria-label="Notifications"
            >
              <HiOutlineBell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero / Dashboard Shell - aligned with LandingPage styling */}
      <header className="relative isolate overflow-hidden pt-14 sm:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />

        <div className="relative z-10">
          {/* Page header */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-900/80 shadow-lg ring-2 ring-emerald-400/70 flex items-center justify-center">
                <img
                  src="/img/logo.png"
                  alt="Bayan ng Buenavista Seal"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Buenavista Smart Services
                </p>
                <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {greeting}, Buenavisteño!
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-100/90">
                  How can we help you today?
                </p>
              </div>
            </div>

            {/* Right side reserved for future user account info */}
            <div className="w-full sm:w-auto sm:min-w-[200px]" />
          </div>

          {/* Main layout */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 lg:pb-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
            {/* Left column - overview cards */}
            <main className="space-y-5">
              {/* Welcome highlight */}
              <section className="rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-teal-400/10 border border-emerald-400/40 px-4 py-4 sm:px-6 sm:py-5 shadow-lg shadow-emerald-900/40">
                <p className="text-[11px] font-medium text-emerald-200 uppercase tracking-[0.18em]">
                  Buenavista, Marinduque
                </p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  Your digital desk for local services
                </p>
                <p className="mt-2 text-xs sm:text-sm text-emerald-50/90 max-w-md">
                  View your requests, follow up on permits, and stay updated
                  with advisories from your municipality in one secure, unified
                  portal.
                </p>
              </section>

              {/* Quick stats / highlights */}
              <section className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-950/70 border border-slate-800 px-3 py-3 flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                    My Requests
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    3
                  </p>
                  <p className="text-[11px] text-slate-300/90">
                    Active applications in progress
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 border border-slate-800 px-3 py-3 flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                    My Notices
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    1
                  </p>
                  <p className="text-[11px] text-slate-300/90">
                    New advisory from your barangay
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 border border-slate-800 px-3 py-3 flex flex-col gap-1 md:col-span-1 col-span-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                    Account & Services Status
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-emerald-200">
                    All municipal systems operational
                  </p>
                  <p className="text-[11px] text-slate-300/90">
                    Expect brief maintenance between 1–3 AM.
                  </p>
                </div>
              </section>

              {/* Help card */}
              <section>
                <div className="rounded-3xl bg-indigo-700/90 border border-indigo-400/60 px-4 py-4 sm:px-6 sm:py-5 text-white shadow-xl shadow-slate-950/70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md">
                    <h2 className="text-sm sm:text-base font-semibold">
                      Help us improve Buenavista
                    </h2>
                    <p className="mt-1 text-[11px] sm:text-xs text-indigo-100/90">
                      Spotted an issue in your area? Send a report so we can act
                      on it quickly and transparently.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      className="flex-1 rounded-full bg-white/95 px-3 py-2 text-xs sm:text-sm font-semibold text-indigo-800 shadow-sm hover:bg-white"
                    >
                      View reports
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-full bg-orange-500 px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-orange-400"
                    >
                      Report an issue
                    </button>
                  </div>
                </div>
              </section>
            </main>

            {/* Right column - services "app" style */}
            <aside className="w-full rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-emerald-500/25 shadow-2xl shadow-slate-900/80 p-4 sm:p-5 space-y-4">
              <div>
                <p className="text-[11px] font-semibold text-emerald-200 uppercase tracking-[0.25em]">
                  QUICK ACTIONS
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  What would you like to do?
                </p>
              </div>

              {/* Services grid - responsive with icons */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center text-[11px] sm:text-xs">
                {[
                  // Main quick actions
                  {
                    label: "Services",
                    color: "bg-orange-500",
                    icon: HiOutlineViewGrid,
                  },
                  {
                    label: "Citizen Guide",
                    color: "bg-amber-500",
                    icon: HiOutlineBookOpen,
                  },
                  {
                    label: "e-Services",
                    color: "bg-rose-500",
                    icon: HiOutlineDesktopComputer,
                  },
                  {
                    label: "Emergency",
                    color: "bg-red-500",
                    icon: HiOutlineLightningBolt,
                  },
                  {
                    label: "Business",
                    color: "bg-emerald-500",
                    icon: HiOutlineBriefcase,
                  },
                  // Extra actions appear in the grid when expanded
                  ...(showMoreActions
                    ? [
                        {
                          label: "Students",
                          color: "bg-sky-500",
                          icon: HiOutlineAcademicCap,
                        },
                        {
                          label: "Startup",
                          color: "bg-violet-500",
                          icon: HiOutlineLightBulb,
                        },
                        {
                          label: "i-Engage",
                          color: "bg-indigo-500",
                          icon: HiOutlineDotsHorizontal,
                        },
                      ]
                    : []),
                  // Toggle is always last
                  {
                    label: showMoreActions ? "View Less" : "View All",
                    color: "bg-slate-400",
                    icon: HiOutlineDotsHorizontal,
                    isToggle: true,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isViewAll = item.isToggle;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="flex flex-col items-center gap-1 rounded-2xl bg-slate-900/70 border border-slate-800 px-2 py-2 hover:border-emerald-400/70 hover:bg-slate-900/90 transition-colors"
                      onClick={
                        isViewAll
                          ? () => setShowMoreActions((prev) => !prev)
                          : undefined
                      }
                      aria-expanded={isViewAll ? showMoreActions : undefined}
                    >
                      <span
                        className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-opacity-10 ${item.color} shadow-sm`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-100 leading-tight">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
