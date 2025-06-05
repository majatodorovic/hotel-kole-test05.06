import { getDictionary } from "@/app/dictionaries/dictionaries";
import RoomTypes from "./components/RoomTypes";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/accommodation/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/accommodation/page.json");
  const contactData = await getDictionary(lang, "/components/contact.json");
  const accommodationData = await getDictionary(
    lang,
    "/components/accommodation.json"
  );
  return (
    <>
      <main>
        <Intro
          lang={lang}
          data={{ ...data.intro, contact: contactData }}
          headingClass="max-w-lg"
        />
        <RoomTypes
          data={{ ...data.accommodation, items: accommodationData.items }}
        />
      </main>
    </>
  );
}
