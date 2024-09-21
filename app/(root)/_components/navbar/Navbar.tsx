"use client";

import React, { useRef, useState } from "react";
import Work from "@/public/_assets/work.svg";

const navBarData = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Leisure",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
];

const Navbar = () => {
  const nav = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <header className="w-full container">
      <nav className="sticky self-center top-0 grid grid-cols-12 gap-lg px-4xl py-3xl">
        <div className="font-[PPEditorialNew-Italic] text-4xl">sushan.</div>
        <div className=" col-start-5 col-end-9">
          <div className="relative ring-[1px] ring-ring/20 rounded-full flex items-center justify-between p-[8px] h-[48px]">
            {navBarData.map(({ name, link }, idx) => (
              <div
                key={name}
                ref={(el) => {
                  nav.current[idx] = el;
                }}
                className="h-full"
              >
                <button
                  className={`transition-all relative text-sm duration-500 h-full py-[6px] px-lg z-[1] ${
                    idx === activeIndex && "text-white"
                  } `}
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  key={name}
                >
                  {name}
                </button>
                <span
                  className={`bg-[#21262d]/50 border-[#2d409f]/25 border absolute rounded-full transition-all duration-700 ease-in-out`}
                  style={{
                    width: nav.current[activeIndex]?.clientWidth ?? "89px",
                    height: nav.current[activeIndex]?.clientHeight ?? "32px",
                    left: nav.current[activeIndex]?.offsetLeft ?? 8,
                  }}
                ></span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit h-11 px-sm py-1.5 bg-[#21262d]/50 rounded-[30px] border border-[#2d409f]/25 backdrop-blur-[30px] justify-center col-start-11 col-end-12 items-center gap-xs flex">
          <Work />
          <div className="whitespace-nowrap text-sm font-normal">
            Available for work
          </div>
        </div>
        {/* <div className=" flex items-start text-start gap-x-20 text-secondary-300">
          <div className="flex items-start flex-col gap-y-1">
            {navBarData.map((item) => (
              <a
                className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
                key={item.name}
              >
                <span className="link1">{item.name}</span>
                <span className="link2">{item.name}</span>
              </a>
            ))}
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
