import React from "react";
import { Navlink } from "react-router-dom";

const MenubarItem = ({ name }) => {
  return <p className="cursor-pointer">{name}</p>;
};

export default function menu() {
  return (
    <div className="p-4 text-gray-100 bg-blue sticky flex flex-row gap-3 justify-left item-center">
      <MenubarItem name="Test" />
      <MenubarItem name="Drei" />
      <Navlink to="/home">Home</Navlink>
      <Navlink to="/Tabelle</">Tabelle</Navlink>
      <Navlink to="/Clubs">Clubs</Navlink>
    </div>
  );
}
