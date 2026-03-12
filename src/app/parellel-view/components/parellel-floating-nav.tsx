"use client";

import { IoMdArrowBack } from "react-icons/io";
import { MdUnfoldMore } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";


export default function ParellelFloatingNav() {

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 flex items-center justify-between gap-2">
        <button className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100">
          <span className="text-2xl"><IoMdArrowBack /></span>
        </button>
        <div className="flex-1 flex items-center justify-center gap-4 px-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors">
            <span className="text-sm font-bold">Genesis 1</span>
            <span className="material-symbols-outlined text-sm">
              <MdUnfoldMore />
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <button className="flex items-center gap-2 text-[#1754cf] font-semibold text-sm">
            <span className="text-lg"><IoMdBookmark /></span>
            <span className="hidden sm:inline">Bookmark</span>
          </button>
        </div>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 ">
          <span className="text-2xl"><IoArrowForward /></span>
        </button>
      </div>
    </div>
  )
}