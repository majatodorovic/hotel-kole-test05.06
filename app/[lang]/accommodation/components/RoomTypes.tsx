"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, Virtual } from "swiper/modules";

export default function RoomTypes({ data }: any) {
  const [lightbox, setLightBox] = useState<any>(null);
  return (
    <section className=" flex justify-center px-6 md:px-8 2xl:px-12">
      <div className="w-full md:max-w-4xl xl:max-w-none 2xl:max-w-[1612px]">
        <Swiper
          slidesPerView={1}
          autoHeight={true}
          spaceBetween={30}
          className="w-full"
          loop={true}
        >
          {data.items.map((room: any, roomIndex: number) => {
            return (
              <SwiperSlide key={roomIndex}>
                <div
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  className="flex flex-col items-center relative"
                >
                  <div className="w-full flex flex-col sm:flex-row items-start justify-between mb-8 gap-x-6">
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="fadeUpCustom"
                      className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight`}
                    >
                      {room.heading}
                    </h2>
                    <Buttons />
                  </div>
                  <div className="w-full flex-col xl:flex-row flex items-start">
                    <div className="w-full xl:w-1/2 flex flex-col items-start">
                      <p
                        data-aos="fade-up"
                        data-aos-easing="fadeUpCustom"
                        className={`text-base md:text-lg 2xl:text-xl max-w-2xl mb-7`}
                      >
                        {room.paragraph}
                      </p>
                      <div className="w-full flex flex-col items-start text-base md:text-lg">
                        <h6
                          data-aos="fade-up"
                          data-aos-easing="fadeUpCustom"
                          className="font-bold mb-6"
                        >
                          {data.benefits.heading}
                        </h6>
                        <div className="w-full flex-col gap-y-4 md:flex-row flex gap-x-4 max-w-2xl">
                          <div className="flex flex-col md:w-1/2 gap-y-5">
                            {room.benefits
                              .filter(
                                (roomBenefit: any, index: number) =>
                                  index % 2 === 0
                              )
                              .map((roomBenefit: any, index: number) => {
                                return (
                                  <div
                                    data-aos="fade-up"
                                    data-aos-easing="fadeUpCustom"
                                    key={index}
                                    className="flex items-start"
                                  >
                                    <Image
                                      src={
                                        "/images/accommodation/checkmark.png"
                                      }
                                      alt="checkmark"
                                      width={16}
                                      height={16}
                                      className="w-6 h-auto mr-2"
                                    />
                                    <p>{roomBenefit}</p>
                                  </div>
                                );
                              })}
                          </div>
                          <div className="flex flex-col md:w-1/2 gap-y-5">
                            {room.benefits
                              .filter(
                                (roomBenefit: any, index: number) =>
                                  index % 2 === 1
                              )
                              .map((roomBenefit: any, index: number) => {
                                return (
                                  <div
                                    data-aos="fade-up"
                                    data-aos-easing="fadeUpCustom"
                                    key={index}
                                    className="flex items-start"
                                  >
                                    <Image
                                      src={
                                        "/images/accommodation/checkmark.png"
                                      }
                                      alt="checkmark"
                                      width={16}
                                      height={16}
                                      className="w-6 h-auto mr-2"
                                    />
                                    <p>{roomBenefit}</p>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-easing="fadeUpCustom"
                        className="w-full bg-blue-800 flex justify-center items-center px-6 py-10 my-8 rounded-3xl"
                      >
                        <div className="w-full flex flex-col divide-y-[1px] md:divide-y-0 md:flex-row justify-center md:items-center md:divide-x-[1px] text-white max-w-[720px]">
                          <span
                            className={`text-[38px] leading-tight md:w-40 pr-10 pb-4 md:pb-0 ${canela.className}`}
                          >
                            {data.roomContents.heading}
                          </span>
                          <div className="grow flex md:justify-center items-center pt-4 md:pt-0 md:pl-6 self-stretch">
                            <div className="text-base md:text-lg 2xl:text-xl max-w-md flex flex-wrap">
                              {room.roomContents.map(
                                (
                                  roomContent: any,
                                  roomContentsIndex: number
                                ) => {
                                  return (
                                    <span
                                      key={roomContentsIndex}
                                      className="shrink-0 mr-1"
                                    >
                                      {roomContent +
                                        (roomContentsIndex !==
                                        room.roomContents.length - 1
                                          ? ", "
                                          : "")}
                                    </span>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit text-base md:text-lg 2xl:text-xl mb-12 flex flex-col items-start">
                        {room.priceList.map(
                          (priceListItem: any, priceListItemIndex: number) => {
                            if (priceListItem.innerPriceList)
                              return (
                                <div
                                  data-aos="fade-up"
                                  data-aos-easing="fadeUpCustom"
                                  key={priceListItemIndex}
                                  className="w-fit grid grid-cols-[1fr_auto_auto] gap-y-3 gap-x-4 pb-4 mb-4 border-b border-black "
                                >
                                  <span className="col-start-2 pl-2 sm:pl-5 border-l-[1px] border-blue-800">
                                    {
                                      priceListItem.innerPriceList
                                        .columnHeadings[0]
                                    }
                                  </span>
                                  <span className="col-start-3 pl-2 sm:pl-5 border-l-[1px] border-blue-800">
                                    {
                                      priceListItem.innerPriceList
                                        .columnHeadings[1]
                                    }
                                  </span>
                                  {priceListItem.innerPriceList.rows.map(
                                    (
                                      innerPriceListRow: any,
                                      innerPriceListRowIndex: number
                                    ) => {
                                      return (
                                        <Fragment key={innerPriceListRowIndex}>
                                          <span className="lowercase first-letter:uppercase pr-2 sm:pr-5">
                                            {innerPriceListRow.text}
                                          </span>
                                          <span className="font-medium pl-2 sm:pl-5 border-l-[1px] border-blue-800">
                                            {Intl.NumberFormat("de-DE", {
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 2,
                                            }).format(
                                              parseFloat(
                                                innerPriceListRow.columns[0]
                                              )
                                            )}
                                          </span>
                                          <span className="font-medium pl-2 sm:pl-5 border-l-[1px] border-blue-800">
                                            {Intl.NumberFormat("de-DE", {
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 2,
                                            }).format(
                                              parseFloat(
                                                innerPriceListRow.columns[1]
                                              )
                                            )}
                                          </span>
                                        </Fragment>
                                      );
                                    }
                                  )}
                                </div>
                              );
                          }
                        )}
                        <div className="w-fit grid grid-cols-1 md:grid-cols-[auto_auto] gap-y-3 gap-x-4 sm:gap-x-20 items-start">
                          {room.priceList.map(
                            (
                              priceListItem: any,
                              priceListItemIndex: number
                            ) => {
                              if (!priceListItem.innerPriceList) {
                                return (
                                  <div
                                    data-aos="fade-up"
                                    data-aos-easing="fadeUpCustom"
                                    key={priceListItemIndex}
                                    className="grid w-full md:w-auto grid-cols-2 md:grid-cols-[1fr_auto] items-center divide-x-[1px] divide-blue-800"
                                  >
                                    <span className="lowercase first-letter:uppercase pr-2 sm:pr-5">
                                      {priceListItem.text}
                                    </span>
                                    <span className="font-medium pl-2 sm:pl-5">
                                      {Intl.NumberFormat("de-DE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }).format(
                                        parseFloat(priceListItem.price)
                                      )}
                                    </span>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                      <div data-aos="fade-up" data-aos-easing="fadeUpCustom">
                        <p className="text-[15px] italic pt-4 border-t-[1px] border-black max-w-xl">
                          {room.tax}
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-8 xl:mt-0 xl:w-1/2 flex flex-col xl:items-end xl:pl-6">
                      <div
                        className="group flex flex-col h-full items-start w-full overflow-hidden max-w-2xl mb-3"
                        onClick={() => {
                          setLightBox({
                            focusedImgIndex: 0,
                            imgArray: [
                              room.images.primaryImage,
                              ...room.images.secondaryImages,
                            ],
                          });
                        }}
                      >
                        <Image
                          data-aos="fade-up"
                          data-aos-easing="fadeUpCustom"
                          src={room.images.primaryImage}
                          alt="image 1"
                          width={1566}
                          height={1146}
                          className="w-full h-auto object-cover hover:cursor-pointer transition-transform ease-out duration-300 group-hover:scale-110"
                        />
                      </div>
                      <Swiper
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{ 768: { slidesPerView: 4.3 } }}
                        autoHeight={true}
                        spaceBetween={10}
                        className="w-full max-w-2xl mx-0"
                      >
                        {room.images.secondaryImages.map(
                          (
                            secondaryImage: any,
                            secondaryImageIndex: number
                          ) => {
                            return (
                              <SwiperSlide
                                key={secondaryImageIndex}
                                className=""
                              >
                                <div
                                  className="group flex flex-col h-full items-start w-full overflow-hidden"
                                  onClick={() => {
                                    setLightBox({
                                      focusedImgIndex: secondaryImageIndex + 1,
                                      imgArray: [
                                        room.images.primaryImage,
                                        ...room.images.secondaryImages,
                                      ],
                                    });
                                  }}
                                >
                                  <Image
                                    data-aos="fade-up"
                                    data-aos-easing="fadeUpCustom"
                                    src={secondaryImage}
                                    alt="image 1"
                                    width={1566}
                                    height={1146}
                                    className="w-full h-auto object-cover hover:cursor-pointer transition-transform ease-out duration-300 group-hover:scale-110"
                                  />
                                </div>
                              </SwiperSlide>
                            );
                          }
                        )}
                        <div
                          slot="container-end"
                          className="absolute right-0 top-0 h-full z-10"
                        >
                          <ImgSliderBtn />
                        </div>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {lightbox &&
        createPortal(
          <LightBox
            setLightBoxOpen={setLightBox}
            focusedImgIndex={lightbox.focusedImgIndex}
            imgArray={lightbox.imgArray}
          />,
          document.body
        )}
    </section>
  );
}

const LightBox = ({ setLightBoxOpen, focusedImgIndex, imgArray }: any) => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  return (
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
            initialSlide={focusedImgIndex}
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
            {imgArray.map((img: any, index: any) => (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className="flex h-full w-full items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center">
                  <Image
                    src={img}
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
    </>
  );
};

const ImgSliderBtn = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        data-aos="fade-in"
        data-aos-easing="fadeUpCustom"
        className="h-full w-full flex items-center justify-center bg-blue-800 px-2"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src={"/images/accommodation/rightArrow.png"}
          alt="right arrow"
          width={10}
          height={20}
        />
      </button>
    </>
  );
};

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex items-center gap-x-5 mt-4 sm:mt-0"
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
