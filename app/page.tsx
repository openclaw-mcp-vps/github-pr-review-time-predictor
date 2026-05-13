export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          GitHub Integration
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict How Long Code Reviews Will Take
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze PR size, complexity, and reviewer availability to predict review time and assign the right reviewers — before you hit merge.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["85%", "Prediction Accuracy"],
            ["3x", "Faster Review Cycles"],
            ["40%", "Fewer Review Bottlenecks"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6 text-sm">Per team · Cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "GitHub PR analysis & predictions",
              "Smart reviewer assignment",
              "Review bottleneck insights",
              "Historical trend dashboard",
              "Unlimited repositories"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the prediction work?",
              "We analyze your PR's lines changed, file count, historical review times for similar PRs, and reviewer workload to generate an accurate time estimate using a trained ML model."
            ],
            [
              "Does it require access to my code?",
              "No. We only access PR metadata via GitHub's API — titles, file counts, diff sizes, and reviewer activity. Your source code is never read or stored."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel with one click from your billing dashboard. No contracts, no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
