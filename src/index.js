import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoriesContextProvider, { StoryContext } from "./context/StoriesContext";

ReactDOM.render(
  <React.StrictMode>
    <StoriesContextProvider>
      <App />
    </StoriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
