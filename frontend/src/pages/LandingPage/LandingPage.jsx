import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />

        <div className="relative z-10">
          {/* Top Nav */}
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-900/80 shadow-lg ring-2 ring-emerald-400/70 flex items-center justify-center">
                <img
                  src="/img/logo.png"
                  alt="Bayan ng Buenavista Seal"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                  Municipality of Buenavista
                </p>
                <p className="text-sm font-semibold text-white">
                  Buenavista Smart Services Portal
                </p>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#services"
                className="hover:text-emerald-300 transition-colors"
              >
                Citizen Services
              </a>
              <a
                href="#news"
                className="hover:text-emerald-300 transition-colors"
              >
                Advisories
              </a>
              <a
                href="#offices"
                className="hover:text-emerald-300 transition-colors"
              >
                Offices
              </a>
              <button
                className="rounded-full border border-emerald-300/60 bg-slate-900/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-100 hover:bg-emerald-400/10 hover:border-emerald-300 transition-all"
                onClick={() => navigate("/login")}
              >
                Log in to Buenavista App
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300/60 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-50 hover:bg-slate-800/80 transition-colors"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle main menu"
              aria-expanded={mobileOpen}
            >
              <span className="mr-2">Menu</span>
              <span className="flex flex-col gap-[3px]">
                <span className="h-[2px] w-4 bg-slate-100 rounded-full" />
                <span className="h-[2px] w-4 bg-slate-100 rounded-full" />
              </span>
            </button>
          </nav>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-3 space-y-2 text-sm">
              <a
                href="#services"
                className="block rounded-lg bg-slate-950/75 border border-slate-700/80 px-3 py-2 text-slate-50 hover:bg-slate-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Citizen Services
              </a>
              <a
                href="#news"
                className="block rounded-lg bg-slate-950/75 border border-slate-700/80 px-3 py-2 text-slate-50 hover:bg-slate-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Advisories
              </a>
              <a
                href="#offices"
                className="block rounded-lg bg-slate-950/75 border border-slate-700/80 px-3 py-2 text-slate-50 hover:bg-slate-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Offices
              </a>
              <button
                className="w-full rounded-full border border-emerald-300/70 bg-emerald-400/90 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 shadow-md hover:bg-emerald-300 transition-colors"
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/login");
                }}
              >
                Log in to Buenavista App
              </button>
            </div>
          )}

          {/* Hero Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 lg:pt-16 lg:pb-28 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-400/40 mb-4">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Digital services for every Buenavisteño
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                One gateway for all
                <span className="block text-emerald-300">
                  Buenavista government services.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-100/90 leading-relaxed">
                Access permits, documents, emergency alerts, and local programs
                in a single, secure platform. The Buenavista App connects you to
                your municipality, wherever you are.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  onClick={() => navigate("/login")}
                >
                  Open Buenavista Web Portal
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-full border border-slate-100/60 bg-slate-900/40 px-4 py-2 text-xs sm:text-sm font-medium text-slate-50 hover:bg-slate-800/70 transition-colors"
                  onClick={() => navigate("/signup")}
                >
                  Create Buenavista Account
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-xs text-slate-100/80">
                <div>
                  <p className="font-semibold text-emerald-200">24/7</p>
                  <p>Emergency & disaster updates</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-200">15+</p>
                  <p>Online government services</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-200">Secure</p>
                  <p>Gov-issued digital identity</p>
                </div>
              </div>
            </div>

            {/* Quick Access Panel */}
            <section
              aria-label="Quick access services"
              className="bg-slate-950/85 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl shadow-slate-900/70 p-5 sm:p-6 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-emerald-200 uppercase tracking-[0.25em]">
                  QUICK ACCESS
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Start a request in under a minute
                </p>
              </div>

              <div className="grid gap-3 text-xs">
                <button className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-3 hover:border-emerald-400/70 hover:bg-slate-900/90 transition-colors text-left">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Barangay Clearance
                    </p>
                    <p className="text-slate-300/90">
                      Request and track your barangay documents.
                    </p>
                  </div>
                  <span className="ml-3 h-7 w-7 rounded-full bg-emerald-400/80 flex items-center justify-center text-slate-950 text-xs font-bold">
                    Go
                  </span>
                </button>

                <button className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-3 hover:border-emerald-400/70 hover:bg-slate-900/90 transition-colors text-left">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Business Permit
                    </p>
                    <p className="text-slate-300/90">
                      Apply, renew, and pay online for permits.
                    </p>
                  </div>
                  <span className="ml-3 h-7 w-7 rounded-full bg-emerald-400/80 flex items-center justify-center text-slate-950 text-xs font-bold">
                    Go
                  </span>
                </button>

                <button className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-3 hover:border-emerald-400/70 hover:bg-slate-900/90 transition-colors text-left">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Report a Concern
                    </p>
                    <p className="text-slate-300/90">
                      Submit service requests, incidents, and feedback.
                    </p>
                  </div>
                  <span className="ml-3 h-7 w-7 rounded-full bg-emerald-400/80 flex items-center justify-center text-slate-950 text-xs font-bold">
                    Go
                  </span>
                </button>
              </div>

              <div className="border-t border-slate-800/80 pt-4 flex flex-col gap-3 text-xs text-slate-200/90">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <p>
                    <span className="font-semibold text-emerald-200">
                      Live Advisory:
                    </span>{" "}
                    All systems operational. Expect isolated brief maintenance
                    between 1–3 AM.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-slate-600/70 bg-slate-900/60 px-2 py-1 text-[11px] font-medium tracking-wide uppercase">
                    Transparent Governance
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-600/70 bg-slate-900/60 px-2 py-1 text-[11px] font-medium tracking-wide uppercase">
                    Citizen-Centered Design
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="flex-1 bg-slate-950">
        <section
          id="services"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-emerald-300 uppercase">
                CORE SERVICES
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1">
                What you can do in the Buenavista App
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-300/90">
              Built to mirror the physical help desk, with the convenience and
              speed of a modern digital portal inspired by leading LGU apps like
              Naga.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                DOCUMENTS
              </p>
              <h3 className="font-semibold text-white">
                Civil & Barangay Documents
              </h3>
              <p className="text-slate-300/90">
                Request birth certificates, residency, indigency, and other
                official records from partnered offices.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                BUSINESS
              </p>
              <h3 className="font-semibold text-white">Permits & Taxes</h3>
              <p className="text-slate-300/90">
                Process business permits, real property dues, and local fees
                with status tracking and digital receipts.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                COMMUNITY
              </p>
              <h3 className="font-semibold text-white">
                Programs & Assistance
              </h3>
              <p className="text-slate-300/90">
                View and apply for social programs, scholarships, and livelihood
                initiatives in just a few taps.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                EMERGENCY
              </p>
              <h3 className="font-semibold text-white">
                Disaster & Safety Alerts
              </h3>
              <p className="text-slate-300/90">
                Receive early warnings, evacuation guides, and live advisories
                for weather and local incidents.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                PARTICIPATION
              </p>
              <h3 className="font-semibold text-white">
                Feedback & Governance
              </h3>
              <p className="text-slate-300/90">
                Join consultations, answer surveys, and track responses to your
                feedback from LGU offices.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2">
              <p className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em]">
                TRANSPARENCY
              </p>
              <h3 className="font-semibold text-white">Open Data & Reports</h3>
              <p className="text-slate-300/90">
                Browse budget reports, project updates, and public information
                bulletins in a single, searchable space.
              </p>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[11px] sm:text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Municipality of Buenavista. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <span>Data privacy and security compliant.</span>
            <span className="text-slate-300">Powered by Buenavista App.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
