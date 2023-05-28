import React, { useEffect, useRef } from "react";

const FeaturedProducts = () => {
  const carouselContent = [
    {
      id: 1,
      imageUrl: "/baby_feeding_bottle_5.png",
      caption: "First slide",
      alt: "First slide",
    },
    {
      id: 2,
      imageUrl: "/black_baby_feeding_bottle_2.png",
      caption: "Second slide",
      alt: "Second slide",
    },
    {
      id: 3,
      imageUrl: "/black_baby_feeding_bottle.png",
      caption: "Third slide",
      alt: "Third slide",
    },
    {
      id: 4,
      imageUrl: "/rare_gem.png",
      caption: "Fourth slide",
      alt: "Fourth slide",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;
    const intervalId = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth <
        container.scrollWidth
      ) {
        container.scrollLeft += container.offsetWidth;
      } else {
        container.scrollLeft = 0;
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={containerRef}
      role="region"
      className="bg-tertiary flex flex-row items-center overflow-x-auto w-screen scroll-p-6 snap-x gap-2 mt-10 py-2 px-4"
    >
      {carouselContent.map((item) => (
        <div key={item.id}>
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="max-w-rousel min-h-10 tablet:min-w-rouselMin desktop:max-h-[40vh] desktop:min-w-[20vw]"
          />
          <p className="text-primary text-center">{item.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
