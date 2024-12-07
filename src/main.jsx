import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import OffRouter from "./app/router.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OffRouter />
  </BrowserRouter>
);
