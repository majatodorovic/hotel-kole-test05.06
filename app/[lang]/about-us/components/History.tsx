import { canela } from "@/app/fonts";
import Image from "next/image";

const xlColStartClasses: any = {
  0: "xl:col-start-3",
  1: "xl:col-start-2",
  2: "xl:col-start-1",
};

const mdColStartClasses: any = {
  0: "md:col-start-2",
  1: "md:col-start-1",
};

const xlRowStartClasses: any = {
  0: "xl:row-start-1",
  1: "xl:row-start-2",
  2: "xl:row-start-3",
  3: "xl:row-start-4",
  4: "xl:row-start-5",
  5: "xl:row-start-6",
  6: "xl:row-start-7",
};

const mdRowStartClasses: any = {
  0: "md:row-start-1",
  1: "md:row-start-2",
  2: "md:row-start-3",
  3: "md:row-start-4",
  4: "md:row-start-5",
  5: "md:row-start-6",
  6: "md:row-start-7",
};

export default function History({ data }: any) {
  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-[55%_auto] xl:grid-cols-[37%_37%_auto] w-full 3xl:px-5 col-span-3 mt-16 md:mt-20 2xl:mt-24">
      {data.map((historyItem: any, index: number) => {
        return (
          <div
            data-aos="fade-in"
            data-aos-easing="fadeUpCustom"
            key={index}
            className={`flex max-w-md md:max-w-none flex-col h-full text-white ${
              index % 4 > 1 && index % 4 < 4 ? mdColStartClasses[index % 2] : ""
            } ${
              index % 6 > 2 && index % 6 < 6
                ? xlColStartClasses[index % 3]
                : xlColStartClasses[3 - ((index % 3) + 1)]
            } ${mdRowStartClasses[Math.floor(index / 2)]} ${
              xlRowStartClasses[Math.floor(index / 3)]
            }`}
          >
            <h4
              className={`text-3xl md:text-4xl 2xl:text-[45px] pl-4 border-l-2 leading-tight md:leading-tight 2xl:leading-tight ${
                canela.className
              } pb-6 md:border-b-2 border-gray-200 relative ${
                index > 0 ? "pt-14" : "pt-0"
              } ${(index + 1) % 6 === 4 ? "xl:border-r-2" : "xl:border-r-0"} ${
                index > 1 ? "md:pt-20" : "md:pt-0"
              } ${(index + 1) % 6 === 4 ? "xl:border-r-2" : "xl:border-r-0"} ${
                (index + 1) % 6 === 1 && index !== 0
                  ? "xl:border-l-2"
                  : "xl:border-l-0"
              } ${index > 2 ? "xl:pt-20" : "xl:pt-0"}  ${
                (index + 1) % 4 === 3
                  ? "md:border-r-2 xl:border-r-0"
                  : "md:border-r-0"
              } ${
                (index + 1) % 4 === 1 && index !== 0
                  ? "md:border-l-2 md:pl-4 xl:border-l-0 xl:pl-0"
                  : "md:border-l-0"
              } xl:pl-0`}
            >
              {historyItem.heading}
              <Image
                src="/images/about-us/circle.png"
                alt="circle"
                width={16}
                height={16}
                className="w-5 h-auto absolute bottom-0 left-0 md:left-24 translate-y-1/2 -translate-x-1/2 md:translate-x-0"
              />
            </h4>
            <p
              className={`text-base grow border-l-2 border-gray-200 pl-4 xl:pl-0 md:text-lg 2xl:text-xl pt-6 ${
                (index + 1) % 6 !== 3 && (index + 1) % 6 !== 4
                  ? "xl:pr-24"
                  : "xl:pr-5"
              }  ${(index + 1) % 2 === 0 ? "md:pr-4" : "md:pr-16 md:pl-0"} ${
                (index + 1) % 6 === 3 ? "xl:border-r-2 " : "xl:border-r-0"
              } ${
                (index + 1) % 6 === 0 && index !== data.length - 1
                  ? "xl:border-l-2 "
                  : "xl:border-l-0"
              } ${
                (index + 1) % 4 === 2
                  ? "md:border-r-2 xl:border-r-0"
                  : "md:border-r-0"
              } ${
                (index + 1) % 4 === 0
                  ? "md:border-l-2 xl:border-l-0"
                  : "md:border-l-0"
              }`}
            >
              {historyItem.p}
            </p>
          </div>
        );
      })}
    </div>
  );
}
