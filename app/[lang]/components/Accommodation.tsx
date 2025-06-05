"use client";

import { canela } from "@/app/fonts";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Accommodation({ data, lang }: any) {
  const [slides, setSlides] = useState(
    data.slides.map((slide: any) => ({ ...slide, active: false }))
  );
  const router = useRouter();
  return (
    <section className="flex flex-col items-center w-full bg-gray-200 py-16">
      <div className="w-full max-w-[1410px] flex flex-col lg:flex-row justify-center items-start gap-x-28 2xl:gap-x-36 px-6 md:px-8 2xl:px-12 mb-14">
        <div className="flex flex-col items-start">
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-red-800 text-lg mb-2"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-7 max-w-[550px]`}
          >
            {data.heading}
          </h2>
        </div>
        <p
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`text-base md:text-lg 2xl:text-xl w-full lg:w-7/12 2xl:w-1/2`}
        >
          {data.p}
        </p>
      </div>
      <Swiper
        rewind
        loopAddBlankSlides={true}
        slidesPerView={"auto"}
        wrapperClass="h-auto"
        modules={[Navigation]}
        className="w-full pl-6 md:pl-8 2xl:pl-12"
      >
        {slides.map(
          (
            slide: {
              img: string;
              heading: string;
              numberOfPeople: string;
              active: boolean;
            },
            index: number
          ) => {
            return (
              <SwiperSlide
                className="w-[calc(100vw-50px)] max-w-sm md:max-w-md 2xl:max-w-lg md:w-full pr-6 md:pr-8 2xl:pr-12 md:even:mt-20"
                key={index}
              >
                <div
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  className="flex flex-col items-start w-full h-full relative group overflow-hidden hover:cursor-pointer"
                  onClick={() => {
                    if (slide.active) {
                      router.push(`/${lang}/accommodation`);
                    } else {
                      const slidesCopy = [...slides];
                      slidesCopy[index].active = true;
                      console.log(slidesCopy[index]);
                      setSlides(slidesCopy);
                    }
                  }}
                  onMouseOver={() => {
                    const slidesCopy = [...slides];
                    slidesCopy[index].active = true;
                    console.log(slidesCopy[index]);
                    setSlides(slidesCopy);
                  }}
                  onMouseLeave={() => {
                    const slidesCopy = [...slides];
                    slidesCopy[index].active = false;
                    setSlides(slidesCopy);
                  }}
                >
                  <Image
                    src={slide.img}
                    alt="slide image"
                    className="w-full"
                    width={1518}
                    height={1980}
                  />
                  <Image
                    src={"/images/home/shape.png"}
                    alt="shape"
                    width={505}
                    height={324}
                    className="absolute bottom-0 left-0 w-full h-auto duration-300 translate-y-full group-hover:translate-y-0 pointer-events-none"
                  />

                  <div className="absolute bottom-0 left-0 w-full flex flex-col items-start px-6 sm:px-10 pb-11 text-white duration-300 translate-y-full group-hover:translate-y-0 pointer-events-none">
                    <h3
                      className={`${canela.className} text-3xl w-full border-white border-b-2 pb-1`}
                    >
                      {slide.heading}
                    </h3>
                    <div className="w-full flex justify-between pt-5">
                      <div className="flex items-center">
                        <Image
                          src={"/images/home/groupIcon.png"}
                          alt="group icon"
                          width={27}
                          height={20}
                          className="h-5 w-auto mr-4"
                        />
                        <span>{slide.numberOfPeople}</span>
                      </div>
                      <div className="flex gap-x-2 items-center">
                        <Image
                          src={"/images/home/star.png"}
                          alt="star"
                          width={18}
                          height={17}
                          className="w-4 h-auto"
                        />
                        <Image
                          src={"/images/home/star.png"}
                          alt="star"
                          width={18}
                          height={17}
                          className="w-4 h-auto"
                        />
                        <Image
                          src={"/images/home/star.png"}
                          alt="star"
                          width={18}
                          height={17}
                          className="w-4 h-auto"
                        />
                        <Image
                          src={"/images/home/star.png"}
                          alt="star"
                          width={18}
                          height={17}
                          className="w-4 h-auto"
                        />
                        <Image
                          src={"/images/home/star.png"}
                          alt="star"
                          width={18}
                          height={17}
                          className="w-4 h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-full h-full bg-black/50 duration-300 group-hover:opacity-0 pointer-events-none group-hover:pointer-events-auto"></div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
}
