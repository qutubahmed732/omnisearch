"use client";

export default function ReadingAside() {

  return (
    <aside className="fixed right-6 top-22 hidden xl:flex flex-col gap-6 w-64">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Current Context
        </h4>
        <div className="space-y-4">
          <div className="group cursor-pointer">
            <p className="text-sm font-bold text-[#1754cf] mb-1">
              Historical Note
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              The 'Logos' (Word) concept bridges Greek philosophy and Jewish
              theology...
            </p>
          </div>
          <div className="group cursor-pointer">
            <p className="text-sm font-bold text-[#1754cf] mb-1">
              Cross References
            </p>
            <p className="text-xs text-slate-500 leading-relaxed underline">
              Genesis 1:1, Colossians 1:16, 1 John 1:1
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1754cf]/5 border border-[#1754cf]/20 p-6 rounded-2xl">
        <h4 className="text-xs font-bold text-[#1754cf] uppercase tracking-widest mb-3">
          Study Journal
        </h4>
        <p className="text-xs italic text-slate-600 mb-4">
          "The light shines in the darkness..."
        </p>
        <button className="w-full py-2 bg-[#1754cf] text-white text-xs font-bold rounded-lg shadow-lg shadow-[#1754cf]/20">
          Add Reflection
        </button>
      </div>
    </aside>
  );
};