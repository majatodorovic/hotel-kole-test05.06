"use client";

import Image from "next/image";
import { canela } from "@/app/fonts";
import Link from "next/link";

export default function AboutUs({ data, lang }: any) {
  return (
    <section className="w-full flex justify-center relative px-6 md:px-8 2xl:px-12">
      <div
        data-aos="fade-in"
        data-aos-easing="fadeUpCustom"
        className="absolute left-0 top-0 w-full h-full flex justify-start"
      >
        <div className="bg-blue-800 w-full xl:w-2/3 shrink-0"></div>
        <div className="h-full w-full shrink bg-[#f8f8f8] absolute opacity-5 xl:opacity-100 xl:static left-0 top-0">
          <Image
            src={"/images/home/lines.png"}
            alt="lines"
            width={991}
            height={702}
            className="w-full h-full object-cover object-bottom opacity-30"
          />
        </div>
      </div>
      <div className="w-full flex flex-col-reverse xl:flex-row-reverse items-center justify-center relative text-white max-w-[1170px] py-20 md:py-24 gap-x-24">
        <div className="w-full shrink-0 xl:w-1/2 max-w-sm md:max-w-xl">
          <Image
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            src={"/images/home/restoran.jpg"}
            alt="restaurant"
            width={1140}
            height={920}
            className="w-full h-auto"
          />
        </div>
        <div
          className={`w-full shrink flex max-w-xl md:max-w-2xl xl:max-w-none flex-col items-center text-center xl:text-left xl:items-start mb-12 xl:mb-0`}
        >
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`font-bold text-[21px] mb-4 uppercase`}
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-5xl md:text-5xl xl:text-6xl max-w-lg 2xl:text-[80px] leading-[1.1] md:leading-[1.1] 2xl:leading-[1.1] mb-7 `}
          >
            {data.heading}
          </h2>
          <div className={`flex flex-col items-start w-full xl:max-w-xl`}>
            {data.paragraphs.map((p: string, index: number) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  key={index}
                  className={`text-base ${
                    index === data.paragraphs.length - 1 ? "" : "mb-7"
                  }`}
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              );
            })}
          </div>
          {data.btn && (
            <Link
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              prefetch={false}
              href={`/${lang}${data.btn.href}`}
              className="h-14 mt-10 flex items-center justify-center min-w-52 px-6 border-2 border-transparent font-bold rounded-lg bg-white text-black hover:border-white hover:bg-blue-800 hover:text-white"
            >
              <span>{data.btn.text}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
