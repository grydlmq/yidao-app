"use client";

import { useEffect, useState } from "react";

interface Video {
  title: string;
  aid: string;
  bvid: string;
  cid: string;
}

interface VideoPlayerProps {
  type: "origin" | "pulse";
  onClose: () => void;
}

const videoDataMap: Record<string, Video[]> = {
  origin: [
    { title: "【先导预告】中医专业的开学第一课：中医如何起源", aid: "114359795720165", bvid: "BV12y57zjEeY", cid: "30043275575" },
    { title: "【中医起源 01】医学博士：中医理论从何而来？五千年精华一天讲完", aid: "114385380974577", bvid: "BV1m1LxzrEt9", cid: "30409294179" },
    { title: "【中医起源 02】一个故事,讲明白中医起源", aid: "114385464857894", bvid: "BV1PVLxzeEP2", cid: "29651635008" },
    { title: "【中医起源 03】各文明早期医学横向对比", aid: "114401956926571", bvid: "BV1cQL9zGENC", cid: "29652222315" },
    { title: "【中医起源 04】中医学的发展脉络", aid: "114421670092029", bvid: "BV1PsGmzRE6Z", cid: "29695344935" },
    { title: "【中医起源-彩蛋01】从道家修行角度解读「道可道 非恒道」", aid: "114424488661507", bvid: "BV1qaGXzsEum", cid: "29706814483" },
    { title: "【中医起源 05】形气神生命观之「形」", aid: "114447322451985", bvid: "BV1kvVczsE2n", cid: "31199200643" },
    { title: "【中医起源 06】形气神生命观之「气」", aid: "114465475399842", bvid: "BV1E5V8zaE6A", cid: "29834873491" },
    { title: "【中医起源 07】形气神生命观之「气一元论」", aid: "114484181998822", bvid: "BV1c6VZzEETA", cid: "30039999990" },
    { title: "【中医起源 08】形气神生命观之「神」", aid: "114503912003067", bvid: "BV1YdEezmEHm", cid: "29967516284" },
    { title: "【中医起源-彩蛋02】中医养身 | 哲学调神", aid: "114504381764145", bvid: "BV19VEezjERr", cid: "29989670690" },
    { title: "【中医起源 09】形气神生命观收官总结", aid: "114520840214407", bvid: "BV19uEaz3ESP", cid: "29999566701" },
    { title: "【中医起源 10】思维方法之「阴阳」（上）", aid: "114538892498664", bvid: "BV1WDJtzDEmX", cid: "30052387192" },
    { title: "【中医起源-彩蛋03】八卦是怎么画出来的", aid: "114543439123914", bvid: "BV1tRJezGE8i", cid: "30066806561" },
    { title: "【中医起源 11】思维方法之「阴阳」（下）", aid: "114602998239913", bvid: "BV1dh7KzTEZQ", cid: "30288511524" },
    { title: "【中医起源-彩蛋04】《阴阳应象大论》绕口令诠解", aid: "114603048573780", bvid: "BV12D7KzWEKo", cid: "30269244658" },
    { title: "【中医起源 12】思维方法之「五行」（上）", aid: "114643682989303", bvid: "BV1syTmzVEe4", cid: "30768697328" },
    { title: "【中医起源-彩蛋05】上古神话故事一则", aid: "114646115685358", bvid: "BV1AeTDzmEp2", cid: "30437805286" },
    { title: "【中医起源 13】思维方法之「五行」（下）", aid: "114682253810244", bvid: "BV1ejMSzPE2k", cid: "30515399248" },
    { title: "【中医起源-彩蛋06】孙隐玄锐评AI", aid: "114682388028277", bvid: "BV1XzMUzbEKK", cid: "30497834681" },
    { title: "【中医起源 14】藏象与经脉", aid: "114703258951529", bvid: "BV1sQNjznExr", cid: "30591943438" },
    { title: "【中医起源15】病因与病机（上）", aid: "114726059120502", bvid: "BV1BSNQzBENL", cid: "30635393223" },
    { title: "【中医起源16】病因与病机（下）", aid: "114765686906176", bvid: "BV1ufgZzsEJf", cid: "30774462735" },
    { title: "【中医起源17】诊断方法", aid: "114803402086177", bvid: "BV1M9GFz8Erw", cid: "31499421718" },
    { title: "【中医起源-彩蛋07】生命能量层级理论", aid: "114800784839442", bvid: "BV1ZP3RztECV", cid: "30875321954" },
    { title: "【中医起源18】治疗方法", aid: "114844338492433", bvid: "BV1wrucz2ERs", cid: "31046108007" },
    { title: "【中医起源19】理论溯源部分——收官总结", aid: "114861803577302", bvid: "BV1exutzrELJ", cid: "31100832903" },
    { title: "【中医起源20】对现代医学的反思", aid: "114883932787869", bvid: "BV1t3ghzkEfZ", cid: "31224368151" },
    { title: "【中医起源21】对「中医黑の话术」予以回应", aid: "114924013492201", bvid: "BV1Xg8izjEZp", cid: "31310940760" },
    { title: "【中医起源22】终章：未来医学如何发展", aid: "114959212289287", bvid: "BV134hNzFEpn", cid: "31444241400" },
  ],
  pulse: [
    { title: "脉诊实战 01", aid: "114120552619109", bvid: "BV19e9mYYEeq", cid: "28744745374" },
    { title: "脉诊实战 02", aid: "114125082467183", bvid: "BV1Zz99YWEgs", cid: "28754706980" },
    { title: "脉诊实战 03", aid: "114130652500789", bvid: "BV1jKR8YXE6Y", cid: "28773189080" },
    { title: "脉诊实战 04", aid: "114137178838748", bvid: "BV1sERGYDEPo", cid: "28793503851" },
    { title: "脉诊实战 05", aid: "114142329444331", bvid: "BV1JCRnYiEXh", cid: "28807400959" },
    { title: "脉诊实战 06", aid: "114146842513657", bvid: "BV1wUQ7YREeM", cid: "28819653471" },
    { title: "脉诊实战 07", aid: "114154006452390", bvid: "BV1NdQAY9E4N", cid: "28841872794" },
    { title: "脉诊实战 08", aid: "114159744194152", bvid: "BV1V5Q3Y9Ew3", cid: "28865200450" },
    { title: "脉诊实战 09", aid: "114160985775274", bvid: "BV1wKQ6YXE9k", cid: "28864022746" },
    { title: "脉诊实战 10", aid: "114170347396360", bvid: "BV1fVQbY7Etf", cid: "28907275930" },
    { title: "脉诊实战 11", aid: "114175615506047", bvid: "BV1awQqYZEQn", cid: "28907212255" },
    { title: "脉诊实战 12", aid: "114181286141467", bvid: "BV1CwXGYyEvG", cid: "28924775676" },
    { title: "脉诊实战 13", aid: "114181286140915", bvid: "BV1CwXGYyERz", cid: "28924839443" },
    { title: "脉诊实战 14", aid: "114193231518993", bvid: "BV1vPXPY3Evp", cid: "28964618788" },
    { title: "脉诊实战 15", aid: "114193231518152", bvid: "BV1vPXPY3ESX", cid: "28964621144" },
    { title: "脉诊实战 16", aid: "114201032990013", bvid: "BV1ecX1YsEa1", cid: "28993717814" },
  ],
};

