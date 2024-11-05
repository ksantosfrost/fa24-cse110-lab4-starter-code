import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";

const ExpenseItem = (currentExpense: Expense) => {
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.name !== currentExpense.name
    );
    setExpenses(updatedExpenses);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost.toFixed(2)}</div>
      <div>
        <button
          onClick={() => handleDeleteExpense(currentExpense)}
          className="btn btn-danger btn-sm"
        >
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
