import { useAccount } from "../hooks/account";

export function Balance() {
  const totalBalance = useAccount().getInformation().balance;
  return <div className="Balance">Balance: {totalBalance}</div>;
}
