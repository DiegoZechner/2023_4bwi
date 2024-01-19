import React from "react";
import Card from "./card";

export default function PeopleContainer() {
  return (
    <div className="">
      <h1>People</h1>
      <div className="w-40">
        <Card
          name="hans"
          title="CEO"
          imageUri="https://picsum.photos/200/300"
        />
      </div>
    </div>
  );
}
