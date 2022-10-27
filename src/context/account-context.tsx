import { createContext, ReactNode, useState } from "react";
import { Movimentation } from "../protocols/movimentation-interface";

interface BankAccount {
  balance: number;
  totalMovimented: number;
  movimentations: Movimentation[];
}

interface AccountProviderProps {
  children: ReactNode;
}

interface ContextProps {
  deposit(movimentation: Movimentation): void;
  withdraw(movimentation: Movimentation): void;
  getInformation(): BankAccount;
}

const defaultValue = {
  deposit: () => {},
  withdraw: () => {},
  getInformation: () => ({
    balance: 0,
    totalMovimented: 0,
    movimentations: [],
  }),
};

export const AccountContext = createContext<ContextProps>(defaultValue);

export function AccountProvider({ children }: AccountProviderProps) {
  const [bankAccount, setBankAccount] = useState<BankAccount>({
    balance: 1500,
    totalMovimented: 2500,
    movimentations: [
      {
        type: "Deposit",
        value: 2000,
        description: "Salary",
      },
      {
        type: "Withdraw",
        value: 300,
        description: "Bill",
      },
      {
        type: "Withdraw",
        value: 200,
        description: "Bill",
      },
    ],
  });

  function deposit(movimentation: Movimentation): void {
    setBankAccount({
      balance: bankAccount.balance + movimentation.value,
      totalMovimented: bankAccount.totalMovimented + movimentation.value,
      movimentations: [...bankAccount.movimentations, movimentation],
    });
  }

  function withdraw(movimentation: Movimentation): void {
    setBankAccount({
      balance: bankAccount.balance - movimentation.value,
      totalMovimented: bankAccount.totalMovimented + movimentation.value,
      movimentations: [...bankAccount.movimentations, movimentation],
    });
  }

  function getInformation(): BankAccount {
    return bankAccount;
  }

  return (
    <div className="App">
      <AccountContext.Provider value={{ deposit, withdraw, getInformation }}>
        {children}
      </AccountContext.Provider>
    </div>
  );
}
