import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Search from "./Search";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Search />
    <Footer />
  </React.StrictMode>
);
