import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FindSupplier from "./page/FindSupplier.jsx";
import FindServiceTags from "./page/FindServiceTags.jsx";
import Home from "./page/Home.jsx";
import NotFound from "./page/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "findSupplier",
        element: <FindSupplier />
      },
      {
        path: "findServiceTags",
        element: <FindServiceTags />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
