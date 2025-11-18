import React, { useState } from 'react'
import { Phone, Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) setStatus('Thanks! I will get back to you soon.')
      else setStatus('Something went wrong. Please try WhatsApp or email.')
    } catch (e) {
      setStatus('Unable to send. Please use WhatsApp or email.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Work Together</h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="grid gap-4">
              <input name="name" placeholder="Your name" className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/40" required />
              <input type="email" name="email" placeholder="Your email" className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/40" required />
              <textarea name="details" rows="5" placeholder="Project details" className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/40" required />
              <button className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30">Send Message</button>
              {status && <p className="text-sm text-blue-200/80">{status}</p>}
            </div>
          </form>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <a href="https://wa.me/918397001478" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-green-500/20 px-4 py-3 text-green-200 ring-1 ring-green-400/30">
              <MessageSquare className="h-5 w-5" /> WhatsApp Chat
            </a>
            <a href="mailto:krishna22rajpoot@gmail.com" className="flex items-center gap-3 rounded-xl bg-blue-500/20 px-4 py-3 text-blue-200 ring-1 ring-blue-400/30">
              <Mail className="h-5 w-5" /> krishna22rajpoot@gmail.com
            </a>
            <a href="tel:+918397001478" className="flex items-center gap-3 rounded-xl bg-yellow-400/20 px-4 py-3 text-yellow-200 ring-1 ring-yellow-400/30">
              <Phone className="h-5 w-5" /> +91 8397001478
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
