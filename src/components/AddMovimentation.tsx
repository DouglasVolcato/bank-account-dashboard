import { useState } from "react";
import { useAccount } from "../hooks/account";
import { Movimentation } from "../protocols/movimentation-interface";
import "../styles/AddMovimentation.css";

export function AddMovimentation() {
  const { deposit, withdraw } = useAccount();
  const [movimentation, setMovimentation] = useState<Movimentation>({
    type: "None",
    value: 0,
    description: "",
  });

  function addValue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (movimentation.type === "Deposit") {
      deposit(movimentation);
    } else if (movimentation.type === "Withdraw") {
      withdraw(movimentation);
    }
  }

  return (
    <div className="AddMovimentation">
      <form onSubmit={addValue} className="AddMovimentation-form">
        <div>
          <label>Type: </label>
          <select
            onChange={(event) =>
              setMovimentation({ ...movimentation, type: event.target.value })
            }
          >
            <option value="None">SELECT</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </div>
        <div>
          <label>Value: </label>
          <input
            type="number"
            onChange={(event) =>
              setMovimentation({
                ...movimentation,
                value: Number(event.target.value),
              })
            }
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            onChange={(event) =>
              setMovimentation({
                ...movimentation,
                description: event.target.value,
              })
            }
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
