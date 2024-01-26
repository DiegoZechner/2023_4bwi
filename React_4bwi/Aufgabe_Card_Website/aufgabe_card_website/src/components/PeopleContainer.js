import React, { useEffect, useState } from "react";
import Card from "./card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://5e391b0baad2220014962337.mockapi.io/swp/person").then(
      (res) =>
        res.json().then((data) => {
          setPeople(data);
        })
    );
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="w-40">
        {people.map((element) => {
          return <div>{element.name}</div>;
        })}
      </div>
    </div>
  );
}
