import { getDictionary } from "@/app/dictionaries/dictionaries";
import { canela } from "@/app/fonts";
import Header from "../components/Header";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/terms-and-conditions/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const { contact } = await getDictionary(lang, "/components/navigation.json");
  const data = await getDictionary(lang, "/terms-and-conditions/page.json");
  return (
    <>
      <Header data={contact}></Header>
      <main>
        <section className="w-full flex justify-center pt-24 md:pt-24 2xl:pt-36 pr-6 md:pr-8 2xl:pr-12 pl-8 md:pl-10 2xl:pl-14">
          <div className="w-full flex md:max-w-4xl xl:max-w-none 2xl:max-w-[1612px] flex-col items-start">
            <h1
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className={`${canela.className} text-5xl md:text-6xl 2xl:text-7xl mb-8 md:mb-11`}
            >
              {data.heading}
            </h1>
            <ul className="list-disc text-base md:text-lg xl:text-xl mb-20">
              {data.infoList.map(
                (infoListItem: string, infoListItemIndex: number) => (
                  <li
                    data-aos="fade-up"
                    data-aos-easing="fadeUpCustom"
                    key={infoListItemIndex}
                    className="py-1"
                  >
                    {infoListItem}
                  </li>
                )
              )}
            </ul>
            <h2
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className={`${canela.className} text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-11`}
            >
              {data.paymentMethodList.heading}
            </h2>
            <ul className="list-disc text-base md:text-lg xl:text-xl mb-20">
              {data.paymentMethodList.list.map(
                (
                  paymentMethodListItem: string,
                  paymentMethodListItemIndex: number
                ) => (
                  <li
                    data-aos="fade-up"
                    data-aos-easing="fadeUpCustom"
                    key={paymentMethodListItemIndex}
                    className="py-1"
                  >
                    {paymentMethodListItem}
                  </li>
                )
              )}
            </ul>
            <h2
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className={`${canela.className} text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-11`}
            >
              {data.damageCompensationList.heading}
            </h2>
            <ul className="list-disc text-base md:text-lg xl:text-xl">
              {data.damageCompensationList.list.map(
                (
                  damageCompensationListItem: string | { list: Array<string> },
                  damageCompensationListItemIndex: number
                ) => (
                  <>
                    {typeof damageCompensationListItem === "object" ? (
                      <>
                        {damageCompensationListItem.list.map(
                          (
                            damageCompensationListItemSubListItem: string,
                            damageCompensationListItemSubListItemIndex: number
                          ) => (
                            <li
                              data-aos="fade-up"
                              data-aos-easing="fadeUpCustom"
                              className="ml-8 md:ml-10 2xl:ml-14 py-1"
                              key={damageCompensationListItemSubListItemIndex}
                            >
                              {damageCompensationListItemSubListItem}
                            </li>
                          )
                        )}
                      </>
                    ) : (
                      <>
                        <li
                          data-aos="fade-up"
                          data-aos-easing="fadeUpCustom"
                          key={damageCompensationListItemIndex}
                          className="py-1"
                        >
                          {damageCompensationListItem.toString()}
                        </li>
                      </>
                    )}
                  </>
                )
              )}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
