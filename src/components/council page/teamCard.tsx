import React from "react";

function TCard({ name, mobile, email, position, activePosition = "head" }) {
  return (
    <div
      className={`p-2 mt-4 ${
        position === "head" ? " bg-g px-6 text-p py-3 rounded-lg " : "mr-0"
      }`}
    >
      <h3
        className={`${position === activePosition ? "text-2xl" : "text-2xl"}`}
      >
        {name}
      </h3>
      <h4
        className={`${
          position === "head" ? "text-lg" : "text-lg"
        } font-bold capitalize`}
      >
        {position}
      </h4>
      <address>
        <i className="block">{mobile}</i>
        <i className="block">{email}</i>
      </address>
    </div>
  );
}

export default TCard;
