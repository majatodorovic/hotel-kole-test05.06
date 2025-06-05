"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Virtual } from "swiper/modules";

export default function Gallery({ data }: any) {
  const [lightboxOpen, setLightBoxOpen] = useState<any>(null);
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-8 2xl:px-12">
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:max-w-4xl xl:max-w-[1612px] w-full">
        {data.map((image: any, index: number) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="flex flex-col h-full items-start w-full"
            >
              <div className="group flex flex-col h-full items-start w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt="image 1"
                  width={1566}
                  height={1146}
                  className="w-full h-auto object-cover hover:cursor-pointer transition-transform ease-out duration-300 group-hover:scale-110"
                  onClick={() => {
                    setLightBoxOpen(index);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {lightboxOpen !== null &&
        createPortal(
          <>
            <div
              data-aos="fade-in"
              data-aos-easing="fadeUpCustom"
              onClick={() => setLightBoxOpen(null)}
              className="fixed z-50 left-0 top-0 w-full h-full flex flex-col gap-y-2 sm:gap-y-6 md:gap-y-8 2xl:gap-y-12 justify-between items-center p-2 sm:p-6 md:p-8 2xl:p-12 bg-blue-800/90"
            >
              <button
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                onClick={() => {
                  setLightBoxOpen(null);
                }}
                className="ml-auto shrink-0 mt-2 mr-2"
              >
                <Image
                  src={"/images/navigation/closeIconWhite.png"}
                  width={29}
                  height={29}
                  alt="close icon white"
                  className="w-6 sm:w-8 md:w-10 2xl:w-12"
                />
              </button>
              <div className="w-full h-full flex justify-center items-center shrink">
                <button
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  ref={prevRef}
                  className="shrink-0 absolute z-10 left-0 sm:static"
                  onClick={(e: any) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-12 md:size-20 text-white rotate-180 drop-shadow-2xl"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  ref={nextRef}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                  className="shrink-0 order-3 absolute z-10 right-0 sm:static"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-12 md:size-20 text-white drop-shadow-lg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <Swiper
                  slidesPerView={1}
                  initialSlide={lightboxOpen}
                  virtual
                  loop={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper: any) => {
                    // Set the navigation elements after Swiper initialization
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                  }}
                  modules={[Virtual, Navigation]}
                  className="w-full flex items-center h-full shrink max-w-5xl mx-0"
                >
                  {data.map((img: any, index: any) => (
                    <SwiperSlide
                      key={index}
                      virtualIndex={index}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <div className="relative w-full h-full flex items-center">
                        <Image
                          src={img.src}
                          alt={`image ${index}`}
                          width={1566}
                          height={1146}
                          className="w-full h-auto object-cover absolute"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </>,
          document.body
        )}
    </section>
  );
}
