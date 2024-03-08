import React from "react";
import BannerButton from "../atoms/bannerbuttons";

export default function Menu() {
  return (
    <div className="bg-BannerBG p-10 text-white text-5xl font-bold flex justify-between">
      <p>Bundesliga</p>

      <div className="flex font-normal text-3xl items-center">
        <BannerButton path="/Home" name="Home" />
        <BannerButton path="/Clubs" name="Clubs" />
        <BannerButton path="/Tabelle" name="Tabelle" />
      </div>
    </div>
  );
}
