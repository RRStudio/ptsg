/* @refresh reload */
import { render } from "solid-js/web";
import App from "./components/App";
import "./services/firebase"; // Initialize Firebase

import "./index.css";
import "virtual:uno.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

render(() => <App />, root);
