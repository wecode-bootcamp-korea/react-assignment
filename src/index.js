import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./style/common.scss";
import "../src/style/common.scss"; //common 과 reset은
import "../src/style/reset.scss"; //모든 페이지에 적용되어야 함
import "../src/style/variables.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
