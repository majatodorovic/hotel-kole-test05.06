"use client";

import { canela } from "@/app/fonts";

export default function FoodMenu({ data }: any) {
  return (
    <section
      className="w-full flex flex-col items-center px-4 md:px-8 2xl:px-12"
      id="foodMenu"
    >
      <div className="w-full md:max-w-4xl xl:max-w-none 2xl:max-w-[1612px] flex flex-col items-start mb-10 md:mb-12 2xl:mb-14">
        <h3
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`font-bold text-[21px] mb-3 uppercase`}
        >
          {data.subheading}
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`${canela.className} text-center text-5xl md:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight md:leading-tight 2xl:leading-tight`}
        >
          {data.heading}
        </h2>
      </div>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-y-8 lg:gap-y-16 md:max-w-4xl xl:max-w-none 2xl:max-w-[1612px] w-full">
        {data.items.map((item: any, key: number) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              key={key}
              className="foodMenuItem flex flex-col h-full pl-8 md:pl-12 2xl:pl-16 pr-6 md:pr-10 2xl:pr-14 even:py-6 odd:py-10 lg:even:py-10 2xl:py-14 items-start w-full"
            >
              <h3>{item.category}</h3>
              {item.categories.map((category: any, categoryId: number) => {
                return (
                  <div
                    key={`${key}-${categoryId}`}
                    className="flex flex-col items-start w-full"
                  >
                    <h3
                      className={`${canela.className} text-[40px] mb-6 md:mb-10 2xl:mb-12 font-bold`}
                    >
                      {category.category}
                    </h3>
                    {category.items.map(
                      (categoryItem: any, categoryItemIndex: number) => {
                        return (
                          <ul
                            className="flex flex-col items-start w-full mb-2 list-disc"
                            key={`${key}-${categoryId}-${categoryItemIndex}`}
                          >
                            <li>
                              {categoryItem.name && (
                                <h4
                                  className={`text-xl font-medium ${
                                    categoryItem.description ? "mb-1" : "mb-2"
                                  }`}
                                >
                                  {categoryItem.name}
                                </h4>
                              )}
                              {categoryItem.description &&
                                categoryItem.description
                                  .split("\n")
                                  .map((line: string, index: number) => (
                                    <p
                                      key={index}
                                      className="text-base md:text-lg xl:text-xl 2xl:text-xl italic"
                                    >
                                      {line}
                                      {index !==
                                        categoryItem.description.split("\n")
                                          .length -
                                          1 && (
                                        <>
                                          <br />
                                          <br />
                                        </>
                                      )}
                                    </p>
                                  ))}
                            </li>
                          </ul>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
