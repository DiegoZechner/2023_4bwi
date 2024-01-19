import React from "react";

export default function Card({ name, title, imageUri }) {
  return (
    <div className="border grid grid-cols2 h-40">
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{title}</h4>
      </div>
      <div>
        <img src={imageUri} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
