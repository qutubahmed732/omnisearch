"use client";

import { FaBookOpen } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

import Link from "next/link";


export default function ParellelViewNav() {

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-3 lg:px-12">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-[#1754cf]">
          <span className="text-xl md:text-3xl text-[#1754cf]">
            <FaBookOpen />
          </span>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Parallel Reader
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className="text-sm font-medium text-slate-600 hover:text-[#1754cf] transition-colors"
            href="#"
          >
            Library
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-[#1754cf] transition-colors"
            href="#"
          >
            History
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            <IoSearch />
          </span>
          <input
            className="h-9 w-64 rounded-lg border-none bg-slate-100 pl-10 text-sm focus:ring-2 focus:ring-[#1754cf]/50"
            placeholder="Search verses..."
            type="text"
          />
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <span className="material-symbols-outlined text-xl">
            <IoMdSettings />
          </span>
        </button>
      </div>
    </header>
  )
}