import React from 'react'

const tiers = [
  { name: 'Basic', price: '₹4,999', features: ['Up to 60s video', '2 revisions', 'Basic titles & music'] },
  { name: 'Standard', price: '₹12,999', features: ['3–8 min video', '3 revisions', 'Motion titles, SFX, colour grade'] },
  { name: 'Premium', price: '₹24,999', features: ['10+ min video', 'Priority delivery', 'Advanced graphics, full polish'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Pricing</h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-yellow-400">{t.price}</p>
              <ul className="mt-4 space-y-2 text-blue-100/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white shadow-md shadow-blue-500/30">Start</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
