"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export default function Properties({ data }: any) {
  return (
    <section className="flex justify-center w-full py-24 md:py-36 2xl:py-44 px-6 md:px-8 2xl:px-12 relative">
      <div className="w-full max-w-lg md:max-w-4xl xl:max-w-6xl flex flex-col">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoHeight={true}
          spaceBetween={30}
          className="w-full"
          loop={true}
        >
          {data.links.map(
            (
              property: {
                href: string;
                text: string;
                p: string;
                img: string;
              },
              index: number
            ) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="fadeUpCustom"
                    className="flex flex-col items-start relative"
                  >
                    <Image
                      src={property?.img}
                      alt={`property ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto mb-7"
                    />
                    <h3 className={`${canela.className} text-3xl mb-6`}>
                      {property.text}
                    </h3>
                    <div className="w-full mb-7">
                      <p className="w-full xl:max-w-80 line-clamp-4">
                        {property.p}
                      </p>
                    </div>
                    <a
                      href={property.href}
                      target="_blank"
                      className="h-14 flex items-center justify-center min-w-52 px-6 border-2 border-transparent font-bold rounded-lg bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black"
                    >
                      <span>{data.linkText}</span>
                    </a>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div
            className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-8 md:mb-14"
            slot="container-start"
          >
            <div className="flex flex-col items-start">
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
                className={`${canela.className} text-5xl md:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight md:leading-tight 2xl:leading-tight`}
              >
                {data.heading}
              </h2>
            </div>
            <Buttons />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex items-center gap-x-5 mt-6 md:mt-0"
      >
        <button
          className="relative group flex items-center justify-center bg-[#f8f8f8] hover:bg-blue-800 w-16 h-16 pointer-events-auto duration-300 hover:shadow-2xl"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            src={"/images/home/arrowWhite.png"}
            alt="arrow"
            width={18}
            height={16}
            className="w-4/12 h-auto absolute opacity-0 group-hover:opacity-100"
          />
          <Image
            src={"/images/home/arrowBlack.png"}
            alt="arrow"
            width={18}
            height={16}
            className="w-4/12 h-auto absolute group-hover:opacity-0"
          />
        </button>
        <button
          className="relative group flex items-center justify-center bg-[#f8f8f8] hover:bg-blue-800 w-16 h-16 pointer-events-auto duration-300 hover:shadow-2xl"
          onClick={() => swiper.slideNext()}
        >
          <Image
            src={"/images/home/arrowWhite.png"}
            alt="arrow"
            width={18}
            height={16}
            className="w-4/12 h-auto -scale-100 absolute opacity-0 group-hover:opacity-100"
          />
          <Image
            src={"/images/home/arrowBlack.png"}
            alt="arrow"
            width={18}
            height={16}
            className="w-4/12 h-auto -scale-100 absolute group-hover:opacity-0"
          />
        </button>
      </div>
    </>
  );
};
