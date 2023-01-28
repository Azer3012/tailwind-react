import React from "react";

const Banner = ({ banner }) => {
  const { id, image } = banner;
  return (
    <div>
      <picture className="block px-2">
        <img className="rounded-lg" src={image} alt={id} />
      </picture>
    </div>
  );
};

export default Banner;
