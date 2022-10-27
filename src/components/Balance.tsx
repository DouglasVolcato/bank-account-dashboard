import { useAccount } from "../hooks/account";
import "../styles/Balance.css";

export function Balance() {
  const { balance, totalMovimented } = useAccount().getInformation();

  function cardColor() {
    return balance > 0 ? "Balance greenCard" : "Balance redCard";
  }

  return (
    <div className={cardColor()}>
      <p>
        <div className="Balance-label">Balance:</div>
        <div className="Balance-value">${balance.toFixed(2)}</div>
      </p>
      <p>
        <div className="Balance-label">Total movimented: </div>
        <div className="Balance-value">${totalMovimented.toFixed(2)}</div>
      </p>
    </div>
  );
}
