import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const element = createElement("h1", null, "Hello ReactJS!");

root.render(element);
