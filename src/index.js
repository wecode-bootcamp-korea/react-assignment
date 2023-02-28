import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "../src/style/common.scss";
import "../src/style/mixin.scss";
import "../src/style/reset.scss";
import "../src/style/variables.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
