import { Movimentation } from "../protocols/movimentation-interface";
import "../styles/MovimentationCard.css";

interface Props {
  movimentation: Movimentation;
}

export function MovimentationCard({ movimentation }: Props) {
  function cardColor() {
    return movimentation.type.toUpperCase() === "DEPOSIT"
      ? "MovimentationCard greenCard"
      : "MovimentationCard redCard";
  }

  return (
    <div className={cardColor()}>
      <p className="MovimentationCard-type">
        <div className="MovimentationCard-type_label">Type: </div>
        <div className="MovimentationCard-type_value">{movimentation.type}</div>
      </p>
      <p className="MovimentationCard-value">
        <div className="MovimentationCard-value_label">Value: </div>
        <div className="MovimentationCard-value_value">
          ${movimentation.value.toFixed(2)}
        </div>
      </p>
      <p className="MovimentationCard-description">
        <div className="MovimentationCard-description_label">Description: </div>
        <div className="MovimentationCard-description_value">
          {movimentation.description}
        </div>
      </p>
    </div>
  );
}
