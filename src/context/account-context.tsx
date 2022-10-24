import { createContext, ReactNode, useState } from "react";

interface Movimentation {
  value: number;
  description: string;
}

interface BankAccount {
  balance: number;
  totalMovimnted: number;
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
    totalMovimnted: 0,
    movimentations: [],
  }),
};

export const AccountContext = createContext<ContextProps>(defaultValue);

export function AccountProvider({ children }: AccountProviderProps) {
  const [bankAccount, setBankAccount] = useState<BankAccount>({
    balance: 0,
    totalMovimnted: 0,
    movimentations: [],
  });

  function deposit(movimentation: Movimentation): void {
    setBankAccount({
      balance: bankAccount.balance + movimentation.value,
      totalMovimnted: bankAccount.totalMovimnted + movimentation.value,
      movimentations: [...bankAccount.movimentations, movimentation],
    });
  }

  function withdraw(movimentation: Movimentation): void {
    setBankAccount({
      balance: bankAccount.balance - movimentation.value,
      totalMovimnted: bankAccount.totalMovimnted + movimentation.value,
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
