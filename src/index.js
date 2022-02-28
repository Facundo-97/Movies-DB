import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { GlobalStyles } from "./components/styles/globalstyles";

import MainApp from "./components/MainApp";

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
        <MainApp />
    </Provider>,
  document.getElementById("root")
);
