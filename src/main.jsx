import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { store, persistor } from "src/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400..600&display=swap")
          ${emotionNormalize} * {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
        }
        p,
        h2,
        h3 {
          margin: 0;
        }
        ul {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
