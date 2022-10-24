import { useAccount } from "../hooks/account";

export function TotalMovimented() {
  const totalMovimented = useAccount().getInformation().totalMovimnted;
  return (
    <div className="TotalMovimented">Total movimented: {totalMovimented}</div>
  );
}
