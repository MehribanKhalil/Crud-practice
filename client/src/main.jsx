import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/BasketContext.jsx";
import { WishlishProvider } from "./context/WishlishContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlishProvider>
      <App />

      </WishlishProvider>
    </BasketProvider>
  </React.StrictMode>
);
