import { useAccount } from "../hooks/account";
import { MovimentationCard } from "./MovimentationCard";
import "../styles/LastMovimentations.css";

export function LastMovimentations() {
  const { movimentations } = useAccount().getInformation();
  return (
    <div className="LastMovimentations">
      {movimentations
        .slice(0)
        .reverse()
        .map((movimentation) => (
          <MovimentationCard movimentation={movimentation} />
        ))}
    </div>
  );
}
