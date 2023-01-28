import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
const HeroSection = () => {
  const [selected, setSelected] = useState("AZ");
  const phones = {
    US: "+1",
    TR: "+90",
    AZ: "+994",
    RU: "+7",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src={require("../assets/1.jpg")}
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src={require("../assets/2.jpg")}
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            className="rounded-full object-cover w-[200px] h-[200px]"
            src={require("../assets/canabis.jpg")}
          />
          <h3 className="mt-4 text-4xl font-semibold text-white">
            Dakilar icinde <br />
            Kapinizda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giris yap veya Kayit ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  type="text"
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none text-sm pt-2 peer"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-700 peer-focus:h-5 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-5  peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon numarasi
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
              Telefon numarasi ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />

            <button className="bg-blue-700 bg-opacity-10 px-4 text-blue-700 transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center  rounded-md w-full text-sm font-semibold">
              <FaFacebook size={22} />
              <span className="mx-auto"> Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
