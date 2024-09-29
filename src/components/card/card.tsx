"use client";
import { useMousePosition } from "@/src/hooks/misc/useMousePosition";
import { cn } from "@/src/libs/utils";
import React, { PropsWithChildren, useCallback, useRef } from "react";

type ICardProps = {
  className?: HTMLDivElement["className"];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement & PropsWithChildren
>;

export const Card = ({ children, className, ...rest }: ICardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative bg-card overflow-hidden border-ring border transition-all duration-500 ease-in-out rounded-full backdrop-blur-[30px] ",
        className
      )}
      {...rest}
    >
      <div
        ref={overlayRef}
        className="z-10 absolute h-lg w-lg rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-100"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />
      {children}
    </div>
  );
};
