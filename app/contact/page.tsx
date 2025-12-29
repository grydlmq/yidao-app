"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  hoverBgColor: string;
  hoverText: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "哔哩哔哩",
    url: "https://space.bilibili.com/115546594",
    icon: "B",
    iconBgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    hoverBgColor: "group-hover:bg-pink-500",
    hoverText: "group-hover:text-white",
    description: "视频教程 · 深度解析",
  },
  {
    name: "公众号",
    url: "",
    icon: "微",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-600",
    hoverBgColor: "",
    hoverText: "",
    description: "",
  },
  {
    name: "知乎专栏",
    url: "https://www.zhihu.com/people/wang-bu-liu-xing-5",
    icon: "知",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    hoverBgColor: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
    description: "理论研讨 · 问答互动",
  },
  {
    name: "抖音",
    url: "https://www.douyin.com/user/MS4wLjABAAAAdwnDR3vX4HOncLF-uJR5ROqPH2Syt7YhPQo0DzyozHw",
    icon: "抖",
    iconBgColor: "bg-stone-900",
    iconColor: "text-white",
    hoverBgColor: "group-hover:bg-black",
    hoverText: "",
    description: "日常分享 · 快速科普",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@龙息堂·孙隐玄",
    icon: "Y",
    iconBgColor: "bg-red-50",
    iconColor: "text-red-600",
    hoverBgColor: "group-hover:bg-red-600",
    hoverText: "group-hover:text-white",
    description: "海外频道 · 龙息堂·孙隐玄",
  },
  {
    name: "小红书",
    url: "https://www.xiaohongshu.com/user/profile/65ed5a36000000000500b9de",
    icon: "红",
    iconBgColor: "bg-red-50",
    iconColor: "text-red-500",
    hoverBgColor: "group-hover:bg-red-500",
    hoverText: "group-hover:text-white",
    description: "生活记录 · 养生心得",
  },
];

export default function ContactPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <>
      <Sidebar />
      <main className="main-content">
        <section className="view-section pt-24 pb-24 min-h-screen bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-stone-800 font-calligraphy text-4xl">
                云游 · 寻踪
              </span>
              <p className="mt-4 text-stone-500 font-serif">
                线上交流 · 线下问道
              </p>
            </div>

            {/* 社交媒体矩阵 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {socialLinks.map((link) => {
                if (link.name === "公众号") {
                  return (
                    <div
                      key={link.name}
                      className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 ${link.iconBgColor} rounded-full flex items-center justify-center ${link.iconColor} font-bold text-xl`}>
                        {link.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800">公众号</h4>
                        <p className="text-sm text-stone-600 select-all">
                          龙息堂健康管理中心
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-stone-100 group flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 ${link.iconBgColor} rounded-full flex items-center justify-center ${link.iconColor} font-bold text-xl transition-colors ${link.hoverBgColor} ${link.hoverText}`}>
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">
                        {link.name}
                      </h4>
                      <p className="text-xs text-stone-400">
                        {link.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* 底部信息：微信 & 地址 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 私域微信 */}
              <div className="bg-stone-800 text-stone-200 p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 font-serif text-9xl -mr-4 -mt-4 select-none">
                  信
                </div>
                <h3 className="text-xl font-serif font-bold mb-6 text-white border-b border-stone-600 pb-4">
                  官方微信
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                      龙息堂微信
                    </p>
                    <div
                      className="flex items-center justify-between bg-stone-700/50 p-3 rounded hover:bg-stone-700 transition-colors cursor-pointer"
                      onClick={() => copyToClipboard("Longxihome", "龙息堂微信")}
                    >
                      <span className="font-mono text-lg text-emerald-400">
                        Longxihome
                      </span>
                      <span className="text-xs bg-stone-600 px-2 py-1 rounded text-stone-300">
                        {copiedText === "龙息堂微信" ? "已复制" : "复制"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                      龙息堂精品中药微信
                    </p>
                    <div
                      className="flex items-center justify-between bg-stone-700/50 p-3 rounded hover:bg-stone-700 transition-colors cursor-pointer"
                      onClick={() => copyToClipboard("LoongHerb", "龙息堂精品中药微信")}
                    >
                      <span className="font-mono text-lg text-amber-400">
                        LoongHerb
                      </span>
                      <span className="text-xs bg-stone-600 px-2 py-1 rounded text-stone-300">
                        {copiedText === "龙息堂精品中药微信" ? "已复制" : "复制"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 线下地址 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 font-serif text-9xl -mr-4 -mt-4 text-stone-800 select-none">
                  地
                </div>
                <h3 className="text-xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">
                  中药铺地址
                </h3>

                <div className="h-full flex flex-col">
                  <p className="text-stone-600 mb-2 font-bold text-lg">
                    龙息堂中药铺
                  </p>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    北京市房山区<br />
                    长兴东街九号院 12号楼 1层
                  </p>

                  <div className="mt-auto pt-4">
                    <a
                      href="https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E5%B8%82%E6%88%BF%E5%B1%B1%E5%8C%BA%E9%95%BF%E5%85%B4%E4%B8%9C%E8%A1%97%E4%B9%9D%E5%8F%B7%E9%99%A212%E5%8F%B7%E6%A5%BC/@12933616,4804368,19z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-stone-100 text-stone-600 text-sm rounded hover:bg-stone-200 transition-colors"
                    >
                      查看地图导航 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
