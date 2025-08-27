import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { inject } from "@vercel/analytics";
import "./index.css";

inject();

// Reliable viewport height on mobile (handles browser UI chrome)
const setViewportHeightVar = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setViewportHeightVar();
window.addEventListener("resize", setViewportHeightVar);
window.addEventListener("orientationchange", setViewportHeightVar);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
