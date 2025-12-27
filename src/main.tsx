import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const reactRoot = document.getElementById("root");
if (!reactRoot) throw new Error("No root element found.");

createRoot(reactRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);
