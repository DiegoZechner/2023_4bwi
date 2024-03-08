import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Clubs from "./components/pages/Clubs.js";
import Tabelle from "./components/pages/Tabelle.js";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/Clubs",
    element: (
      <div>
        <Clubs />
      </div>
    ),
  },
  {
    path: "/Tabelle",
    element: (
      <div>
        <Tabelle />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
