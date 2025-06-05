"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({ data, lang }: any) {
  const [currentYear, setCurrentYear] = useState<null | number>(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer
      data-aos="fade-in"
      data-aos-easing="fadeUpCustom"
      data-aos-once="true"
      className="w-full flex flex-col items-center px-6 md:px-7 bg-blue-800 pt-10 md:pt-16 text-white overflow-hidden"
    >
      <div className="flex w-full max-w-[1612px] flex-col items-center">
        <Link href={"/"} prefetch={false}>
          <div
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            data-aos-once="true"
          >
            <Image
              src={"/images/navigation/logoWhite.png"}
              alt="white logo"
              width={234}
              height={171}
              className="max-w-48 md:max-w-80 w-full mb-10 md:mb-16 -translate-x-[9%]"
            />
          </div>
        </Link>
        <div className="w-full font-light flex flex-col gap-y-3 lg:gap-y-0 items-start md:items-center lg:grid lg:items-start lg:gap-x-6 lg:grid-cols-[25%_auto_25%] text-base sm:text-lg md:text-xl 2xl:text-2xl mb-9">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {data.socials.map((social: any, index: number) => {
              return (
                <a
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  data-aos-once="true"
                  target="_blank"
                  href={social.href}
                  key={index}
                >
                  <span className="underline-after-expandable">
                    {social.linkText}
                  </span>
                  {index !== data.socials.length - 1 && (
                    <span className="mr-1">,</span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex justify-start flex-wrap lg:justify-center">
            {data.navLinks.map((navLink: any, index: number) => {
              return (
                <Link
                  prefetch={false}
                  href={`/${lang}${navLink.href}`}
                  key={index}
                >
                  <span
                    data-aos="fade-up"
                    data-aos-easing="fadeUpCustom"
                    data-aos-once="true"
                    className="underline-after-expandable inline-block"
                  >
                    {navLink.linkText}
                  </span>
                  {index !== data.navLinks.length - 1 && (
                    <span
                      data-aos="fade-up"
                      data-aos-easing="fadeUpCustom"
                      data-aos-once="true"
                      className="mr-1 inline-block"
                    >
                      ,
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Link
              prefetch={false}
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              data-aos-once="true"
              href={`/${lang}/${data.termsAndConditions.href}`}
              className="underline-after-expandable"
            >
              {data.termsAndConditions.text}
            </Link>
          </div>
        </div>
        <div className="w-full bg-white h-[1px]"></div>
        <p
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          data-aos-offset="0"
          data-aos-once="true"
          className="text-center font-light text-sm md:text-base pt-8 2xl:pt-12 pb-5 2xl:pb-9"
        >
          © {currentYear} Hotel Kole | {data.copyright} Powered by{" "}
          <a
            className="underline"
            href="https://www.croonus.com/"
            target="_blank"
          >
            Croonus Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
