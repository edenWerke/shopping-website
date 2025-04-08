"use client"

import React from 'react';

import Slider from "react-slick"
import Slide from './Slide';
const Hero = () => {
  const settings = {
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
    <div >
        <div className="container pt-6 lg:pt-0"></div>
<Slider {...settings}>
    {slideData.map((item)=>(
        <Slide
        key={item.id}
        img={item.img}
        title={item.title}
        mainTitle={item.mainTitle}
        price={item.price}
        
        
        />
    ))}
</Slider>
    </div>
  );
}

export default Hero;
