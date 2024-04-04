import React from "react";
import Menu from "../molekule/menu";
import Upcominggame from "../atoms/upcominggame";
import Headline from "../atoms/headline";
import Tabelle from "../molekule/Tabelle";

export default function Home() {
  return (
    <div className="bg-HomepageBG">
      <Menu />
      <Headline title={"Spielplan"} />
      <div className="flex justify-center">
        <Upcominggame />
        <Upcominggame />
        <Upcominggame />
        <Upcominggame />
        <Upcominggame />
        <Upcominggame />
        <Upcominggame />
      </div>
      <Headline title={"Tabelle"} />
      <div className="flex justify-center mt-3">
        <Tabelle />
      </div>
    </div>
  );
}
