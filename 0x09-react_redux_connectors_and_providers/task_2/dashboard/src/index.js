import React from "react";
import ReactDOM from "react-dom";
import { Map } from "immutable";

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import thunk from "redux-thunk";

// components
import App from "./App/App";


// const store = createStore(uiReducer, Map(initialState));
const store = createStore(uiReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
