import { getDictionary } from "@/app/dictionaries/dictionaries";
import Intro from "../components/Intro";
import FoodMenu from "./components/FoodMenu";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/menu/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/menu/page.json");
  const restaurantData = await getDictionary(
    lang,
    "/components/restaurant.json"
  );
  const contactData = await getDictionary(lang, "/components/contact.json");
  return (
    <>
      <main>
        <Intro
          lang={lang}
          data={{ ...data.intro, contact: contactData }}
          rightColClass="3xl:pr-28"
        />
        <FoodMenu data={restaurantData} />
      </main>
    </>
  );
}
