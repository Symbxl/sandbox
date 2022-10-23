import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import { A11yUserPreferences } from "@react-three/a11y"
import App from "./App"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <A11yUserPreferences>
    <App />
  </A11yUserPreferences>,
  rootElement,
)
