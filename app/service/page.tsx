import { Sidebar } from "@/components/Sidebar";

export default function ServicePage() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <section className="view-section pt-24 pb-24 min-h-screen bg-[#f2efe9]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-stone-800 font-calligraphy text-4xl">
                医馆服务
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-stone-800">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                  正骨理筋
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  传统正骨八法，调整骨骼位置。
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-stone-800">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                  针灸调理
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  辨证取穴，调气通经。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
