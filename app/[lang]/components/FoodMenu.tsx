"use client";

import { canela } from "@/app/fonts";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

function splitArrayIntoChunks(array: Array<string>, chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function extractDeepestItemsWithKey(obj: object, key: string) {
  let result: Array<string> = [];

  function recurse(current: any) {
    if (current && typeof current === "object") {
      // Check if the current object has the desired key
      if (Array.isArray(current[key])) {
        result = result.concat(current[key]); // Add items to the result
      }
      // Recurse into all other fields of the object
      Object.values(current).forEach(recurse);
    }
  }

  recurse(obj);
  return result;
}

export default function FoodMenu({ data }: any) {
  const [foodItems, setFoodItems] = useState<any>(null);
  useEffect(() => {
    const dataCopy = extractDeepestItemsWithKey(data, "items");
    const foodItems = dataCopy.filter((foodItem: any) => foodItem.img); // Samo sa slikom
    setFoodItems(splitArrayIntoChunks(foodItems, 6));
  }, [data]);
  
  return (
    <>
      <section className="flex justify-center w-full py-24 md:py-40 2xl:py-52 px-6 md:px-8 2xl:px-12 relative">
        <div className="absolute left-0 top-0 bg-gray-600/5 h-full w-full 2xl:w-[calc(100%-60px)]">
          <Image
            src={"/images/home/donut.png"}
            alt="donut"
            width={229}
            height={229}
            className="absolute left-20 top-10 w-56 h-auto"
          />
          <Image
            src={"/images/home/kitchen.png"}
            alt="donut"
            width={229}
            height={229}
            className="absolute bottom-20 right-10 w-56 h-auto"
          />
        </div>
        <div className="w-full max-w-lg md:max-w-4xl xl:max-w-6xl flex flex-col">
          <Swiper
            slidesPerView={1}
            autoHeight={true}
            spaceBetween={40}
            className="w-full"
            loop={true}
          >
            {foodItems &&
              foodItems
                .slice(0, 3)
                .map((foodItemsGrouped: any, foodItemsGroupedIndex: number) => {
                  return (
                    <SwiperSlide
                      key={foodItemsGroupedIndex}
                      className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                      {foodItemsGrouped.map((item: any, index: number) => (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="fadeUpCustom"
                          key={index}
                          className="duration-300 group flex items-center pr-6 xl:pr-20 text-black hover:text-white bg-transparent hover:bg-blue-800"
                        >
                          <Image
                            src={
                              item.img
                                ? item.img
                                : "/images/home/menu-placeholder.jpg"
                            }
                            alt="food item image"
                            width={1000}
                            height={1000}
                            className={`w-20 md:w-28 h-20 md:h-28 object-contain mr-7`}
                          />
                          <h5
                            className={`${canela.className} text-xl xl:text-2xl`}
                          >
                            {item.name}
                          </h5>
                        </div>
                      ))}
                    </SwiperSlide>
                  );
                })}
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
      <section className="w-full flex justify-center px-6 md:px-8 2xl:px-12 -mt-10 md:-mt-14 2xl:-mt-20">
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="w-full max-w-lg md:max-w-4xl xl:max-w-6xl flex flex-wrap md:grid grid-cols-3 gap-5"
        >
          <Image
            src={"/images/home/hrana-baner-1.jpg"}
            alt="food showcase"
            width={1500}
            height={1500}
            className="w-full h-auto"
          />
          <Image
            src={"/images/home/hrana-baner-2.jpg"}
            alt="food showcase"
            width={1500}
            height={1500}
            className="w-full h-auto"
          />
          <Image
            src={"/images/home/hrana-baner-3.jpg"}
            alt="food showcase"
            width={1500}
            height={1500}
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex items-center gap-x-2 mt-6 md:mt-0">
        <button
          className="relative group flex items-center justify-center hover:bg-blue-800 w-16 h-16 pointer-events-auto duration-300 hover:shadow-2xl"
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
          className="relative group flex items-center justify-center hover:bg-blue-800 w-16 h-16 pointer-events-auto duration-300 hover:shadow-2xl"
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
