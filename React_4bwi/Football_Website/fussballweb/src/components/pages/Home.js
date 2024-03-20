import React from "react";
import Menu from "../molekule/menu";
import Upcominggame from "../atoms/upcominggame";

import Headline from "../atoms/headline";

export default function Home() {
  return (
    <div>
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

      <div></div>
    </div>
  );
}
