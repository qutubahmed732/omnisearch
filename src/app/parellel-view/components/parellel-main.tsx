"use client";

import { FaChevronRight } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { BiSync } from "react-icons/bi";

export default function ParellelMain() {

  return (
    <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
      {/* Context Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1754cf] mb-1">
            <span>Old Testament</span>
            <span className="text-xs">
              <FaChevronRight />
            </span>
            <span>Genesis</span>
          </nav>
          <h2 className="text-3xl font-bold text-slate-900">
            Chapter 1
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-[#1754cf] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#1754cf]/90">
            <span className="text-xl"><BiSync /></span>
            <span>Sync Scroll On</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="grid grid-cols-[80px_1fr_1fr] border-b border-slate-200 bg-slate-50 sticky top-15.25 z-40">
          <div className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            Verse
          </div>
          <div className="p-4 text-sm font-bold text-slate-900 flex items-center justify-between">
            English (NIV)
            <span className="material-symbols-outlined text-slate-400 text-sm">
              <MdExpandMore />
            </span>
          </div>
          <div className="p-4 text-sm font-bold text-slate-900 border-l border-slate-200 flex items-center justify-between">
            Spanish (NVI)
            <span className="material-symbols-outlined text-slate-400 text-sm">
              <MdExpandMore />
            </span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {/* Verse Row */}
          <div className="grid grid-cols-[80px_1fr_1fr] hover:bg-[#1754cf]/5 transition-colors group">
            <div className="p-4 text-sm font-mono text-slate-400 group-hover:text-[#1754cf]">
              1:1
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-transparent">
              In the beginning God created the heavens and the earth.
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-slate-100">
              Dios, en el principio, creó los cielos y la tierra.
            </div>
          </div>
          {/* Verse Row */}
          <div className="grid grid-cols-[80px_1fr_1fr] hover:bg-[#1754cf]/5 transition-colors group">
            <div className="p-4 text-sm font-mono text-slate-400 group-hover:text-[#1754cf]">
              1:2
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700">
              Now the earth was formless and empty, darkness was over the
              surface of the deep, and the Spirit of God was hovering over the
              waters.
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-slate-100">
              La tierra era un caos total, las tinieblas cubrían el abismo, y el
              Espíritu de Dios se movía sobre la superficie de las aguas.
            </div>
          </div>
          {/* Verse Row */}
          <div className="grid grid-cols-[80px_1fr_1fr] hover:bg-[#1754cf]/5 transition-colors group">
            <div className="p-4 text-sm font-mono text-slate-400 group-hover:text-[#1754cf]">
              1:3
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700">
              And God said, "Let there be light," and there was light.
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-slate-100">
              Y dijo Dios: «¡Que exista la luz!» Y la luz llegó a existir.
            </div>
          </div>
          {/* Verse Row */}
          <div className="grid grid-cols-[80px_1fr_1fr] hover:bg-[#1754cf]/5 transition-colors group">
            <div className="p-4 text-sm font-mono text-slate-400 group-hover:text-[#1754cf]">
              1:4
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700">
              God saw that the light was good, and he separated the light from
              the darkness.
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-slate-100">
              Dios consideró que la luz era buena y la separó de las tinieblas.
            </div>
          </div>
          {/* Verse Row */}
          <div className="grid grid-cols-[80px_1fr_1fr] hover:bg-[#1754cf]/5 transition-colors group">
            <div className="p-4 text-sm font-mono text-slate-400 group-hover:text-[#1754cf]">
              1:5
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700">
              God called the light “day,” and the darkness he called “night.”
              And there was evening, and there was morning—the first day.
            </div>
            <div className="p-6 text-lg leading-relaxed text-slate-700 border-l border-slate-100">
              A la luz la llamó «día», y a las tinieblas, «noche». Y vino la
              noche, y llegó la mañana: ese fue el primer día.
            </div>
          </div>
        </div>
      </div>
      {/* Reading Progress */}
      <div className="mt-8 mb-24 px-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-slate-600">
            Chapter Reading Progress
          </span>
          <span className="text-sm font-bold text-primary">15%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-[#1754cf] h-full w-[15%] rounded-full" />
        </div>
      </div>
    </main>
  )
}