import { useAccount } from "../hooks/account";
import "../styles/LastOperation.css";

export function LastOperation() {
  const { description, type, value } =
    useAccount().getInformation().movimentations[
      useAccount().getInformation().movimentations.length - 1
    ];

  function cardColor() {
    return type.toUpperCase() === "DEPOSIT"
      ? "LastOperation greenCard"
      : "LastOperation redCard";
  }

  return (
    <div className={cardColor()}>
      <h3 className="LastOperation-title">Last Movimentation:</h3>
      <div className="LastOperation-card">
        <p>
          <div className="LastOperation-label">Type: </div>
          <div className="LastOperation-value">{type}</div>
        </p>
        <p>
          <div className="LastOperation-label">Value: </div>
          <div className="LastOperation-value">${value.toFixed(2)}</div>
        </p>
        <p>
          <div className="LastOperation-label">Description: </div>
          <div className="LastOperation-value">{description}</div>
        </p>
      </div>
    </div>
  );
}
