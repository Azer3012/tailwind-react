import React from "react";

const Banner = ({ banner }) => {
  const { id, image } = banner;
  return (
    <div>
      <picture className="block md:px-2">
        <img className="md:rounded-lg" src={image} alt={id} />
      </picture>
    </div>
  );
};

export default Banner;
