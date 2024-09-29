import { Card } from "@/src/components/card/card";

import { careerPath } from "@/src/constants/home/careerPath";
import Link from "next/link";
import CareerPathCard from "./career-path-card";

const CareerPath = () => {
  return (
    <div className="col-start-2 col-end-12 flex flex-col my-xl space-y-2xl">
      <h3 className="text-center uppercase tracking-widest">Career path</h3>
      <div>
        {careerPath.map(({ designation, company, duration, interval }, idx) => (
          <CareerPathCard
            id={idx}
            key={`${idx}-${duration}`}
            company={company}
            designation={designation}
            interval={interval}
            duration={duration}
          />
        ))}

        <div className="flex items-center gap-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-xl h-xl text-green-500 border border-primary rounded-full"
          >
            <circle
              cx="12.1"
              cy="12.1"
              r="1"
              className="animate-pulse"
            ></circle>
          </svg>
          <span className="text-lg font-semibold text-ts">
            Journey Started from 2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
