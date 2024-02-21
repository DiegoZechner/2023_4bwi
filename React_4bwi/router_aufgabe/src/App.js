import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Friends from "./components/pages/Friends";
import People from "./components/pages/People";

const router = createBrowserRouter([
  {
    path: "/",
    element: <People />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
