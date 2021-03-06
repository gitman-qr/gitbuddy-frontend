import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Context api
import { ThemeContext } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById("root")
);
