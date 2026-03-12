"use client";
import Link from "next/link";

import { FaBookOpen } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdBookmark } from "react-icons/io";

export default function Navbar() {

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 px-4 md:px-20 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="text-xl md:text-3xl text-[#1754cf]">
              <FaBookOpen />
            </span>
            <h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight font-heading">
              LOGOS
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-slate-600 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Library
            </Link>
            <Link
              className="text-slate-600 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Journals
            </Link>
            <Link
              className="text-slate-600 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Plans
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              <IoSearch />
            </span>
            <input
              className="bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Search scripture..."
              type="text"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
            <span className=""><IoMdSettings /></span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
            <span className=""><IoMdBookmark /></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#1754cf] text-white flex items-center justify-center text-xs font-bold">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}