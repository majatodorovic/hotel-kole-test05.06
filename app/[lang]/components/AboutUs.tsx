"use client";

import Image from "next/image";
import { canela } from "@/app/fonts";
import Link from "next/link";

export default function AboutUs({ data, lang }: any) {
  return (
    <section className="flex flex-col-reverse items-center xl:flex-row justify-center gap-x-12 xl:gap-x-20 px-6 md:px-8 2xl:px-12 mt-16 md:mt-20 2xl:mt-24 mb-16 md:mb-20 xl:mb-72 relative">
      <div className="w-full xl:w-1/2 max-w-sm gap-y-6 md:gap-y-0 md:max-w-xl shrink-0 grid grid-cols-1 md:grid-cols-2 gap-x-7">
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="relative flex flex-col items-center text-center bg-white shadow-md px-3 md:mb-7 pt-10 pb-8 md:pb-4"
        >
          <Image
            src={"/images/home/protein.png"}
            alt="taste"
            width={248}
            height={252}
            className="w-1/2 h-auto opacity-5 mb-6 absolute right-1 top-1"
          />
          <Image
            src={"/images/home/protein.png"}
            alt="taste"
            width={248}
            height={252}
            className="w-16 h-auto mb-6"
          />
          <h3 className={`${canela.className} text-4xl mb-5`}>
            {data.taste.heading}
          </h3>
          <p className="leading-normal">{data.taste.paragraph}</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="w-full md:mt-7"
        >
          <Image
            src={"/images/home/about-us-1.jpg"}
            alt="taste"
            width={810}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="w-full md:pb-7"
        >
          <Image
            src={"/images/home/about-us-2.jpg"}
            alt="taste"
            width={810}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="relative flex flex-col items-center text-center bg-blue-800 text-white shadow-md px-3 pt-10 pb-8 md:pb-4 md:mt-7"
        >
          <Image
            src={"/images/home/bedWhite.png"}
            alt="taste"
            width={248}
            height={252}
            className="w-16 h-auto mb-6"
          />
          <h3 className={`${canela.className} text-4xl mb-5`}>
            {data.luxRoom.heading}
          </h3>
          <p className="leading-normal">{data.luxRoom.paragraph}</p>
        </div>
      </div>
      <div
        className={`w-full max-w-4xl 2xl:w-1/2 2xl:max-w-3xl flex flex-col items-center text-center xl:text-left xl:items-start mb-12 xl:mb-0`}
      >
        <Image
          data-aos="fade-in"
          data-aos-easing="fadeUpCustom"
          src={"/images/home/about-us-3.jpg"}
          alt="about us banner"
          width={810}
          height={900}
          className="absolute shrink-0 -top-16 md:-top-20 xl:top-36 left-0 xl:left-1/2 ml-0 xl:-ml-48 w-auto max-w-none h-full -z-10"
        />
        <h3
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`font-bold text-[21px] mb-3 uppercase`}
        >
          {data.subheading}
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`${canela.className} text-5xl md:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight md:leading-tight 2xl:leading-tight mb-7 `}
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
            className="h-14 mt-10 flex items-center justify-center min-w-52 px-6 border-2 border-transparent font-bold rounded-lg bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black"
          >
            <span>{data.btn.text}</span>
          </Link>
        )}
      </div>
    </section>
  );
}
