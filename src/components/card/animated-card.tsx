import { cn } from "@/src/libs/utils";
import React, { PropsWithChildren } from "react";
import { Card } from "./card";

type ICardProps = {
  className?: HTMLDivElement["className"];
  isIntersecting: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement & PropsWithChildren
>;

export const AnimatedCard = ({
  children,
  className,
  isIntersecting,

  ...rest
}: ICardProps) => {
  return (
    <Card
      className={cn(
        "rounded-xl flex flex-col overflow-hidden duration-1000 will-change-auto hover:shadow-[0px_0px_40px_0px_rgb(36,36,36)]"
      )}
      style={{
        height: "505px",
        width: "100%",
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting
          ? "perspective(1200px) scale(1) rotateX(0deg)"
          : "perspective(1200px) scale(0.5) rotateX(20deg)",
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};
