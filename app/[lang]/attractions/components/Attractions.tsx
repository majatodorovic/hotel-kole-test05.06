"use client";

import { canela } from "@/app/fonts";

import Image from "next/image";

export default function Attractions({ data }: any) {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-8 2xl:px-12">
      <div className="flex flex-col items-center sm:grid sm:items-start sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-24 2xl:gap-y-36 lg:max-w-5xl xl:max-w-[1612px] w-full">
        {data.items.map((item: any, index: number) => {
          return (
            <div
              className="flex flex-col justify-start items-start h-full"
              key={index}
            >
              <div
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                className="flex flex-col items-start w-full mb-6"
              >
                <Image
                  src={item.img}
                  alt="image 1"
                  width={1566}
                  height={1146}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                className={`${canela.className} text-3xl md:text-4xl 2xl:text-[40px] mb-4`}
              >
                {item.heading}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                className="md:text-lg 2xl:text-xl mb-4"
              >
                {item.description}
              </p>
              <a
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                href={item.link}
                target="_blank"
                className="text-xl md:text-2xl underline-after grow flex items-end"
              >
                {data.linkText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
