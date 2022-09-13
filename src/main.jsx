import React from "react";
import ReactDOM from "react-dom/client";
import { MyThemeProvider } from "./styles/myThemeProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
