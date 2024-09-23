"use client";

import React, { useRef, useState } from "react";
import Work from "@/public/_assets/work.svg";
import { Card } from "@/src/components/card/card";
import { navBarData } from "@/src/constants/routes";

const Navbar = () => {
  const nav = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <header className="w-full container">
      <nav className="sticky self-start top-10 grid grid-cols-12 gap-lg px-4xl py-3xl">
        <div className="font-[PPEditorialNew-Italic] text-4xl">sushan.</div>
        <div className=" col-start-5 col-end-9">
          <div className="relative border border-ring rounded-full flex items-center justify-between p-[8px] h-[48px]">
            {navBarData.map(({ name }, idx) => (
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
              </div>
            ))}

            <Card
              className={`absolute`}
              style={{
                width: nav.current[activeIndex]?.clientWidth ?? "89px",
                height: nav.current[activeIndex]?.clientHeight ?? "32px",
                left: nav.current[activeIndex]?.offsetLeft ?? 8,
              }}
            />
          </div>
        </div>
        <Card className="w-fit h-11 px-sm justify-center col-start-11 col-end-12 items-center gap-xs flex">
          <Work />
          <div className="whitespace-nowrap text-sm font-normal">
            Available for work
          </div>
        </Card>
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
