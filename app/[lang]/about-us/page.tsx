import { getDictionary } from "@/app/dictionaries/dictionaries";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/about-us/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/about-us/page.json");
  return (
    <>
      <main>
        <Intro
          lang={lang}
          data={data.intro}
          headingClass="max-w-xl"
          sectionClass="pb-0 md:pb-0 2xl:pb-0"
        />
      </main>
    </>
  );
}
