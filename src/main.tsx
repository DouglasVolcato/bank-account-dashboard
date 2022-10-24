import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AccountProvider } from "./context/account-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
