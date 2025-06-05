import { canela } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Intro({
  data,
  lang,
  headingClass,
  rightColClass,
  sectionClass,
}: any) {
  return (
    <section
      className={`${
        sectionClass ? sectionClass : ""
      } flex justify-center w-full items-start px-6 md:px-8 2xl:px-12 pt-14 md:pt-24 2xl:pt-32 py-20 md:py-24 2xl:py-32`}
    >
      <div className="w-full md:max-w-4xl xl:max-w-none 2xl:max-w-[1612px] flex flex-col-reverse xl:flex-row xl:justify-center items-start gap-x-16">
        <div className="xl:w-1/2 max-w-2xl xl:max-w-none">
          <Image
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            src={data.img}
            alt="intro image"
            width={1466}
            height={980}
            className="relative w-full h-auto"
          />
        </div>
        <div
          className={`w-full xl:w-1/2 ${
            rightColClass ? rightColClass : ""
          } flex flex-col items-start relative mb-12 sm:mb-12 xl:mb-0`}
        >
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${
              canela.className
            } text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-8 xl:mb-11 ${
              headingClass ? headingClass : ""
            }`}
          >
            {data.heading}
          </h2>
          <div className={`flex flex-col items-start w-full`}>
            {data.paragraphs.map((p: string, index: number) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  key={index}
                  className={`text-base md:text-lg 2xl:text-xl ${
                    index === data.paragraphs.length - 1 ? "" : "mb-7"
                  }`}
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              );
            })}
          </div>
          {data.btn && (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="relative group"
            >
              <Link
                prefetch={false}
                href={`/${lang}${data.btn.href}`}
                className="h-[60px] mt-8 xl:mt-12 flex items-center justify-center min-w-52 px-6 border-2 border-transparent font-bold rounded-lg bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black"
              >
                <span>{data.btn.text}</span>
              </Link>
            </div>
          )}
          {data.contact && (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="flex flex-col py-4 sm:py-0 sm:flex-row sm:items-center divide-y-[1px] sm:divide-y-0 sm:divide-x-[1px] sm:h-[84px] bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black mt-8 xl:mt-12 px-6 border-2 border-transparent rounded-lg"
            >
              <span
                className={`${canela.className} text-2xl inline-block pb-2 sm:pb-0 sm:pr-6`}
              >
                {data.reservationBtn}
              </span>
              <div className="flex flex-col gap-y-1 items-start pt-3 sm:pt-0 sm:pl-6">
                <a
                  href={`tel: ${data.contact.tel}`}
                  className="underline-after-expandable"
                >
                  {data.contact.tel}
                </a>
                <a
                  href={`mailto: ${data.contact.mail}`}
                  className="underline-after-expandable"
                >
                  {data.contact.mail}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
