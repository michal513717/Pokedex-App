import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";
import React from "react";
import Root from "./Root";
import { StrictMode } from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
);
