import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining: React.FC = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
  const remainingBalance = budget - totalExpenses;

  useEffect(() => {
    if (remainingBalance < 0) {
      alert("Alert: You have exceeded your budget!");
    }
  }, [remainingBalance]);

  return (
    <div
      className={`alert ${remainingBalance < 0 ? "alert-danger" : "alert-success"}`}
    >
      Remaining: ${remainingBalance.toFixed(2)}
    </div>
  );
};

export default Remaining;
