import React from "react";
import Linkedin from "@/public/_assets/socialMedia/linkedin.svg";
import GitHub from "@/public/_assets/socialMedia/github.svg";
import Instagram from "@/public/_assets/socialMedia/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full container">
      <div className="border-t border-ring w-full mt-2xl px-[72px]" />
      <div className="grid grid-cols-12 gap-lg px-4xl py-3xl ">
        <div>
          <div className=" text-md font-bold whitespace-nowrap">
            © {new Date().getFullYear()} sushan shakya
          </div>
          <div className="text-xs whitespace-nowrap ">
            Last updated on September 20, 2024
          </div>
        </div>

        <div className="col-start-11 col-end-13 flex gap-sm items-center">
          <Link
            href={"https://www.linkedin.com/in/sushan-shakya-8a575a197/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link href={"https://www.instagram.com/whossushan/"} target="_blank">
            <Instagram />
          </Link>
          <Link href={"https://github.com/sushanshakya77"} target="_blank">
            <GitHub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
