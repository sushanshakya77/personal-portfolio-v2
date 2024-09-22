"use client";

import { AnimatedCard } from "@/src/components/card/animated-card";
import { Card } from "@/src/components/card/card";
import { useIntersectionObserver } from "@/src/hooks/misc/useIntersectionOnserver";
import { getOriginUrl } from "@/src/utils/getOriginUrl";
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
          <AnimatedCard isIntersecting={isIntersecting} ref={ref}>
            <div className="flex pt-2xl px-3xl">
              <h4 className="tracking-widest flex-1">01 | VEEL</h4>
              <Image
                src={getOriginUrl() + "/workLogo/veel.webp"}
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
                  src={getOriginUrl() + "/workLogo/veelSnippet.webp"}
                  alt=""
                  width={450}
                  height={500}
                  className="rounded-tr-lg "
                />
              </div>
              <div className="flex flex-col space-y-md w-1/2">
                <Image
                  src={getOriginUrl() + "/workLogo/veelText.png"}
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
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}
