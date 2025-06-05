"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";
import History from "./History";
import Trophies from "./Trophies";
import Management from "./Management";

export default function Mission({ data }: any) {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <section
      data-aos="fade-in"
      data-aos-easing="fadeUpCustom"
      className="flex bg-red-800 justify-center px-6 md:px-8 2xl:px-12"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex flex-wrap xl:grid gap-y-9 xl:gap-y-0 gap-x-9 xl:grid-rows-[auto_auto] xl:grid-cols-3 px-0 w-full py-16 md:py-20 2xl:py-24 justify-center lg:max-w-7xl 2xl:max-w-[1612px]"
      >
        {data.qualities.map((item: any, key: number) => (
          <button
            onClick={() => setSelectedItem(key)}
            className={`group relative overflow-hidden max-w-sm sm:max-w-md xl:max-w-none border-2 text-left border-gray-200 min-h-96 flex flex-col items-start pl-6 sm:pl-10 xl:pl-12 2xl:pl-14 pr-6 sm:pr-10 md:pr-12 2xl:pr-20 pt-10 xl:pt-14 pb-36 sm:pb-48 ${
              selectedItem === key ? "bg-red-800 text-white" : "bg-gray-200"
            } hover:bg-red-800 hover:text-white`}
            key={key}
          >
            <h3
              className={`${canela.className} text-4xl md:text-5xl 2xl:text-6xl mb-8`}
            >
              {item.heading}
            </h3>
            <p className="md:text-lg 2xl:text-xl">{item.p}</p>
            <Image
              src={item.icon}
              alt="icon"
              className={`h-auto absolute bottom-0 right-0 opacity-50 sm:opacity-100 ${
                key === 0
                  ? "w-44"
                  : key === 1
                  ? "w-48 translate-x-[7%] translate-y-[7%]"
                  : "w-52 translate-y-[12%] translate-x-[22%]"
              } group-hover:hidden`}
              width={512}
              height={512}
            />
            <Image
              src={item.iconActive}
              alt="icon"
              className={`${
                selectedItem === key ? "block" : "hidden"
              } opacity-50 sm:opacity-100 group-hover:block h-auto absolute bottom-0 right-0 ${
                key === 0
                  ? "w-44"
                  : key === 1
                  ? "w-44"
                  : "w-44 translate-y-[5%] translate-x-[1%]"
              }`}
              width={512}
              height={512}
            />
          </button>
        ))}
        {selectedItem === 0 && <History data={data.history} />}
        {selectedItem === 1 && <Trophies data={data.trophies} />}
        {selectedItem === 2 && <Management data={data.management} />}
      </div>
    </section>
  );
}
