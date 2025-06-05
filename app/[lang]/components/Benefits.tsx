"use client";

import { canela, poppins } from "@/app/fonts";
import Image from "next/image";

export default function Benefits({ data }: any) {
  return (
    <section className="w-full flex flex-col items-center justify-cente relative px-6 md:px-8 2xl:px-12 py-20 md:py-24 2xl:py-32">
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
        className={`${canela.className} text-center text-5xl md:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight md:leading-tight 2xl:leading-tight mb-10 md:mb-12 2xl:mb-14`}
      >
        {data.heading}
      </h2>
      <div className="w-full max-w-lg md:max-w-4xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-12">
        {data.list.map(
          (
            item: { icon: string; heading: string; p: string },
            index: number
          ) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                key={index}
                className="flex flex-col items-start pt-16 relative"
              >
                <span
                  className={`${poppins.className} opacity-[0.03] absolute right-0 top-0 text-[120px] leading-none`}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <Image
                  src={item.icon}
                  alt="icon"
                  width={66}
                  height={58}
                  className="h-20 w-auto mb-6"
                />
                <h4 className={`${canela.className} text-3xl mb-7`}>
                  {item.heading}
                </h4>
                <p className="text-base xl:pr-7">{item.p}</p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
