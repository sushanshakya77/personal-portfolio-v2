import React from "react";
import Linkedin from "@/public/_assets/socialMedia/linkedin.svg";
import GitHub from "@/public/_assets/socialMedia/github.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full container">
      <div className="border-t border-ring w-full mt-2xl px-[72px]" />
      <div className="grid grid-cols-12 gap-lg px-4xl py-3xl ">
        <div>
          <div className="font-[PPEditorialNew-Italic] text-xs whitespace-nowrap ">
            Best regards,
          </div>
          <div className="font-[PPEditorialNew-Italic] text-xl whitespace-nowrap">
            sushan shakya
          </div>
        </div>
        <div className="col-start-6 flex gap-sm items-center">
          © {new Date().getFullYear()}
        </div>
        <div className="col-start-11 col-end-13 flex gap-sm items-center">
          <Link
            href={"https://www.linkedin.com/in/sushan-shakya-8a575a197/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link href={"https://github.com/sushanshakya77"} target="_blank">
            <GitHub />
          </Link>
        </div>
      </div>
    </footer>
  );
};
