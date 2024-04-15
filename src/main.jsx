import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400..600&display=swap")
            ${emotionNormalize} html,
          body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
        }
      `}
    />
    <App />
  </React.StrictMode>
);
