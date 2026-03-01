import Layout from "../../Components/Layout/Layout";
import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";

const Account = () => {
  // Static demo data for now; later you can wire this to real user profile data
  const profile = {
    name: "Juan Dela Cruz",
    role: "Resident of Buenavista",
    barangay: "Barangay Sample",
    email: "juan.delacruz@example.com",
    phone: "+63 9XX XXX XXXX",
    address: "Buenavista, Marinduque",
  };

  return (
    <Layout>
      <main className="relative bg-black pt-6 pb-10 sm:pt-8 sm:pb-14">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                My Buenavista Account
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Profile & Settings
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-emerald-50/90 max-w-xl">
                Manage the information used by the municipality to process your
                requests, send notifications, and personalize your Buenavista
                App experience.
              </p>
            </div>

            <div className="mt-1 sm:mt-0 flex flex-col gap-2 sm:items-end text-[11px] sm:text-xs text-slate-100/90">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-emerald-400/40 px-3 py-1.5">
                <HiOutlineShieldCheck className="h-4 w-4 text-emerald-300" />
                <span>Secured by the Municipality of Buenavista</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300/90">
                Keep your contact details updated so you never miss an advisory
                or status update.
              </p>
            </div>
          </header>

          {/* Layout */}
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
            {/* Left: profile card */}
            <div className="space-y-4 sm:space-y-5">
              <div className="rounded-3xl bg-slate-950/85 border border-slate-800 px-4 py-4 sm:px-5 sm:py-5 shadow-lg shadow-slate-950/70 flex gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-emerald-500/80 to-teal-400/80 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-900/60">
                    <HiOutlineUserCircle className="h-10 w-10 sm:h-12 sm:w-12" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                      {profile.name}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-emerald-200">
                      {profile.role}
                    </p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-slate-300/90">
                      Connected to: <span className="font-semibold">{profile.barangay}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-100/90">
                    <div className="flex items-start gap-2">
                      <HiOutlineMail className="h-4 w-4 text-emerald-300 mt-0.5" />
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.16em]">
                          Email
                        </p>
                        <p>{profile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiOutlinePhone className="h-4 w-4 text-emerald-300 mt-0.5" />
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.16em]">
                          Mobile
                        </p>
                        <p>{profile.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiOutlineLocationMarker className="h-4 w-4 text-emerald-300 mt-0.5" />
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.16em]">
                          Address
                        </p>
                        <p>{profile.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account info note */}
              <div className="rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-teal-500/10 border border-emerald-400/40 px-4 py-4 sm:px-5 sm:py-4 shadow-md shadow-emerald-900/40 text-[11px] sm:text-xs text-emerald-50/90 space-y-1.5">
                <p>
                  These details are used when you submit service requests,
                  schedule appointments, or receive advisories. Make sure they
                  match your valid IDs and contact numbers.
                </p>
                <p className="font-medium text-emerald-100">
                  In a future version, this page will let you edit your profile
                  directly from the Buenavista App.
                </p>
              </div>
            </div>

            {/* Right: settings & security */}
            <aside className="space-y-4 sm:space-y-5">
              <div className="rounded-3xl bg-slate-950/85 border border-slate-800 px-4 py-4 sm:px-5 sm:py-5 shadow-md shadow-slate-950/70 text-[11px] sm:text-xs text-slate-200/90 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xs sm:text-sm font-semibold text-white">
                    Notification preferences
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-200">
                    <HiOutlineCog className="h-3.5 w-3.5" />
                    <span>Coming soon</span>
                  </span>
                </div>
                <p>
                  Choose how you want to receive updates about requests,
                  advisories, and emergencies — via SMS, email, or in-app
                  notifications.
                </p>
                <ul className="space-y-1.5 list-disc list-inside marker:text-emerald-300">
                  <li>Service request updates</li>
                  <li>Barangay and municipal advisories</li>
                  <li>Emergency alerts and safety reminders</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-slate-950/85 border border-slate-800 px-4 py-4 sm:px-5 sm:py-5 shadow-md shadow-slate-950/70 text-[11px] sm:text-xs text-slate-200/90 space-y-2.5">
                <h2 className="text-xs sm:text-sm font-semibold text-white">
                  Security & privacy
                </h2>
                <p>
                  Your account is protected according to municipal data
                  handling policies. Only authorized personnel can access your
                  information for legitimate government transactions.
                </p>
                <ul className="space-y-1.5 list-disc list-inside marker:text-emerald-300">
                  <li>Use a strong, unique password for your account.</li>
                  <li>Avoid sharing your login details with others.</li>
                  <li>Always log out when using shared or public devices.</li>
                </ul>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500/90 hover:bg-red-400 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-red-900/60 transition-colors"
              >
                <HiOutlineLogout className="h-4 w-4" />
                <span>Log out of Buenavista App</span>
              </button>
            </aside>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Account;
