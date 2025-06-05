import { getDictionary } from "@/app/dictionaries/dictionaries";
import Intro from "../components/Intro";
import Gallery from "./components/Gallery";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/restaurant/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/restaurant/page.json");
  return (
    <>
      <main>
        <Intro
          data={data.intro}
          lang={lang}
          headingClass="max-w-md"
          rightColClass="3xl:pr-28"
        />
        <Gallery data={data.gallery} />
      </main>
    </>
  );
}
