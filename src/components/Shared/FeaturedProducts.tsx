import React from "react";
import Slider from "react-slick";

const FeaturedProducts = () => {
  //   const carouselSettings = {
  //     dots: true,
  //     infinite: true,
  //     // speed: 500,
  //     // slidesToShow: 3,
  //     // slidesToScroll: 1,
  //     // responsive: [
  //     //   {
  //     //     breakpoint: 768,
  //     //     settings: {
  //     //       slidesToShow: 2,
  //     //       slidesToScroll: 1,
  //     //     },
  //     //   },
  //     //   {
  //     //     breakpoint: 480,
  //     //     settings: {
  //     //       slidesToShow: 1,
  //     //       slidesToScroll: 1,
  //     //     },
  //     //   },
  //     // ],
  //   };

  const carouselSettings = {
    autoplay: true,
    wrapAround: true,
    slideIndex: 0,
    dots: true,
    speed: 10000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const carouselContent = [
    {
      id: 1,
      imageUrl: "https://placeimg.com/640/480/tech",
      caption: "First slide",
    },
    {
      id: 2,
      imageUrl: "https://placeimg.com/640/480/nature",
      caption: "Second slide",
    },
    {
      id: 3,
      imageUrl: "https://placeimg.com/640/480/animals",
      caption: "Third slide",
    },
  ];

  return (
    <div>
      <Slider {...carouselSettings} className="flex flex-col bg-tertiary">
        {carouselContent.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
