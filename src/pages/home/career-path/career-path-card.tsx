import { Card } from "@/src/components/card/card";
import Link from "next/link";
import React from "react";
import { ICareerPath } from "./types";
import Image from "next/image";
import { getImage } from "@/src/utils/getOriginUrl";

const CareerPathCard = ({
  company,
  designation,
  duration,
  id,
  interval,
}: ICareerPath) => {
  return (
    <div className="relative">
      <Card
        className={`rounded-lg ${id === 0 ? "border-2 border-primary" : ""}`}
      >
        <div className="grid items-center justify-between w-full grid-cols-1 p-md rounded-lg md:grid-cols-2">
          <div className="flex gap-sm">
            <span className="relative shrink-0 overflow-hidden w-3xl h-3xl rounded-lg">
              <Image
                className="aspect-square h-full w-full"
                src={getImage(company.logo)}
                alt={company.name}
                width={48}
                height={48}
              />
            </span>
            <div>
              <div className="text-lg font-semibold">{designation}</div>
              <div className="flex gap-xxs font-semibold md:gap-xs">
                <Link target="_blank" href={company.link}>
                  <div className="font-medium hover:text-blue-500 hover:underline text-md">
                    {company.name}
                  </div>
                </Link>
                <div>—</div>
                <div>Full Time</div>
              </div>
              <div className="text-sm text-secondary-foreground">
                {company.location}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-xxs py-3 pl-16 md:py-0 md:items-end">
            <div className="font-medium text-tp text-md">{duration}</div>
            <div className="text-sm text-secondary-foreground">{interval}</div>
          </div>
        </div>
      </Card>
      <div className="w-full">
        <div
          className={`ml-md border-l-2 border-dotted h-2xl ${
            id === 0 ? "border-primary" : "border-ring"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CareerPathCard;
