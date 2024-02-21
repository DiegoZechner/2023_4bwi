import React from "react";
import { Link } from "react-router-dom";

export default function People() {
  return (
    <div>
      <h1>People</h1>
      <Link to="friends">Friends</Link>
    </div>
  );
}
