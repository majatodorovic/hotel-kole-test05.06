import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideNav({ lang, data, open, setOpen }: any) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed left-0 text-white duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } top-0 w-screen custom-h-screen flex flex-row-reverse bg-blue-800/75 backdrop-blur-sm`}
      >
        <div className="h-full relative sm:shrink-0">
          <div className="min-w-72 flex text-right text-2xl md:text-3xl 2xl:text-4xl font-light flex-col items-end h-full pr-6 sm:pr-10 bg-blue-800 pt-8 2xl:pt-16 pl-6 2xl:pl-20 overflow-y-scroll no-scrollbar pb-36">
            <button onClick={() => setOpen(false)} className="mb-8 2xl:mb-16">
              <Image
                src={"/images/navigation/closeIconWhite.png"}
                width={29}
                height={29}
                alt="close icon white"
                className="w-7"
              />
            </button>
            <div className="flex flex-col items-end pb-8 2xl:pb-12">
              {data.links.map((link: any, index: number) => {
                return (
                  <Link
                    href={`/${lang}/${link.href}`}
                    prefetch={false}
                    key={index}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={`mb-2 md:mb-4 ${
                      pathname === `/${lang}${link.href}`
                        ? "underline-after"
                        : "underline-after-expandable"
                    }`}
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="absolute pointer-events-none bottom-0 left-0 h-36 w-full bg-gradient-to-t from-blue-800 to-transparent"></div>
        </div>
        <div className="w-full hidden shrink md:flex items-center justify-center">
          <Image
            src={"/images/navigation/logoWhite.png"}
            width={669}
            height={490}
            alt="logo"
            className="w-1/2"
          />
        </div>
      </div>
    </>
  );
}
