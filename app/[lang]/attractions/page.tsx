import { getDictionary } from "@/app/dictionaries/dictionaries";
import Attractions from "./components/Attractions";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/attractions/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/attractions/page.json");
  const attractions = await getDictionary(lang, "/components/attractions.json");
  return (
    <>
      <main className="pt-[98px] xl:pt-[166px] 2xl:pt-[170px]">
        <Intro lang={lang} data={data.intro} subheadingClass="max-w-xl" />
        <Attractions
          data={{ ...attractions, linkText: data.attractions.linkText }}
        />
      </main>
    </>
  );
}
