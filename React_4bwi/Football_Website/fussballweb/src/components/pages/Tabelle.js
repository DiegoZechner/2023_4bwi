import React from "react";
import Menu from "../molekule/menu";
import Headline from "../atoms/headline";
import TeamTable from "../molekule/TabelleTabel";

export default function Tabelle() {
  return (
    <div className="bg-HomepageBG">
      <Menu />
      <Headline title={"Tabelle"} />
      <div className="flex justify-center mt-3">
        <TeamTable />
      </div>
    </div>
  );
}
