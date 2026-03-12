"use client";

import { MdOutlineTextFields } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";

export default function ParellelUtility() {

  return (
    <div className="fixed right-6 bottom-32 flex flex-col gap-3">
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-[#1754cf] transition-colors group">
        <span className="text-2xl group-hover:scale-110 transition-transform">
          <MdOutlineTextFields />
        </span>
      </button>
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-[#1754cf] transition-colors group">
        <span className="text-2xl group-hover:scale-110 transition-transform">
          <IoShareSocialSharp />
        </span>
      </button>
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1754cf] text-white shadow-lg hover:shadow-[#1754cf]/40 transition-all group">
        <span className="text-2xl group-hover:scale-110 transition-transform">
          <MdOutlineEditNote />
        </span>
      </button>
    </div>
  )
}