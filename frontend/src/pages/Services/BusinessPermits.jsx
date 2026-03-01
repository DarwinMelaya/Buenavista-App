import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import {
  HiOutlineBriefcase,
  HiOutlineDocumentAdd,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineCreditCard,
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
  HiOutlineChevronRight,
  HiOutlineDownload,
} from "react-icons/hi";

// Sample transactions (would come from API in real app)
const sampleTransactions = [
  {
    id: "BP-2025-0001245",
    type: "New Business Permit",
    businessName: "Sari-Sari Store - Buenavista",
    status: "For Payment",
    statusColor: "bg-amber-500/20 text-amber-200 border-amber-400/60",
    date: "Feb 28, 2025",
    amount: "₱2,450.00",
  },
  {
    id: "BP-2024-0000891",
    type: "Renewal",
    businessName: "Marinduque Pasalubong Center",
    status: "Approved",
    statusColor: "bg-emerald-500/20 text-emerald-200 border-emerald-400/60",
    date: "Jan 15, 2025",
    amount: "₱3,100.00",
  },
  {
    id: "BP-2025-0001198",
    type: "New Business Permit",
    businessName: "Juan's Repair Shop",
    status: "Under Review",
    statusColor: "bg-sky-500/20 text-sky-200 border-sky-400/60",
    date: "Mar 1, 2025",
    amount: "Pending",
  },
];

const serviceActions = [
  {
    title: "Apply for New Permit",
    description: "Start a new business permit application",
    icon: HiOutlineDocumentAdd,
    color: "from-emerald-500/20 to-emerald-400/10 border-emerald-400/50",
    action: "apply",
  },
  {
    title: "Renew Permit",
    description: "Renew your existing business permit",
    icon: HiOutlineRefresh,
    color: "from-sky-500/20 to-sky-400/10 border-sky-400/50",
    action: "renew",
  },
  {
    title: "Track Application",
    description: "Check status using reference number",
    icon: HiOutlineSearch,
    color: "from-amber-500/20 to-amber-400/10 border-amber-400/50",
    action: "track",
  },
  {
    title: "Pay Fees Online",
    description: "Pay assessed fees via e-wallet or card",
    icon: HiOutlineCreditCard,
    color: "from-rose-500/20 to-rose-400/10 border-rose-400/50",
    action: "pay",
  },
  {
    title: "Download Forms",
    description: "Get application forms and guides",
    icon: HiOutlineDownload,
    color: "from-indigo-500/20 to-indigo-400/10 border-indigo-400/50",
    action: "forms",
  },
];

const statusIcons = {
  "For Payment": HiOutlineCreditCard,
  Approved: HiOutlineCheckCircle,
  "Under Review": HiOutlineClock,
  Rejected: HiOutlineXCircle,
};

