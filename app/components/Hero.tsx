import React from 'react';

const Hero = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Items",
      mainTitle: "WOMEN LATEST FASHOION SALES",
      price: "$15"
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15"
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sales offfer",
      mainTitle: "NEW FASHION SUMMMER SALES",
      price: "$15"
    },
  ];

  return (
    <div>
      <h1>Hero</h1>
      {/* Your slider implementation should go here, and you can use the 'setting' and 'slideData' */}
    </div>
  );
}

export default Hero;
