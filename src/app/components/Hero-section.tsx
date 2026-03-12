"use client";

import { IoSearch } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdPsychologyAlt } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { FaClockRotateLeft, FaStar } from "react-icons/fa6";

import { useState } from "react";

import Link from "next/link";


export default function Hero() {

  const [check, setCheck] = useState("web");

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-0 px-4 max-w-5xl mx-auto w-full py-12">

        <div className="text-center mb-12">
          <h1 className="hidden md:block text-black text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Explore the Word
          </h1>
          <h1 className="block md:hidden text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Search <span className="text-[#1754cf]">Everything.</span>
          </h1>
          <p className="hidden md:block text-lg md:text-xl max-w-2xl mx-auto font-light">
            A deep, integrated search experience across all major biblical versions
            and original languages.
          </p>
          <p className="block md:hidden text-lg md:text-xl max-w-2xl mx-auto font-light">
            Unified access to your digital universe.
          </p>
        </div>


        {/* Search Container */}
        <div className="w-full max-w-3xl space-y-4">

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <span className="text-slate-400 group-focus-within:text-primary transition-colors text-xl md:text-2xl">
                <IoSearch />
              </span>
            </div>
            <input
              className="hidden md:block w-full pl-14 pr-4 py-3 md:py-6 bg-white border border-slate-200 rounded-xl shadow-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg placeholder:text-slate-400 placeholder:text-sm md:placeholder:text-lg transition-all outline-none"
              placeholder="Search for verses (e.g. John 3:16), topics, or Greek/Hebrew terms..."
              type="text"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-slate-100 border border-slate-300 text-slate-400 text-xs rounded mr-2">
                ⌘ K
              </kbd>
            </div>
            <div className="relative group block md:hidden">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-slate-400 group-focus-within:text-primary transition-colors"><IoSearch /></span>
              </div>
              <input className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-charcoal border-2 border-transparent focus:border-primary dark:focus:border-primary rounded-2xl shadow-xl shadow-primary/5 focus:ring-0 text-slate-900 placeholder:text-slate-400 transition-all outline-none" placeholder="Keywords, URLs, or files..." type="text" />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <button className="bg-[#1754cf] text-white p-2 rounded-xl transition-colors">
                  <span className="text-xl"><IoMdArrowForward /></span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filters / Language Selectors */}
          <div className="hidden md:flex justify-center gap-2">
            <button className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-charcoal hover:border-primary hover:text-primary transition-all shadow-sm">
              <span>Version: KJV</span>
              <span className="text-sm"><MdExpandMore /></span>
            </button>
            <button className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-charcoal hover:border-primary hover:text-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm"><IoLanguageSharp /></span>
              <span>Original Hebrew</span>
            </button>
            <button className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-charcoal hover:border-primary hover:text-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm"><MdEditNote /></span>
              <span>Greek Septuagint</span>
            </button>
            <button className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-charcoal hover:border-primary hover:text-primary transition-all shadow-sm">
              <span>Language: English</span>
              <span className="material-symbols-outlined text-sm"><MdExpandMore /></span>
            </button>
          </div>

        </div>

        {/* Features Grid (Subtle) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-24 w-full">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="rounded-full bg-blue-50 p-4 text-[#1754cf] text-4xl flex items-center justify-center">
              <span className=""><MdOutlineMenuBook /></span>
            </div>
            <h3 className="font-bold text-navy-accent">
              Parallel Reading
            </h3>
            <p className="text-sm font-light text-slate-700">
              Compare multiple translations side-by-side with automatic alignment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="rounded-full bg-blue-50 p-4 text-[#1754cf] text-4xl flex items-center justify-center">
              <span className=""><MdPsychologyAlt /></span>
            </div>
            <h3 className="font-bold text-navy-accent">
              AI Topic Analysis
            </h3>
            <p className="text-sm font-light text-slate-700">
              Discover thematic connections across the Old and New Testaments
              instantly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="rounded-full bg-blue-50 p-4 text-[#1754cf] text-4xl flex items-center justify-center">
              <span className=""><MdOutlineMenuBook /></span>
            </div>
            <h3 className="font-bold text-navy-accent">
              Morphology Search
            </h3>
            <p className="text-sm font-light text-slate-700">
              Deep lexical tools for students of original Hebrew, Aramaic, and Greek.
            </p>
          </div>
        </div>

        <div className="w-full flex md:hidden p-1 bg-slate-200/50 rounded-xl">
          <label className="flex-1">
            <input
              onChange={() => setCheck("web")}
              checked={check === "web" ? true : false}
              className="sr-only peer"
              name="search-type"
              type="radio"
              defaultValue="web"
            />
            <div className={`flex items-center justify-center py-2.5 rounded-lg cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-charcoal peer-checked:shadow-sm peer-checked:text-primary ${check === "web" ? "text-[#1754cf]" : "text-gray-500"} font-medium text-sm`}>
              Web
            </div>
          </label>
          <label className="flex-1">
            <input
              onChange={() => setCheck("files")}
              checked={check === "files" ? true : false}
              className="sr-only peer"
              name="search-type"
              type="radio"
              defaultValue="files"
            />
            <div className={`flex items-center justify-center py-2.5 rounded-lg cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-charcoal peer-checked:shadow-sm peer-checked:text-primary ${check === "files" ? "text-[#1754cf]" : "text-gray-500"} font-medium text-sm`}>
              Files
            </div>
          </label>
          <label className="flex-1">
            <input
              onChange={() => setCheck("images")}
              checked={check === "images" ? true : false}
              className="sr-only peer"
              name="search-type"
              type="radio"
              defaultValue="images"
            />
            <div className={`flex items-center justify-center py-2.5 rounded-lg cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-charcoal peer-checked:shadow-sm peer-checked:text-primary ${check === "images" ? "text-[#1754cf]" : "text-gray-500"} font-medium text-sm`}>
              Images
            </div>
          </label>
        </div>

        <div className="grid md:hidden grid-cols-2 gap-3 pt-4">
          <button className="flex items-center gap-3 p-4 bg-white dark:bg-charcoal rounded-xl border border-slate-200">
            <div className="w-8 h-8 rounded-lg text-[#1754cf] flex items-center justify-center bg-blue-50">
              <span className="text-lg"><FaClockRotateLeft /></span>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recent</p>
              <p className="text-sm font-medium">Project AI</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-white dark:bg-charcoal rounded-xl border border-slate-200">
            <div className="w-8 h-8 rounded-lg text-[#1754cf] flex items-center justify-center bg-blue-50">
              <span className="text-lg"><FaStar /></span>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Starred</p>
              <p className="text-sm font-medium">Vault Assets</p>
            </div>
          </button>
        </div>

      </main >

      <footer className="hidden md:block border-t border-t-gray-300 py-8 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2024 Omni-Search Bible. Built for depth and clarity.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-xs text-slate-500 hover:text-primary transition-colors"
              href=""
            >
              Privacy
            </Link>
            <Link
              className="text-xs text-slate-500 hover:text-primary transition-colors"
              href=""
            >
              Terms
            </Link>
            <Link
              className="text-xs text-slate-500 hover:text-primary transition-colors"
              href=""
            >
              API Support
            </Link>
            <Link
              className="text-xs text-slate-500 hover:text-primary transition-colors"
              href=""
            >
              Resources
            </Link>
          </div>
        </div>
      </footer>

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>
    </>
  )
}
