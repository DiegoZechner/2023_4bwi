import React, { useState, useEffect } from "react";
import Theader from "../atoms/theader";
import Tbbody from "../atoms/Tbbody";

function TeamTable({}) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function insertRow(data) {
    setTableData(data.slice(0, 12));
  }

  function loadData() {
    fetch("https://api.openligadb.de/getbltable/öbl1/2023")
      .then((result) => result.json())
      .then((data) => {
        insertRow(data);
      });
  }

  return (
    <div>
      <table>
        <thead>
          <tr className="flex justify-center">
            <Theader name={"Verein"} />
            <Theader name={"Sp"} />
            <Theader name={"S"} />
            <Theader name={"U"} />
            <Theader name={"N"} />
            <Theader name={"GT"} />
            <Theader name={"TD"} />
            <Theader name={"P"} />
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-Gray2 flex justify-center"
                  : "bg-Gray1 flex justify-center"
              }
            >
              <Tbbody name={team.teamName} />
              <Tbbody name={team.matches} />
              <Tbbody name={team.won} />
              <Tbbody name={team.draw} />
              <Tbbody name={team.lost} />
              <Tbbody name={team.goals} />
              <Tbbody name={team.opponentGoals} />
              <Tbbody name={team.points} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;
