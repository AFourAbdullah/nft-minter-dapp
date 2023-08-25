import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
const chainId = 11155111;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider>
    <App />
  </ThirdwebProvider>
);
