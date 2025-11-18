import React from 'react'
import { Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/80">© {new Date().getFullYear()} K Media — All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/90">
          <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/15"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/15"><Youtube className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/15"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}
