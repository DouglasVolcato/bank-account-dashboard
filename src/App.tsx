import { AddMovimentation } from "./components/AddMovimentation";
import { Balance } from "./components/Balance";
import { LastMovimentations } from "./components/LastMovimentations";
import { LastOperation } from "./components/LastOperation";
import { Chart } from "./components/Chart";
import "./styles/App.css";

export function App() {
  return (
    <div className="App">
      <Balance />
      <Chart />
      <LastMovimentations />
      <LastOperation />
      <AddMovimentation />
    </div>
  );
}
