import { canela } from "@/app/fonts";
import Image from "next/image";

export default function Trophies({ data }: any) {
  return (
    <div className="w-full flex justify-center sm:justify-start col-span-3">
      <div className="flex flex-col items-center gap-y-12 md:items-start sm:grid grid-cols-2 lg:grid-cols-3 md:gap-x-12 xl:gap-x-16 max-w-sm sm:max-w-[1380px] xl:grid-cols-4 w-full 3xl:px-5 mt-16 md:mt-20 2xl:mt-24 text-white text-center">
        {data.map((trophyItem: any, index: number) => {
          return (
            <div
              data-aos="fade-in"
              data-aos-easing="fadeUpCustom"
              className="flex flex-col items-center"
              key={index}
            >
              <Image
                src={"/images/about-us/trophy.png"}
                alt="trophy"
                width={59}
                height={81}
                className="mb-3 h-20 w-auto"
              />
              <h5
                className={`text-xl md:text-2xl 2xl:text-[29px] leading-tight md:leading-tight 2xl:leading-tight ${canela.className}`}
              >
                {trophyItem}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
