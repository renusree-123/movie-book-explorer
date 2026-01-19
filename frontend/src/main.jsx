import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { FavoriteProvider } from "./context/FavoriteContext";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </ThemeProvider>
);
