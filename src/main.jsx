import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portofolio from "./pages/Portofolio.jsx";

export const pages = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
    title: "Projects",
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
