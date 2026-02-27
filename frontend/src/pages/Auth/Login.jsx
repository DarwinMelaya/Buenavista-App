const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="relative isolate overflow-hidden flex-1">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" aria-hidden="true" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top brand bar */}
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 pt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500/90 flex items-center justify-center font-semibold text-slate-900 shadow-lg">
                BV
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                  Municipality of Buenavista
                </p>
                <p className="text-sm font-semibold text-white">
                  Buenavista Smart Services Portal
                </p>
              </div>
            </div>
            <a
              href="/"
              className="hidden sm:inline-flex text-[11px] text-slate-200 hover:text-emerald-300 transition-colors"
            >
              Back to home
            </a>
          </div>

          {/* Auth card */}
          <main className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-10 pt-6">
            <div className="max-w-md w-full">
              <div className="mb-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-400/40">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Secure access to Buenavista services
                </p>
                <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Log in to Buenavista App
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-slate-200/90 max-w-md">
                  Use your registered email or mobile number to continue. Your account
                  lets you track requests, receive advisories, and access digital
                  documents.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/85 border border-emerald-500/30 shadow-2xl shadow-slate-900/70 p-5 sm:p-6 space-y-4">
                <form className="space-y-4">
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <label
                      htmlFor="identifier"
                      className="block font-medium text-slate-100"
                    >
                      Email or mobile number
                    </label>
                    <input
                      id="identifier"
                      type="text"
                      className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 focus:border-emerald-400"
                      placeholder="e.g. juan.delacruz@example.com"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <label
                      htmlFor="password"
                      className="block font-medium text-slate-100"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 focus:border-emerald-400"
                      placeholder="Enter your password"
                    />
                    <div className="flex justify-end mt-1">
                      <button
                        type="button"
                        className="text-[11px] text-emerald-200 hover:text-emerald-100"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
                  >
                    Log in
                  </button>
                </form>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] sm:text-xs text-slate-300 flex flex-col gap-2">
                  <p>
                    New to Buenavista App?{" "}
                    <a
                      href="/signup"
                      className="font-semibold text-emerald-200 hover:text-emerald-100"
                    >
                      Create an account
                    </a>
                    .
                  </p>
                  <p>
                    By continuing, you acknowledge the municipality&apos;s{" "}
                    <button
                      type="button"
                      className="underline underline-offset-2 hover:text-emerald-100"
                    >
                      data privacy policy
                    </button>
                    .
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </header>
    </div>
  );
};

export default Login;
