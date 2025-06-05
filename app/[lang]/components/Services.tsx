"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { canela } from "@/app/fonts";
import Link from "next/link";
import { useRef } from "react";

export default function Services({ data, lang }: any) {
  const swiperRef = useRef<any>(null);
  const nextBtnRef = useRef<any>(null);
  const handleNextClick = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      swiper.slideNext(); // Move to the next slide
    }
  };

  return (
    <section
      data-aos="fade-in"
      data-aos-easing="fadeUpCustom"
      className="flex pb-8 lg:pb-0 pt-8 md:pt-12 lg:pt-0 lg:mt-52 2xl:mt-60 justify-end min-[1920px]:justify-center w-full bg-gray-200 pl-6 md:pl-8 2xl:pl-12"
    >
      <div className="w-full flex flex-col lg:flex-row gap-x-16 max-w-[1765px] min-[1920px]:translate-x-14">
        <div className="flex pr-7 lg:pr-0 flex-col max-w-xl lg:max-w-md pt-11">
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-xl md:text-2xl mb-8 md:mb-11"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-11`}
          >
            {data.heading}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="text-base md:text-lg xl:text-xl"
          >
            {data.p}
          </p>
        </div>
        <Swiper
          rewind
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store swiper instance
            swiper.pagination.el.append(nextBtnRef.current);
          }}
          loopAddBlankSlides={true}
          onResize={() => {
            swiperRef.current.pagination.el.append(nextBtnRef.current);
          }}
          slidesPerView={"auto"}
          pagination={{
            type: "fraction",
            horizontalClass: "servicesPagination",
            formatFractionTotal: () => data.slides.length,
          }}
          wrapperClass="h-auto"
          modules={[Pagination, Navigation]}
          className="w-full shrink mt-8 md:mt-12 lg:-mt-24 h-auto flex flex-col"
        >
          {data.slides.map((slide: any, index: number) => {
            return (
              <SwiperSlide
                className="w-72 md:w-80 mr-9 xl:w-80 2xl:w-[437px] h-full"
                key={index}
              >
                <div
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  className="flex flex-col items-start w-full h-full"
                >
                  <Image
                    src={slide.img}
                    alt="slide image"
                    className="mb-7 w-full h-auto"
                    width={430}
                    height={560}
                  />
                  <div className="h-full grow flex flex-col items-start justify-start">
                    <h3
                      className={`${canela.className} text-3xl md:text-4xl 2xl:text-[44px] mb-5`}
                    >
                      {slide.heading}
                    </h3>
                    <p className="text-base md:text-lg xl:text-xl mb-5">
                      {slide.p}
                    </p>
                    <div className="grow flex items-end">
                      <Link
                        prefetch={false}
                        href={`/${lang}/${slide.href}`}
                        className="text-xl md:text-2xl underline-after"
                      >
                        {slide.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <button
            ref={nextBtnRef}
            onClick={handleNextClick}
            className="ml-4 group"
          >
            <Image
              src={"/images/services/rightArrow.png"}
              alt="right arrow"
              width={100}
              height={50}
              className="w-12 md:w-16 transition-transform group-hover:translate-x-[10%]"
            />
          </button>
        </Swiper>
      </div>
    </section>
  );
}
