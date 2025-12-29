"use client";

import { Sidebar } from "@/components/Sidebar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";

export default function Home() {
  const [videoType, setVideoType] = useState<"origin" | "pulse" | null>(null);

  return (
    <>
      <Sidebar />
      <main className="main-content relative">
        <nav className="absolute top-0 w-full z-40 p-6 flex justify-end items-center pointer-events-none">
          <div className="text-right">
            <div className="text-2xl font-calligraphy text-stone-300">
              医道传承
            </div>
            <div className="text-xs text-stone-200 font-serif tracking-widest">
              TRADITIONAL CHINESE MEDICINE
            </div>
          </div>
        </nav>

        <section className="view-section pt-24 pb-24">
          <div className="axis-container hidden md:flex flex-col items-center" style={{ left: "50%" }}>
            <div className="qi-line" />
            {/* 三段光晕模仿脉搏跳动 */}
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 rounded-full z-20" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)", animation: "pulse-glow-1 6s ease-in-out infinite" }}></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 rounded-full z-20" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)", animation: "pulse-glow-2 6s ease-in-out infinite" }}></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 rounded-full z-20" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)", animation: "pulse-glow-3 6s ease-in-out infinite" }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-settle">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">
                八奇技
              </h1>
              <p className="text-stone-500 text-lg">
                全息生命 · 完整传承体系
              </p>
            </div>

            {/* 层 1: 地基 (中医起源) */}
            <div className="mb-16 relative animate-settle" style={{ animationDelay: "0.1s" }}>
              <div className="bedrock-card group transition-all duration-500">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/3 text-center md:text-right transition-transform duration-500 group-hover:-translate-x-2">
                    <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">
                      中医起源
                    </h2>
                    <span className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-xs tracking-widest rounded mb-2">
                      理性复原 · 形气神
                    </span>
                    <div className="text-xs text-stone-400 mt-2 font-serif group-hover:hidden animate-pulse">
                      ▼ 触碰详情
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-stone-800 rounded-full items-center justify-center shrink-0 border-4 border-stone-100 shadow-xl z-20 transition-transform duration-700 ease-out group-hover:scale-125">
                    <span className="text-white font-serif">基</span>
                  </div>
                  <div className="md:w-1/2 relative min-h-[4rem] flex flex-col justify-center">
                    <p className="text-lg text-stone-500 font-serif absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full pointer-events-none">
                      "从人类本能到理性医学的推演"
                    </p>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out w-full">
                      <div className="overflow-hidden">
                        <p className="text-lg text-stone-600 leading-relaxed font-serif pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <span className="text-4xl float-left mr-2 text-stone-300">"</span>
                          揭开神秘面纱，回归理性本源。不拘泥于死记硬背，从人类早期医疗本能出发，运用<strong>唯物史观</strong>与<strong>现代逻辑</strong>，推演阴阳五行与经络气血的构建过程。深度剖析<strong>"形气神"</strong>生命观。
                        </p>
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <button
                            onClick={() => setVideoType("origin")}
                            className="flex items-center gap-2 px-6 py-2 bg-red-900 text-white rounded shadow-lg hover:bg-red-800 hover:shadow-xl transition-all active:scale-95"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>开始学习 · 完整课程 (30集)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 bottom-0 w-[2px] h-16 bg-stone-300 -mb-16 -translate-x-1/2" />
            </div>

            {/* 层 2: 枢纽 (脉法) */}
            <div className="mb-20 flex justify-center relative animate-settle" style={{ animationDelay: "0.2s" }}>
              <button
                onClick={() => setVideoType("pulse")}
                className="hub-card w-64 h-64 md:w-80 md:h-80 group"
              >
                {/* 涟漪动画：多层连续水波效果 */}
                <div className="animate-ripple" />
                <div className="animate-ripple" style={{ animationDelay: "1.25s" }} />
                <div className="animate-ripple" style={{ animationDelay: "2.5s" }} />
                <div className="animate-ripple" style={{ animationDelay: "3.75s" }} />

                <span className="text-xs text-red-800 tracking-widest uppercase mb-2 relative z-10">
                  Diagnosis
                </span>
                <h2 className="text-4xl font-serif font-bold text-stone-800 mb-2 relative z-10 group-hover:text-red-900 transition-colors">
                  脉诊心法
                </h2>
                <div className="w-8 h-1 bg-red-800 rounded-full mb-4 relative z-10" />
                <p className="text-sm text-stone-600 relative z-10 group-hover:text-stone-800">
                  定盘之星 · 指下生明
                  <br />
                  <span className="text-xs text-red-600 opacity-0 group-hover:opacity-100 transition-opacity mt-2 block">
                    ▶ 点击开启实战课程 (16集)
                  </span>
                </p>

                <div className="absolute left-0 top-1/2 w-16 h-[1px] bg-red-300 -translate-x-full hidden md:block" />
                <div className="absolute right-0 top-1/2 w-16 h-[1px] bg-red-300 translate-x-full hidden md:block" />
              </button>
            </div>

            {/* 层 3: 施治 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mb-24 relative animate-settle" style={{ animationDelay: "0.3s" }}>
              {/* 左侧：外治四法 */}
              <div className="relative">
                <div className="text-center md:text-right mb-6 pr-4">
                  <h3 className="text-xl font-serif font-bold text-stone-800">
                    外治 · 四法
                  </h3>
                  <p className="text-xs text-stone-500">EXTERNAL THERAPY</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="wing-card group cursor-pointer" style={{ animation: "gentle-float 4s ease-in-out infinite", animationDelay: "0s" }}>
                    <div className="icon-hand text-2xl mb-2 text-orange-200 group-hover:text-orange-400 transition-colors font-serif inline-block">
                      手
                    </div>
                    <h4 className="font-bold text-stone-700">手法</h4>
                    <p className="text-xs text-stone-500 mt-1">正骨理筋</p>
                  </div>
                  <div className="wing-card group cursor-pointer" style={{ animation: "gentle-float 4s ease-in-out infinite", animationDelay: "1s" }}>
                    <div className="icon-needle text-2xl mb-2 text-slate-400 group-hover:text-slate-600 transition-colors font-serif inline-block">
                      针
                    </div>
                    <h4 className="font-bold text-stone-700">针法</h4>
                    <p className="text-xs text-stone-500 mt-1">调气通经</p>
                  </div>
                  <div className="wing-card group cursor-pointer" style={{ animation: "gentle-float 4s ease-in-out infinite", animationDelay: "2s" }}>
                    <div className="icon-moxa text-2xl mb-2 text-orange-300 group-hover:text-orange-600 transition-colors font-serif inline-block">
                      灸
                    </div>
                    <h4 className="font-bold text-stone-700">灸法</h4>
                    <p className="text-xs text-stone-500 mt-1">温阳固脱</p>
                  </div>
                  <div className="wing-card group cursor-pointer" style={{ animation: "gentle-float 4s ease-in-out infinite", animationDelay: "3s" }}>
                    <div className="icon-stone text-2xl mb-2 text-stone-500 group-hover:text-stone-700 transition-colors font-serif inline-block">
                      砭
                    </div>
                    <h4 className="font-bold text-stone-700">砭法</h4>
                    <p className="text-xs text-stone-500 mt-1">活血排毒</p>
                  </div>
                </div>
              </div>

              {/* 右侧：内治方药 */}
              <div className="relative flex flex-col justify-center">
                <div className="text-center md:text-left mb-6 pl-4">
                  <h3 className="text-xl font-serif font-bold text-stone-800">
                    内治 · 核心
                  </h3>
                  <p className="text-xs text-stone-500">INTERNAL THERAPY</p>
                </div>
                <div className="wing-card flow-gradient p-8 rounded-xl border-l-4 border-l-emerald-800 h-full flex flex-col justify-center relative overflow-hidden group" style={{ animation: "gentle-float 5s ease-in-out infinite" }}>
                  <div className="absolute right-0 top-0 text-9xl font-serif text-emerald-100/50 -z-10 select-none group-hover:text-emerald-200/50 transition-colors">
                    药
                  </div>
                  <h4 className="text-2xl font-bold text-stone-800 mb-4">
                    方药体系
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 relative z-10">
                    药以载道，效如桴鼓。与外治法并列，是解决内科杂病、调理脏腑气血的最强手段。
                  </p>
                  <div className="flex gap-2 relative z-10">
                    <span className="px-2 py-1 bg-white/60 text-emerald-800 text-xs rounded border border-emerald-100">
                      辨证
                    </span>
                    <span className="px-2 py-1 bg-white/60 text-emerald-800 text-xs rounded border border-emerald-100">
                      特效方
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 层 4: 归元 */}
            <div className="relative pt-12 text-center animate-settle" style={{ animationDelay: "0.4s" }}>
              <div className="inline-block relative z-20">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-red-900 rounded-full flex items-center justify-center mx-auto shadow-2xl ring-8 ring-red-50 mb-6 relative animate-breathe-core">
                  <div className="absolute inset-0 rounded-full bg-red-600 blur-xl animate-breathe-glow -z-10" />
                  <span className="text-4xl md:text-5xl font-calligraphy text-white">
                    内证
                  </span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                  源头 · 归宿
                </h2>
                <p className="text-stone-500 max-w-lg mx-auto">
                  "神形相依，无处不在"<br />
                  内证不仅是修行的终点，更是上述所有技法的灵魂。
                </p>
              </div>
            </div>
          </div>
        </section>

        {videoType && (
          <VideoPlayer
            type={videoType}
            onClose={() => setVideoType(null)}
          />
        )}
      </main>
    </>
  );
}
