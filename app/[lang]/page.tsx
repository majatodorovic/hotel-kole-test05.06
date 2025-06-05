import { Locale, getDictionary } from "../dictionaries/dictionaries";

import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import AboutUs from "./components/AboutUs";
import Apartments from "./components/Apartments";
import FoodMenu from "./components/FoodMenu";
import Location from "./components/Location";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/home/meta.json");

  return data;
}

type ParamsProps = {
  lang: Locale;
};

export default async function Home({
  params,
}: {
  params: Promise<ParamsProps>;
}) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/home/page.json");
  const restaurant = await getDictionary(lang, "/components/restaurant.json");
  const { contact } = await getDictionary(lang, "/components/navigation.json");
  const accommodationData = await getDictionary(
    lang,
    "/components/accommodation.json"
  );
  return (
    <>
      <Header data={contact}></Header>
      <main className="overflow-hidden">
        <AboutUs data={data.aboutUs} lang={lang} />
        <Apartments
          data={{ ...data.apartments, items: accommodationData.items }}
          lang={lang}
        />
        <Restaurant data={data.restaurant} lang={lang} />
        <Benefits data={data.benefits} />
        <FoodMenu data={{ ...data.foodMenu, restaurant: restaurant.items }} />
        <Location data={data.location} />
      </main>
    </>
  );
}
