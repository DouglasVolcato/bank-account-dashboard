import { AddMovimentation } from "./components/AddMovimentation";
import { Balance } from "./components/Balance";
import { LastMovimentations } from "./components/LastMovimentations";
import { LastOperation } from "./components/LastOperation";
import { TotalMovimented } from "./components/TotalMovimented";
import "./styles/App.css";

export function App() {
  return (
    <div className="App">
      <Balance />
      <TotalMovimented />
      <LastMovimentations />
      <LastOperation />
      <AddMovimentation />
    </div>
  );
}
