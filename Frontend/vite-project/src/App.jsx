import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { name, email, address, role, password };

    try {
      const response = await fetch("http://localhost:3000/api/customer/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        alert(result.message || "Something went wrong");
      } else {
        alert(result.message || "Account created");
      }
    } catch (err) {
      alert(`Something went wrong: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      {/* LEFT — branded hero (no stock photo) */}
      <section className="relative hidden lg:flex overflow-hidden text-white">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-600" />

        {/* Soft radial glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), rgba(255,255,255,0))"
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25"
          style={{ background:
            "radial-gradient(circle at 70% 70%, rgba(255,255,255,.5), rgba(255,255,255,0))"
          }}
        />

        {/* Subtle grid pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] w-full h-full"
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col justify-between p-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              {/* Bank icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-6 9 6" stroke="white" strokeWidth="1.6" />
                <path d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18" stroke="white" strokeWidth="1.6"/>
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-wide">BankPro</span>
          </div>

          {/* Hero copy */}
          <div>
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Smart, secure banking for everyone.
            </h1>
            <p className="mt-4 text-white/80 max-w-md">
              Open an account in minutes. Track balances, move money, and stay safe
              with bank-grade security.
            </p>

            {/* Feature bullets */}
            <ul className="mt-8 space-y-3 text-white/90">
              {[
                "Instant onboarding & KYC-ready",
                "Bank-grade encryption & device security",
                "Real-time insights & alerts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { label: "Customers", value: "1M+" },
              { label: "Countries", value: "40+" },
              { label: "Uptime", value: "99.99%" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur">
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="text-xs text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT — signup form */}
      <section className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <h1 className="text-3xl font-bold text-slate-900">BankPro</h1>
            <p className="mt-2 text-slate-500">Create your secure banking account</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Create your account</h2>
            <p className="mt-1 text-sm text-slate-500">
              It only takes a minute. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Residential address"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="sr-only">Role</label>
                <input
                  id="role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Your role / profession"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Password with show/hide */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 hover:text-slate-700"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    {showPwd ? (
                      // eye-off
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M10.58 10.58A3 3 0 0012 15a3 3 0 001.42-.38M9.88 5.07A9.77 9.77 0 0112 5c5.33 0 9.33 4.67 10 7- .23.83-1.05 2.25-2.55 3.66" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    ) : (
                      // eye
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.8" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    )}
                  </button>
                </div>
                {/* Tiny helper */}
                <p className="mt-2 text-xs text-slate-500">
                  Use 8+ characters with letters & numbers.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account…" : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Protected by modern encryption. Keep your credentials safe.
          </p>
        </div>
      </section>
    </div>
  );
}
