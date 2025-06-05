"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

type CounterProps = {
  targetNumber: number;
  duration?: number; // Duration of the animation in milliseconds (default is 2 seconds)
};

export default function Location({ data }: any) {
  return (
    <section className="flex justify-center mt-20 md:mt-24 2xl:mt-28 px-0 md:px-8 2xl:px-12">
      <div
        data-aos="fade-in"
        data-aos-easing="fadeUpCustom"
        className="w-full max-w-lg md:max-w-4xl xl:max-w-6xl bg-blue-800 text-white grid grid-cols-2 gap-y-12 lg:grid-cols-4 justify-between px-4 sm:px-6 sm:pl-16 xl:pl-20 py-20"
      >
        {data.map((item: any, index: number) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="flex flex-col items-center sm:items-start w-full"
            >
              <Image
                src={item.icon}
                alt="icon"
                width={79}
                height={78}
                className="h-14 sm:h-20 w-auto mb-4 sm:mb-7"
              />
              <h5 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
                <AnimatedCounter targetNumber={item.distance} />
                {item.unit}
              </h5>
              <p className="text-sm sm:text-base font-bold">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const AnimatedCounter: React.FC<CounterProps> = ({
  targetNumber,
  duration = 1500,
}) => {
  const { isInViewport, elementRef } = useInViewport();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimestamp = performance.now();
    const step = (currentTimestamp: number) => {
      const elapsedTime = currentTimestamp - startTimestamp;
      const progress = Math.min(elapsedTime / duration, 1); // Ensures progress does not exceed 1

      setCount(Math.floor(progress * targetNumber));

      if (progress < 1 && isInViewport) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber, duration, isInViewport]);

  return <span ref={elementRef}>{count}</span>;
};

function useInViewport() {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { isInViewport, elementRef };
}
