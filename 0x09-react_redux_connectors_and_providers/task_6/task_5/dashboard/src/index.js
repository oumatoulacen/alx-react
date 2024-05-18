import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Map } from "immutable";

import App from "./App/App";
import rootReducer, { initialState } from "./reducers/rootReducer";

// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(
//   uiReducer,
//   Map(initialState),
//   composeWithDevTools(applyMiddleware(thunk))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // initialState, // optional
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);