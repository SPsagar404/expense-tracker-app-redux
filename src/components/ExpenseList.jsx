// src/components/ExpenseList.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import ExpenseItem from './ExpenseItem';

function ExpenseList() { // No expenses or onDeleteExpense props anymore
  const expenses = useSelector(state => state.expenses); // Select expenses from the Redux store

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Expense History</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500 p-5 border-2 border-dashed border-gray-300 rounded-md mt-4">No expenses added yet. Start adding some!</p>
      ) : (
        <ul className="list-none p-0">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              // onDeleteExpense prop is removed as ExpenseItem dispatches directly
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;