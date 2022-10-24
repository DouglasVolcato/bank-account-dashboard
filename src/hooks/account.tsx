import { useContext } from "react";
import { AccountContext } from "../context/account-context";

export function useAccount() {
  return useContext(AccountContext);
}
