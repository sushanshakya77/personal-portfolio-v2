"use client";

import { useIntersectionObserver } from "@/hooks/custom/useIntersectionOnserver";
import { getOriginUrl } from "@/lib/getOriginUrl";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const card = useRef<HTMLDivElement | null>(null);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <>
      <section
        className="grid grid-cols-12 gap-[24px] px-3xl container"
        ref={card}
      >
        <div className="col-start-2 col-end-8 h-[75vh] flex items-center">
          <div className="space-y-lg">
            <h3 className="font-[PPEditorialNew-Italic] text-md">
              Hello there!
            </h3>
            <h1 className="text-7xl">
              I’m sushan shakya, a software engineer.
            </h1>
          </div>
        </div>

        <div className="col-start-2 col-end-12 space-y-2xl relative">
          <h3 className="text-center uppercase tracking-widest">
            Recent projects
          </h3>
          <div
            className="bg-[#21262d]/50 rounded-xl border border-[#2d409f]/25 backdrop-blur-[30px] container hover:shadow-[0px_0px_40px_0px_rgb(36,36,36)] transition-all flex flex-col overflow-hidden ease-in-out duration-1000 will-change-auto  hover:scale-105 "
            style={{
              height: "505px",
              width: "100%",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting
                ? "perspective(1200px) scale(1) rotateX(0deg)"
                : "perspective(1200px) scale(0.5) rotateX(20deg)",
            }}
            ref={ref}
          >
            <div className="flex pt-2xl px-3xl">
              <h4 className="tracking-widest flex-1">01 | VEEL</h4>
              <Image
                src={getOriginUrl() + "/_assets/workLogo/veel.webp"}
                alt=""
                width={24}
                height={24}
                className="opacity-80"
              />
            </div>
            <div className="grow"></div>
            <div className="w-full flex gap-3xl">
              <div className="w-fit">
                <Image
                  src={getOriginUrl() + "/_assets/workLogo/veelSnippet.webp"}
                  alt=""
                  width={450}
                  height={500}
                  className="rounded-tr-lg"
                />
              </div>
              <div className="flex flex-col space-y-md w-1/2">
                <Image
                  src={getOriginUrl() + "/_assets/workLogo/veelText.png"}
                  alt=""
                  width={150}
                  height={400}
                  className=""
                />
                <h4 className="tracking-wide leading-relaxed">
                  Focused on developing, managing and optimizing web
                  applications for the in-house application
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
