"use client";

import { IoPerson, IoSearch } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { RiSettings3Fill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";

import Link from "next/link";

export default function LibraryHeader() {

  return (
    <>
      <header className="py-4 px-5 md:px-15 flex items-center justify-between border-b border-slate-300 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="text-[#1754cf]">
              <span className="material-symbols-outlined text-3xl"><FaBookOpen /></span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Library</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-2xl p-2 rounded-full hover:bg-slate-100 transition-colors">
            <span className="material-symbols-outlined"><RiSettings3Fill /></span>
          </button>
          <div
            className="h-8 w-8 rounded-full text-[#1754cf] bg-[#1754cf]/20 border flex items-center justify-center"
            data-alt="User profile placeholder icon"
          >
            <span className="material-symbols-outlined text-primary text-sm">
              <IoPerson />
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl my-10 mx-auto px-3 md:px-0">

        <div className="mb-6">
          <div className="flex items-center justify-evenly md:justify-normal border-b-2 border-slate-200 gap-8">
            <Link
              href="#"
              className="flex items-center gap-2 pb-3 px-1 active-tab font-semibold transition-all"
            >
              <span className="text-[20px]"><IoLanguageSharp /></span>
              Versions
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 pb-3 px-1 text-slate-500 hover:text-primary transition-all font-medium"
            >
              <span className="text-[20px]"><FaBookmark /></span>
              Bookmarks
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 pb-3 px-1 text-slate-500 hover:text-primary transition-all font-medium"
            >
              <span className="text-[20px]"><FaClockRotateLeft /></span>
              History
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <IoSearch />
            </span>
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border-none bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Search translations, bookmarks, or history..."
              type="text"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm ring-1 ring-slate-200 font-medium hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined"><IoFilterSharp /></span>
            <span>Language: English</span>
          </button>
        </div>

        <div className="flex md:hidden px-4 py-4">
          <label className="flex flex-col w-full group">
            <div className="flex w-full items-center rounded-xl bg-slate-100 border border-transparent outline-none transition-all">
              <div className="text-slate-400 flex items-center justify-center pl-4 pr-2">
                <span className="material-symbols-outlined text-[20px]"><IoSearch /></span>
              </div>
              <input
                className="w-full h-11 outline-none placeholder:text-slate-400 text-sm"
                placeholder="Search versions or languages"
                defaultValue=""
              />
            </div>
          </label>
        </div>


        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Section Header (Spans full width) */}
          <div className="col-span-full flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Installed Versions</h3>
            <button className="text-[#1754cf] text-sm font-semibold hover:underline cursor-pointer">
              Get More
            </button>
          </div>
          {/* Version Card 1 (Active) */}
          <div className="group relative bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200 border-l-4 border-[#1754cf]">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-[#1754cf]/10 text-[#1754cf] px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Active
              </div>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
                <HiDotsVertical />
              </span>
            </div>
            <h4 className="font-bold text-lg mb-1">ESV</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              English Standard Version
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-400">Offline Available (24MB)</span>
              <span className="bg-[#1754cf] text-white text-sm rounded-full p-1">
                <FaCheck />
              </span>
            </div>
          </div>
          {/* Version Card 2 */}
          <div className="group relative p-4 rounded-xl shadow-sm ring-1 ring-slate-200 border-l-4 border-transparent hover:border-slate-30 transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Installed
              </div>
              <span className="text-slate-400 cursor-pointer hover:text-primary">
                <HiDotsVertical />
              </span>
            </div>
            <h4 className="font-bold text-lg mb-1">NIV</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              New International Version
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-400">Offline Available (28MB)</span>
              <button className="text-xs font-bold text-[#1754cf] px-3 py-1 rounded-full bg-[#1754cf]/10">
                Set Active
              </button>
            </div>
          </div>
          {/* Version Card 3 */}
          <div className="group relative bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200 border-l-4 border-transparent transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Installed
              </div>
              <span className="text-slate-400 cursor-pointer hover:text-primary">
                <HiDotsVertical />
              </span>
            </div>
            <h4 className="font-bold text-lg mb-1">KJV</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              King James Version
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-400">Offline Available (22MB)</span>
              <button className="text-xs font-bold text-[#1754cf] px-3 py-1 rounded-full bg-[#1754cf]/10">
                Set Active
              </button>
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between mt-8 mb-2">
            <h3 className="text-lg font-bold">Multilingual Options</h3>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 text-[#1754cf] bg-[#1754cf]/20 rounded-full flex items-center justify-center font-bold text-primary">
                FR
              </div>
              <div>
                <h4 className="font-bold">Louis Segond</h4>
                <p className="text-xs text-slate-500">Français</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="text-2xl"><MdOutlineFileDownload /></span>
            </button>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full text-[#1754cf] bg-[#1754cf]/20 flex items-center justify-center font-bold text-primary">
                ES
              </div>
              <div>
                <h4 className="font-bold">Reina-Valera</h4>
                <p className="text-xs text-slate-500">Español</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="text-2xl"><MdOutlineFileDownload /></span>
            </button>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full text-[#1754cf] bg-[#1754cf]/20 flex items-center justify-center font-bold text-primary">
                DE
              </div>
              <div>
                <h4 className="font-bold">Lutherbibel</h4>
                <p className="text-xs text-slate-500">Deutsch</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="text-2xl"><MdOutlineFileDownload /></span>
            </button>
          </div>


        </div>


        <section className="block md:hidden mb-6">
          <div className="flex items-center justify-between px-4 pb-2 pt-2">
            <h3 className="text-slate-900 text-base font-bold tracking-tight">
              English
            </h3>
            <span className="text-xs font-medium text-[#1754cf] bg-[#1754cf]/10 px-2 py-0.5 rounded-full">
              Primary
            </span>
          </div>
          <div className="divide-y divide-slate-100">
            {/* Version Item 1 */}
            <div className="flex items-center gap-4 px-4 py-4 hover:bg-slate-50 cursor-pointer active:bg-slate-100">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="text-2xl bg-[#1754cf]/20 text-[#1754cf] p-3 rounded-xl"><FaBookOpen /></span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-900 text-base font-medium leading-tight">
                  ESV
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  English Standard Version
                </p>
              </div>
              <span className="bg-[#1754cf] text-white text-sm rounded-full p-1">
                <FaCheck />
              </span>
            </div>
            {/* Version Item 2 */}
            <div className="flex items-center gap-4 px-4 py-4 hover:bg-slate-50 cursor-pointer active:bg-slate-100">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:text-slate-400">
                <span className="text-2xl bg-[#1754cf]/20 text-[#1754cf] p-3 rounded-xl"><FaBookOpen /></span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-900  text-base font-medium leading-tight">
                  KJV
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  King James Version
                </p>
              </div>
              <span className="p-1 bg-gray-100 rounded-lg text-slate-300 text-[15px]">
                <HiDownload />
              </span>
            </div>
            {/* Version Item 3 */}
            <div className="flex items-center gap-4 px-4 py-4 hover:bg-slate-50 cursor-pointer active:bg-slate-100">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:text-slate-400">
                <span className="text-2xl bg-[#1754cf]/20 text-[#1754cf] p-3 rounded-xl"><FaBookOpen /></span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-900 text-base font-medium leading-tight">
                  NIV
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  New International Version
                </p>
              </div>
              <span className="p-1 bg-gray-100 rounded-lg text-slate-300 text-[15px]">
                <HiDownload />
              </span>
            </div>
          </div>
        </section>

        {/* large screen lingual  */}
        <div className="hidden md:block mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Recent History</h3>
            <button className="text-[#1754cf] cursor-pointer text-sm font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 divide-y divide-slate-100 overflow-hidden">
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-slate-400">
                  <FaBookOpen />
                </span>
                <div>
                  <h4 className="font-medium">Psalms 23</h4>
                  <p className="text-xs text-slate-500">
                    Read 2 hours ago • ESV
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                <FaChevronRight />
              </span>
            </div>
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-slate-400">
                  <FaBookOpen />
                </span>
                <div>
                  <h4 className="font-medium">John 1</h4>
                  <p className="text-xs text-slate-500">Read Yesterday • NIV</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </div>

        <section className="mb-6 block md:hidden">
          <div className="flex items-center justify-between px-4 pb-2 pt-2">
            <h3 className="text-slate-900 text-base font-bold tracking-tight">
              Español
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="flex items-center gap-4 px-4 py-4 hover:bg-slate-50 cursor-pointer active:bg-slate-100">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <span className="text-2xl bg-[#1754cf]/20 text-[#1754cf] p-3 rounded-xl"><FaBookOpen /></span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-900 dark:text-slate-100 text-base font-medium leading-tight">
                  RVR1960
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Reina-Valera 1960
                </p>
              </div>
              <span className="p-1 bg-gray-100 rounded-lg text-slate-300 text-[15px]">
                <HiDownload />
              </span>
            </div>
          </div>
        </section>

        {/* Bookmarks Quick View (Card Layout) */}
        <section className="mb-20 px-4 block md:hidden">
          <h3 className="text-slate-900 text-base font-bold tracking-tight mb-3">
            Recently Saved
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#1754cf]/5 border border-[#1754cf]/10 transition-all cursor-pointer">
              <div className="mb-2 text-[#1754cf]">
                <span className="text-xl rounded-2xl">
                  <FaBookmark />
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">
                Psalm 23:1
              </p>
              <p className="text-slate-800 text-xs italic line-clamp-2 leading-relaxed">
                "The Lord is my shepherd; I shall not want..."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#1754cf]/5 border border-[#1754cf]/10 transition-all cursor-pointer">
              <div className="mb-2 text-[#1754cf]">
                <span className="text-xl rounded-2xl">
                  <FaBookmark />
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">
                John 3:16
              </p>
              <p className="text-slate-800 text-xs italic line-clamp-2 leading-relaxed">
                "For God so loved the world, that he gave..."
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="block md:hidden fixed bottom-10 left-auto right-5 text-3xl p-3 bg-[#1754cf] text-white rounded-full cursor-pointer">
        <TbWorld />
      </div>
    </>
  )
}