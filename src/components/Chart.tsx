import { useAccount } from "../hooks/account";

export function Chart() {
  const { movimentations } = useAccount().getInformation();
  return <div className="Chart">Total movimented:</div>;
}