const BusinessPermits = () => {
  const [activeView, setActiveView] = useState("dashboard"); // dashboard | track | apply
  const [trackRef, setTrackRef] = useState("");
  const [trackResult, setTrackResult] = useState(null);
  const [formData, setFormData] = useState({
    applicationType: "new",
    businessName: "",
    businessType: "",
    ownerName: "",
    contactEmail: "",
    contactNumber: "",
    businessAddress: "",
    barangay: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, send formData to backend API here
    setFormSubmitted(true);
  };

  const handleServiceAction = (action) => {
    if (action === "track") {
      setActiveView("track");
    } else if (action === "apply" || action === "renew") {
      setActiveView("apply");
    } else {
      // Simulate: pay, forms - show alert or modal in real app
      alert(`"${action}" feature will connect to payment gateway or document server.`);
    }
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    // Simulate lookup - in real app, call API
    const found = sampleTransactions.find(
      (t) => t.id.toLowerCase() === trackRef.trim().toLowerCase()
    );
    setTrackResult(found || { notFound: true });
  };

  return (
    <Layout>
      <main className="relative bg-black pt-6 pb-10 sm:pt-8 sm:pb-14">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                Buenavista E-Services
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Business Permits & Licensing</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-400/60 text-amber-100">
                  <HiOutlineBriefcase className="h-4 w-4" />
                </span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-amber-50/90 max-w-xl">
                Apply, renew, track, and pay for business permits online. Complete
                your transactions anytime without lining up at the municipal
                hall.
              </p>
            </div>

            <div className="mt-2 sm:mt-0 flex flex-col sm:items-end gap-2 text-[11px] sm:text-xs text-slate-100/90">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-emerald-400/40 px-3 py-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold">
                  ✓
                </span>
                <span className="font-medium">Secure online transactions</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300/90">
                Service available during municipal office hours. Processing
                times may vary.
              </p>
            </div>
          </header>

          {/* Quick actions */}
          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-sm sm:text-base font-semibold text-white">
              What would you like to do?
            </h2>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {serviceActions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.action}
                    type="button"
                    onClick={() => handleServiceAction(item.action)}
                    className={`group flex flex-col items-start gap-2 rounded-2xl bg-gradient-to-br ${item.color} border px-4 py-4 sm:px-5 sm:py-5 text-left shadow-md shadow-slate-950/70 hover:scale-[1.02] transition-transform`}
                  >
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="h-9 w-9 rounded-xl bg-slate-950/60 border border-slate-700/80 flex items-center justify-center text-amber-100 group-hover:border-amber-400/60 transition-colors">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <HiOutlineChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] sm:text-[11px] text-amber-50/90">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Track application view */}
          {(activeView === "track" || trackResult) && (
            <section className="rounded-3xl bg-slate-950/85 border border-sky-400/40 px-4 py-4 sm:px-6 sm:py-5 shadow-lg">
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 mb-4">
                <HiOutlineSearch className="h-4 w-4 text-sky-300" />
                Track Application Status
              </h2>
              <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={trackRef}
                  onChange={(e) => {
                    setTrackRef(e.target.value);
                    setTrackResult(null);
                  }}
                  placeholder="Enter reference number (e.g. BP-2025-0001245)"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-sky-500/30 border border-sky-400/60 px-4 py-2.5 text-sm font-medium text-sky-100 hover:bg-sky-500/40 transition-colors"
                >
                  Search
                </button>
              </form>

              {trackResult && (
                <div className="mt-4">
                  {trackResult.notFound ? (
                    <p className="text-sm text-slate-400">
                      No application found for that reference number. Please
                      check and try again.
                    </p>
                  ) : (
                    <div className="rounded-2xl bg-slate-900/90 border border-slate-700 p-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          {trackResult.id}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${trackResult.statusColor}`}
                        >
                          {(() => {
                            const StatusIcon =
                              statusIcons[trackResult.status] || HiOutlineClock;
                            return (
                              <>
                                <StatusIcon className="h-3 w-3" />
                                {trackResult.status}
                              </>
                            );
                          })()}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        {trackResult.businessName}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
                        <span>{trackResult.type}</span>
                        <span>•</span>
                        <span>{trackResult.date}</span>
                        <span>•</span>
                        <span>{trackResult.amount}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setActiveView("dashboard");
                  setTrackRef("");
                  setTrackResult(null);
                }}
                className="mt-4 text-[11px] text-sky-300 hover:text-sky-200"
              >
                ← Back to services
              </button>
            </section>
          )}

          {/* Apply view with sample application form */}
          {activeView === "apply" && (
            <section className="rounded-3xl bg-slate-950/85 border border-emerald-400/40 px-4 py-4 sm:px-6 sm:py-5 shadow-lg">
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 mb-4">
                <HiOutlineClipboardList className="h-4 w-4 text-emerald-300" />
                Application Form (Sample)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300/90 mb-4">
                This is an example of what an online application form could look
                like. In production, this would be connected to the municipal
                e-services backend.
              </p>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 text-xs sm:text-sm text-slate-100"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Application type
                    </label>
                    <select
                      name="applicationType"
                      value={formData.applicationType}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white focus:border-emerald-400/60 focus:outline-none"
                    >
                      <option value="new">New business permit</option>
                      <option value="renewal">Renewal</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Business type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white focus:border-emerald-400/60 focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="retail">Retail / Sari-sari store</option>
                      <option value="services">Services</option>
                      <option value="food">Food establishment</option>
                      <option value="other">Others</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-slate-200">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400/60 focus:outline-none"
                    placeholder="e.g. Juan's Sari-Sari Store"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Owner full name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400/60 focus:outline-none"
                      placeholder="e.g. Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Contact email
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400/60 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Business address
                    </label>
                    <input
                      type="text"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400/60 focus:outline-none"
                      placeholder="House / building, street, purok"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-200">
                      Barangay
                    </label>
                    <input
                      type="text"
                      name="barangay"
                      value={formData.barangay}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-400/60 focus:outline-none"
                      placeholder="e.g. Barangay 1"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveView("dashboard")}
                    className="text-[11px] text-emerald-300 hover:text-emerald-200"
                  >
                    ← Back to services
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-500/30 border border-emerald-400/60 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-50 hover:bg-emerald-500/40 transition-colors"
                  >
                    Submit sample application
                  </button>
                </div>

                {formSubmitted && (
                  <p className="mt-2 text-[11px] text-emerald-300">
                    Sample only: your details are not actually submitted. In the
                    real system, this would generate a reference number for
                    tracking.
                  </p>
                )}
              </form>
            </section>
          )}

          {/* My transactions */}
          <section className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm sm:text-base font-semibold text-white">
                My Transactions
              </h2>
              <p className="text-[10px] sm:text-[11px] text-slate-400">
                Your recent business permit applications
              </p>
            </div>

            <div className="space-y-2">
              {sampleTransactions.map((tx) => (
                <article
                  key={tx.id}
                  className="rounded-2xl bg-slate-950/85 border border-slate-800 px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">
                        {tx.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tx.statusColor}`}
                      >
                        {(() => {
                          const StatusIcon =
                            statusIcons[tx.status] || HiOutlineClock;
                          return (
                            <>
                              <StatusIcon className="h-3 w-3" />
                              {tx.status}
                            </>
                          );
                        })()}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-white truncate">
                      {tx.businessName}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">
                      {tx.type} • {tx.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-medium text-amber-200">
                      {tx.amount}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setTrackRef(tx.id);
                        setTrackResult(tx);
                        setActiveView("track");
                      }}
                      className="text-[10px] sm:text-[11px] text-sky-300 hover:text-sky-200 font-medium"
                    >
                      View
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default BusinessPermits;
