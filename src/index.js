import React, { createContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import RootStore from "./store/rootStore";

const store = RootStore.create({});
// Компонент контекста
export const StoreContext = createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
