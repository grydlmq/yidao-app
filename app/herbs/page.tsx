"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function HerbsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  return (
    <>
      <Sidebar />
      <main className="main-content">
        <section className="view-section pt-24 pb-24 min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-emerald-700 font-calligraphy text-4xl">
                百草园
              </span>
              <p className="mt-4 text-stone-500 font-serif">
                神农尝百草 · 药性入心田
              </p>
            </div>

            {/* 搜索框 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mb-12">
              <label className="block text-sm font-bold text-stone-400 mb-2 uppercase tracking-widest">
                查询尝药记录
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="输入药材名称（如：当归、黄芪...）"
                  className="search-input"
                />
              </div>
              {isSearching && (
                <div className="mt-4 text-sm text-stone-500">
                  正在搜索 "<span className="text-stone-800 font-bold">{searchQuery}</span>" 的相关记录...
                </div>
              )}
            </div>

            {/* 药材卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "人参", colorClass: "hover:bg-emerald-100 hover:text-emerald-800" },
                { name: "黄芪", colorClass: "hover:bg-amber-100 hover:text-amber-800" },
                { name: "当归", colorClass: "hover:bg-red-100 hover:text-red-800" },
              ].map((herb) => (
                <div key={herb.name} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden relative mb-4">
                    <div className={`absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-400 font-serif text-2xl transition-colors ${herb.colorClass}`}>
                      {herb.name}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 font-serif">
                    {herb.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
