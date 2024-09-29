import React, { useState } from "react";

const Card = ({
  imgSrc,
  title,
  description,
  instructorImg,
  instructorName,
  instructorRole,
  price,
  rating,
}) => {
  const [click, setClick] = useState();
  const handleClick = (event) => {
    event.preventDefault();
    setClick(!click);
    window.location.href = "/detail";
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white w-full sm:w-96 h-auto sm:h-[426px] border rounded-lg max-w-screen-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="mx-4 sm:mx-5 mt-4 sm:mt-5">
        <img
          src={imgSrc}
          className="w-full sm:w-[344px] h-[193px] object-cover rounded-lg"
          alt="Video Thumbnail"
        />
        <h2 className="mt-4 text-lg sm:text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">{description}</p>
        <div className="mt-5 flex items-center">
          <img
            src={instructorImg}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
            alt="Instructor"
          />
          <div className="ml-3">
            <h3 className="font-dm-sans font-semibold text-base sm:text-lg">
              {instructorName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{instructorRole}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-4 sm:mx-5 my-4 sm:my-5">
        {rating && (
          <img src={rating} className="w-[70px] sm:w-[90px]" alt="Rating" />
        )}
        <p className="font-poppins font-semibold text-lg sm:text-2xl text-primary-500">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
