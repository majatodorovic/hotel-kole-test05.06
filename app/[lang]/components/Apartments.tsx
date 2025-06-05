"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

export default function Apartments({ data }: any) {
  return (
    <section className="w-full flex flex-col text-center items-center pb-20 md:pb-24 2xl:pb-28">
      <div className="flex flex-col items-center px-6 md:px-8 2xl:px-12">
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
          className={`${canela.className} text-5xl md:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight md:leading-tight 2xl:leading-tight mb-12 md:mb-16 2xl:mb-20`}
        >
          {data.heading}
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.9,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
        autoHeight={true}
        spaceBetween={40}
        initialSlide={1}
        centeredSlides={true}
        className="w-full"
        wrapperClass=""
      >
        {data.items.map(
          (
            apartment: {
              heading: string;
              img: string;
              paragraph: string;
            },
            index: number
          ) => {
            return (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <Slide apartment={apartment} />
              </SwiperSlide>
            );
          }
        )}
        <div
          className="flex w-full items-center justify-between max-w-5xl pointer-events-none absolute z-10 top-28 md:top-32 lg:top-36 2xl:top-52 left-1/2 -translate-x-1/2 px-6"
          slot="container-end"
        >
          <Buttons />
        </div>
      </Swiper>
    </section>
  );
}

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex items-center justify-center bg-blue-800 w-16 h-16 pointer-events-auto"
        onClick={() => swiper.slidePrev()}
      >
        <Image
          src={"/images/home/arrowWhite.png"}
          alt="arrow"
          width={18}
          height={16}
          className="w-5/12 h-auto"
        />
      </button>
      <button
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex items-center justify-center bg-blue-800 w-16 h-16 pointer-events-auto"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src={"/images/home/arrowWhite.png"}
          alt="arrow"
          width={18}
          height={16}
          className="w-5/12 h-auto -scale-100"
        />
      </button>
    </>
  );
};

const Slide = ({ apartment }: any) => {
  const slide = useSwiperSlide();
  return (
    <>
      <Image
        src={apartment.img}
        alt="apartment slide"
        width={1540}
        height={1000}
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="h-80 lg:h-96 2xl:h-[500px] object-cover"
      />
      <div
        className={`flex flex-col relative items-start pt-9 px-9 text-left duration-300 bg-white w-full max-w-2xl pb-4 -mt-14 ${
          slide.isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <h4 className={`${canela.className} text-4xl mb-4`}>
          {apartment.heading}
        </h4>
        <p>{apartment.paragraph}</p>
      </div>
    </>
  );
};
