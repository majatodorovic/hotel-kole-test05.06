import localFont from "next/font/local";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
// Import Swiper styles
import Navigation from "./components/Navigation";
import { Locale, getDictionary } from "../dictionaries/dictionaries";
import Footer from "./components/Footer";
import Properties from "./components/Properties";
import AOSContainer from "../utils/AOSContainer";

const avenir = localFont({
  src: [
    { path: "./fonts/avenir-next-medium.ttf", weight: "500" },
    { path: "./fonts/Avenir-Next-Regular.otf", weight: "400" },
    { path: "./fonts/Avenir-Next-Light.ttf", weight: "300" },
    { path: "./fonts/Avenir-Next-Bold.otf", weight: "700" },
  ],
});

export default async function RootLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const data = {
    navigation: await getDictionary(lang, "/components/navigation.json"),
    properties: await getDictionary(lang, "/components/properties.json"),
    footer: await getDictionary(lang, "/components/footer.json"),
  };

  return (
    <html lang="en" className="flex flex-col items-center scroll-smooth">
      <body
        className={`${avenir.className} overflow-x-hidden antialiased w-full bg-white text-black text-pretty`}
      >
        <AOSContainer>
          <Navigation
            lang={lang}
            data={{ ...data.navigation, properties: data.properties }}
          />
          {children}
          <Properties data={data.properties} lang={lang} />
          <Footer data={data.footer} lang={lang} />
        </AOSContainer>
      </body>
    </html>
  );
}
