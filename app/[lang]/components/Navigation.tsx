"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import SideNav from "./SideNav";

const navigationClass = {
  home: {
    nav: "bg-blue-800 text-blue-800 px-4",
    innerNav:
      "h-20 md:h-24 xl:h-28 max-w-[1420px] bg-white top-6 md:top-10 rounded-2xl px-6 2xl:px-12",
    langBtn:
      "bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black",
    logo: "dark",
    links: "hover:after:bg-blue-800 text-blue-800",
    hamburgerBtn: "invert",
    currentLink: "after:bg-blue-800",
  },
  nonHome: {
    nav: "bg-blue-800 text-white px-6 md:px-8 2xl:px-12",
    innerNav: "max-w-[1612px] bg-blue-800 top-0 rounded-2xl",
    langBtn:
      "bg-white text-black hover:border-white hover:bg-blue-800 hover:text-white",
    logo: "light",
    links: "hover:after:bg-white text-white",
    hamburgerBtn: "",
    currentLink: "after:bg-white",
  },
  fixed: {
    nav: "text-blue-800 bg-white px-6 md:px-8 2xl:px-12 shadow-md",
    innerNav: "rounded-none bg-white top-0 max-w-[1612px]",
    langBtn:
      "bg-blue-800 text-white hover:border-blue-800 hover:bg-white hover:text-black",
    logo: "dark",
    links: "hover:after:bg-blue-800 text-blue-800",
    hamburgerBtn: "invert",
    currentLink: "after:bg-blue-800",
  },
};

export default function Navigation({
  lang,
  data,
}: {
  lang: string;
  data: any;
}) {
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<null | boolean>(null);
  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToNewDynamicRoute = (lang: string) => {
    // Extract the current path without the existing `lang` parameter
    const currentPath = pathname.replace(/^\/[^\/]+/, `/${lang}`);

    // Push the updated URL with the new `lang` parameter
    router.push(currentPath);
  };

  return (
    <>
      <nav
        className={`w-full animate-[fadeIn_0.8s_ease] duration-300 h-20 md:h-28 flex justify-center sticky top-0 z-10 ${
          navigationClass[
            isScrolled ? "fixed" : pathname === `/${lang}` ? "home" : "nonHome"
          ].nav
        }`}
      >
        <div
          className={`w-full text xl:h-28 flex items-center justify-center duration-300 relative ${
            navigationClass[
              isScrolled
                ? "fixed"
                : pathname === `/${lang}`
                ? "home"
                : "nonHome"
            ].innerNav
          }`}
        >
          <div
            className={`w-full flex justify-between items-center font-medium`}
          >
            <Link
              href={`/${lang}`}
              className={`h-10 md:h-14 xl:h-20 relative group ${
                navigationClass[
                  isScrolled
                    ? "fixed"
                    : pathname === `/${lang}`
                    ? "home"
                    : "nonHome"
                ].logo
              }`}
            >
              <Image
                src={`/images/navigation/logo.png`}
                alt="logo"
                width={219}
                height={82}
                className="h-full w-auto left-0 top-0 group-[.light]:absolute group-[.light]:opacity-0"
              />
              <Image
                src={`/images/navigation/logoWhite.png`}
                alt="logo"
                width={219}
                height={82}
                className="h-full w-auto left-0 top-0 group-[.dark]:absolute group-[.dark]:opacity-0"
              />
            </Link>
            <div className="hidden lg:flex items-center">
              {data.links.map((link: any, index: number) => {
                return (
                  <div className="relative" key={index}>
                    <Link
                      prefetch={false}
                      href={`/${lang}${link.href}`}
                      className={`text-lg duration-300 xl:text-xl mx-4 xl:mx-6 relative inline-block after:block after:absolute after:w-full after:rounded-md after:duration-300 after:h-1.5 ${
                        navigationClass[
                          isScrolled
                            ? "fixed"
                            : pathname === `/${lang}`
                            ? "home"
                            : "nonHome"
                        ].links
                      } ${
                        pathname === `/${lang}${link.href}` &&
                        navigationClass[
                          isScrolled
                            ? "fixed"
                            : pathname === `/${lang}`
                            ? "home"
                            : "nonHome"
                        ].currentLink
                      }`}
                    >
                      {link.text}
                    </Link>
                  </div>
                );
              })}
            </div>
            <button
              className={`h-14 hidden lg:flex items-center justify-center min-w-28 px-6 border-2 rounded-lg ${
                navigationClass[
                  isScrolled
                    ? "fixed"
                    : pathname === `/${lang}`
                    ? "home"
                    : "nonHome"
                ].langBtn
              }`}
              onClick={() => {
                goToNewDynamicRoute(data.languagesBtn.code);
              }}
            >
              <span>{data.languagesBtn.text}</span>
            </button>
            <button
              className="lg:hidden w-12 h-auto"
              onClick={() => setSideNavOpen(true)}
            >
              <Image
                src={"/images/navigation/hamburgerWhite.png"}
                alt="hamburger button"
                width={50}
                height={50}
                className={`${
                  navigationClass[
                    isScrolled
                      ? "fixed"
                      : pathname === `/${lang}`
                      ? "home"
                      : "nonHome"
                  ].hamburgerBtn
                }`}
              />
            </button>
          </div>
        </div>
        {
          <SideNav
            open={sideNavOpen}
            lang={lang}
            setOpen={setSideNavOpen}
            data={data}
          />
        }
      </nav>
    </>
  );
}