export function VideoPlayer({ type, onClose }: VideoPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const playlist = videoDataMap[type] || [];
  const currentVideo = playlist[currentIndex];
  const modalTitle = type === "origin" ? "中医起源 · 课程合集" : "脉诊心法 · 实战合集";

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-container">
        <div className="h-14 bg-stone-900 flex items-center justify-between px-6 shrink-0">
          <div className="text-white font-serif tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span>{modalTitle}</span>
          </div>
          <button
            onClick={handleClose}
            className="text-stone-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
          <div className="flex-1 bg-black relative w-full h-full">
            <iframe
              key={currentVideo?.bvid}
              className="absolute inset-0 w-full h-full"
              src={`//player.bilibili.com/player.html?isOutside=true&aid=${currentVideo?.aid}&bvid=${currentVideo?.bvid}&cid=${currentVideo?.cid}&p=1`}
              scrolling="no"
              frameBorder="no"
              allowFullScreen
            />
          </div>
          <div className="w-full md:w-80 bg-stone-50 border-l border-stone-200 flex flex-col shrink-0">
            <div className="p-4 border-b border-stone-200 bg-white">
              <h3 className="font-bold text-stone-800">选集列表</h3>
              <p className="text-xs text-stone-500 mt-1">
                共 {playlist.length} 节课程
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2 playlist-scroll">
              {playlist.map((video, index) => (
                <div
                  key={video.bvid}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-3 rounded cursor-pointer hover:bg-stone-100 transition-colors text-sm text-stone-700 playlist-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  {index + 1}. {video.title.replace(/【.*?】/, "")}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
