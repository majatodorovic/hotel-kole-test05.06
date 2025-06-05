import { canela } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Art({ data, lang }: any) {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1410px] w-full relative">
        <Image
          data-aos="fade-in"
          data-aos-easing="fadeUpCustom"
          src={"/images/home/home-banner-3.jpg"}
          alt="home banner 3"
          width={2820}
          height={1440}
          className="w-full h-auto min-h-96 object-cover"
        />
        <div
          data-aos="fade-in"
          data-aos-easing="fadeUpCustom"
          className="absolute left-0 top-0 w-full h-full bg-black/30"
        ></div>
        <div
          data-aos="fade-in"
          data-aos-easing="fadeUpCustom"
          className="hidden md:block absolute top-0 right-0 border-brown-400 border-2 rounded-bl-full bg-white w-24 h-1/3"
        ></div>
        <div className="flex flex-col justify-between absolute left-0 top-0 w-full h-full items-start py-12 md:py-20 px-6 sm:px-16 md:px-28">
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight text-white mb-7 max-w-[550px]`}
          >
            {data.heading}
          </h2>
          <div
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="relative"
          >
            <Link
              href={`/${lang}${data.btn.href}`}
              className="text-lg sm:text-xl md:text-2xl 2xl:text-[25px] flex text-white items-center justify-center border-2 border-white relative px-6 sm:px-9 h-14 mt-11 hover:text-black hover:bg-white box-border"
            >
              <span>{data.btn.text}</span>
            </Link>
            <span className="block w-full absolute -bottom-1 h-0.5 bg-red-800"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
