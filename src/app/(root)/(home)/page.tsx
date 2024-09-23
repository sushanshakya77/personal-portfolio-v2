/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { AnimatedCard } from "@/src/components/card/animated-card";
import { recentProjects } from "@/src/constants/home/recentProjects";
import { useIntersectionObserver } from "@/src/hooks/misc/useIntersectionOnserver";
import { getImage, getOriginUrl } from "@/src/utils/getOriginUrl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-12 gap-[24px] px-3xl container">
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
          {recentProjects.map((item, idx) => {
            const { ref, isIntersecting } = useIntersectionObserver({
              threshold: 0.1,
              freezeOnceVisible: true,
            });

            return (
              <AnimatedCard key={item.name} isIntersecting={isIntersecting}>
                <div className="flex pt-2xl px-3xl" ref={ref}>
                  <h4 className="tracking-widest flex-1 uppercase">
                    0{idx + 1} | {item.name}
                  </h4>
                  <Image
                    src={getImage(item.smallIcon)}
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
                      src={getImage(item.snippetImage)}
                      alt=""
                      width={450}
                      height={500}
                      className="rounded-tr-lg "
                    />
                  </div>
                  <div className="flex flex-col space-y-md w-1/2">
                    <Image
                      src={getImage(item.textIcon)}
                      alt=""
                      width={150}
                      height={400}
                      className=""
                    />
                    <h4 className="tracking-wide leading-relaxed">
                      {item.description}
                    </h4>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
