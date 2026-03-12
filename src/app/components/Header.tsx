"use client";

import { FaBookOpen } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="w-full py-4 px-5 md:px-15 bg-[#fdfdfe] border-b border-b-gray-200 sticky top-0 z-50">
      <nav className="flex items-center justify-between">

        <Link href="/">
          <div className="flex items-center gap-2">
            <FaBookOpen className="text-xl md:text-3xl text-[#1754cf]" />
            <span className="font-extrabold text-sm md:text-lg">Omni-Search</span>
          </div>
        </Link>

        <ul className="list-none hidden md:flex items-center gap-10">
          <li><Link href="">Bible</Link></li>
          <li><Link href="">Study Tools</Link></li>
          <li><Link href="/library">Library</Link></li>
          <li><Link href="">Concordance</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 text-[#334155] bg-[#f1f5f9] p-2 rounded-lg"><CiGlobe /> English</button>
          <button className="text-white bg-[#1754cf] py-2 px-3 rounded-lg">Sign In</button>
        </div>

        <div onClick={() => setOpen(prev => !prev)} className="block md:hidden p-2 text-xl text-gray-500 border border-gray-500 rounded-sm cursor-pointer">
          <AiOutlineMenu />
        </div>

      </nav>

      <nav className={`${open ? "block" : "hidden"} mt-10 md:hidden min-h-screen`}>
        <button className="block w-full mb-5"><span className="float-right p-2 rounded-full bg-red-900/10 text-3xl text-red-600 cursor-pointer" onClick={() => setOpen(false)}><IoMdClose /></span></button>
        <ul className="list-none flex flex-col items-start gap-10 text-black *:rounded-lg *:p-3 *:text-xl *:font-bold *:bg-blue-100 *:hover:text-blue-600 *:w-full *:hover:bg-blue-200 *:transition-colors">
          <li><Link href="">Bible</Link></li>
          <li><Link href="">Study Tools</Link></li>
          <li><Link href="/library">Library</Link></li>
          <li><Link href="">Concordance</Link></li>
        </ul>
      </nav>
    </header>
  )
}