import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Banner from "./Banner";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <FaChevronRight size={18} />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <FaChevronLeft size={18} />
    </button>
  );
}

const Campaigns = () => {
  const [banners, setBanners] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    setBanners(Banners);
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>

      <Slider {...settings}>
        {banners?.map((banner, index) => (
          <Banner key={index} banner={banner} />
        ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
