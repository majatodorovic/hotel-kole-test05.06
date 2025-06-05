"use client";
import { canela } from "@/app/fonts";
import Image from "next/image";

export default function Intro({ data }: any) {
  return (
    <section className="w-full flex justify-center pt-16 pb-24 md:py-24 2xl:py-36 px-6 md:px-8 2xl:px-12">
      <div className="flex max-w-3xl flex-col items-center lg:grid lg:items-start lg:grid-cols-2 lg:max-w-7xl 2xl:max-w-[1612px] w-full">
        <div className="flex flex-col mb-12 lg:mb-0 items-start md:pr-12 2xl:pr-16">
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-xl md:text-2xl mb-8 md:mb-11 uppercase"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} max-w-xl text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-11`}
          >
            {data.heading}
          </h2>
          <div className="flex flex-col items-start gap-y-6">
            {data.p.map((p: string, index: number) => (
              <p
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                dangerouslySetInnerHTML={{ __html: p }}
                key={index}
                className="text-base md:text-lg xl:text-xl"
              ></p>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" data-aos-easing="fadeUpCustom">
          <Image
            src={"/images/attractions/image-1.webp"}
            alt="second section image"
            width={1606}
            height={1148}
            className="w-full h-auto max-h-[570px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
