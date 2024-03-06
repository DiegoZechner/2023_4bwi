import React from "react";

export default function Menu() {
  return (
    <div className="bg-BannerBG p-10 text-white text-5xl font-bold flex justify-between">
      <p>Bundesliga</p>
      <div className="flex font-normal text-3xl items-center">
        <p className="ml-4">Home | </p>
        <p className="ml-4">Clubs | </p>
        <p className="ml-4">Tabelle</p>
      </div>
    </div>
  );
}
