// src/components/TotalExpenses.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector

function TotalExpenses() { // No expenses prop anymore
  const expenses = useSelector(state => state.expenses); // Select expenses from the Redux store
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="text-right text-xl font-bold mt-5 pt-4 border-t-2 border-gray-200 text-green-600">
      <h3>Total Expenses: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default TotalExpenses;