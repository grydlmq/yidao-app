"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "skills", label: "八奇技", href: "/" },
  { id: "herbs", label: "药材库", href: "/herbs" },
  { id: "service", label: "医馆服务", href: "/service" },
  { id: "contact", label: "联系我们", href: "/contact" },
];

export function Sidebar() {
  const pathname = usePathname();

  const getActiveId = () => {
    if (pathname === "/") return "skills";
    if (pathname.startsWith("/herbs")) return "herbs";
    if (pathname.startsWith("/service")) return "service";
    if (pathname.startsWith("/contact")) return "contact";
    return "skills";
  };

  const activeId = getActiveId();

  return (
    <aside className="sidebar">
      <div className="mb-8 hidden md:block">
        <div className="w-10 h-10 bg-red-900 rounded flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
          医
        </div>
      </div>
      <div className="flex flex-row md:flex-col w-full md:w-auto overflow-x-auto md:overflow-visible">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`nav-item ${activeId === item.id ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="mt-auto mb-8 hidden md:block opacity-30">
        <div className="w-1 h-16 bg-gradient-to-b from-stone-300 to-transparent mx-auto" />
      </div>
    </aside>
  );
}
