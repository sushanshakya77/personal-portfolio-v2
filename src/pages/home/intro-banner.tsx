import GibberishText from "@/src/components/text/gibberish-text";
import React from "react";

export const IntroBanner = () => {
  return (
    <div className="col-start-2 col-end-9 h-[80vh] flex items-center">
      <div className="space-y-lg">
        <h3 className="font-[PPEditorialNew-Italic] text-md">Hello there!</h3>
        <h1 className="text-6xl">
          I’m sushan shakya,
          <br />a <GibberishText text="software engineer" />.
        </h1>
      </div>
    </div>
  );
};
