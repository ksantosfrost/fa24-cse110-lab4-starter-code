import { createContext, useState, ReactNode } from "react";
import { Expense } from "../types/types";

interface AppContextType {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const initialState: AppContextType = {
  budget: 1000, // Default initial budget, can be changed
  setBudget: () => {},
  expenses: [],
  setExpenses: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [budget, setBudget] = useState<number>(initialState.budget);
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);

  return (
    <AppContext.Provider
      value={{
        budget,
        setBudget,
        expenses,
        setExpenses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
