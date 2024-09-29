/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { AnimatedCard } from "@/src/components/card/animated-card";
import { recentProjects } from "@/src/constants/home/recentProjects";
import { useIntersectionObserver } from "@/src/hooks/misc/useIntersectionOnserver";
import { getImage } from "@/src/utils/getOriginUrl";
import Image from "next/image";
import React from "react";

export const RecentProjects = () => {
  return (
    <>
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
                  className="opacity-80 rounded-full"
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
    </>
  );
};
