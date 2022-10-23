import { useReducer } from "react";
import { AddMovimentation } from "./components/AddMovimentation";
import { Balance } from "./components/Balance";
import { LastMovimentations } from "./components/LastMovimentations";
import { LastOperation } from "./components/LastOperation";
import { TotalMovimented } from "./components/TotalMovimented";
import { AccountContext } from "./context/account-context";
import "./styles/App.css";

interface Payload {
  type: string;
  description: string;
  value: number;
}

interface Action {
  type: string;
  payload: Payload;
}

const reducer = (state: Payload[] | any, action: Action) => {
  switch (action.type) {
    case "ADD":
      return state.push(action.payload);
    case "CLOSE-ACCOUNT":
      return [];
  }
};

export function App() {
  const newMovimentation = (movimentation: Payload) => {
    dispatch({
      type: "ADD",
      payload: movimentation,
    });
  };

  const closeAccount = (closeAccount: Payload) => {
    dispatch({
      type: "CLOSE-ACCOUNT",
      payload: closeAccount,
    });
  };

  const [movimentations, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <AccountContext.Provider
        value={{ newMovimentation, closeAccount, movimentations }}
      >
        <Balance />
        <TotalMovimented />
        <LastMovimentations />
        <LastOperation />
        <AddMovimentation />
      </AccountContext.Provider>
    </div>
  );
}
