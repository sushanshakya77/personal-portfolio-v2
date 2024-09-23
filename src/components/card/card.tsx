import React, { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ICardProps = {
  className?: HTMLDivElement["className"];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement & PropsWithChildren
>;

export const Card = ({ children, className, ...rest }: ICardProps) => {
  return (
    <div
      className={twMerge(
        "bg-card border-ring border transition-all duration-500 ease-in-out rounded-full backdrop-blur-[30px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
