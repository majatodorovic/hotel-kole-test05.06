"use client";

import Image from "next/image";

export default function Header({ data }: { data: any }) {
  return (
    <header
      data-aos="fade-in"
      data-aos-easing="fadeUpCustom"
      className="w-full flex flex-col items-center justify-center"
    >
      <Image
        src={"/images/home/banner.jpg"}
        alt="banner"
        width={1920}
        height={770}
        className={`w-full duration-300 min-h-[300px] h-auto max-h-[700px] md:min-h-[550px] object-bottom object-cover`}
      />
      <div className="flex justify-center bg-blue-800 text-white py-6 w-full">
        <div
          className={`px-6 grid grid-cols-1 sm:grid-cols-2 text-center gap-y-2 sm:gap-y-4 gap-x-12 lg:gap-0 lg:flex text-base lg:divide-x-[1px] divide-white/30`}
        >
          <div className="lg:pl-0 lg:px-12">
            <a href={`tel: ${data.tel}`} className="underline-after-expandable">
              {data.tel}
            </a>
          </div>
          <div className="lg:px-12">
            <a
              href={`mailto: ${data.mail}`}
              className="underline-after-expandable"
            >
              {data.mail}
            </a>
          </div>
          <div className="lg:px-12">
            <span>{data.address}</span>
          </div>
          <div className="lg:px-12 lg:pr-0">
            <a
              href={`${data.addressLink}`}
              target="_blank"
              className="underline-after"
            >
              {data.addressBtn}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
