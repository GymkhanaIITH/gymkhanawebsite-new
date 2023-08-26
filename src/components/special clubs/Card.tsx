import React from "react";

function Card({
  imgClass = "",
  bgColor = "bg-white",
  textColor = "text-black",
  imgUrl = "",
  title = "dummy",
  desc = "",
  link = "",
  buttonBg = "bg-blue-500",
  buttonText = "text-white",
}) {
  return (
    <div
      className={`min-w-[16.875rem] h-fit ${bgColor} rounded-2xl p-[1.5rem] shadow-md`}
    >
      <div className="w-full mb-6">
        <h2
          className={`${textColor} text-3xl font-semibold text-center pointer-events-none`}
        >
          {title}
        </h2>
      </div>
      <div className="relative flex justify-center w-full">
        <div className="w-[12rem] relative h-auto min-h-[10rem] flex justify-center items-center">
          <img
            src={imgUrl}
            className={
              "object-contain pointer-events-none relative " + imgClass
            }
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="pointer-events-none">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
