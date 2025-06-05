import { canela } from "@/app/fonts";
import Image from "next/image";

export default function Management({ data }: any) {
  return (
    <div className="w-full flex justify-center sm:justify-start col-span-3">
      <div className="flex flex-col items-center gap-y-12 md:flex-row md:items-start justify-center xl:justify-start md:gap-x-20 xl:gap-x-24 max-w-sm sm:max-w-[1380px] xl:grid-cols-4 w-full 3xl:px-5 mt-16 md:mt-20 2xl:mt-24 text-white text-center">
        {data.map((managementItem: any, index: number) => {
          return (
            <div
              data-aos="fade-in"
              data-aos-easing="fadeUpCustom"
              className="flex flex-col items-center shrink-0"
              key={index}
            >
              <Image
                src={"/images/about-us/manager.png"}
                alt="trophy"
                width={59}
                height={81}
                className="mb-4 h-20 w-auto"
              />
              <h5
                className={`text-xl md:text-2xl 2xl:text-[29px] leading-tight md:leading-tight 2xl:leading-tight ${canela.className} mb-1`}
              >
                {managementItem.name}
              </h5>
              <h6 className={`text-base md:text-lg 2xl:text-xl`}>
                {managementItem.role}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
