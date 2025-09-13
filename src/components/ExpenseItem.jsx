// src/components/ExpenseItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../features/expenses/expensesSlice';

function ExpenseItem({ expense }) { // No onDeleteExpense prop anymore
  const dispatch = useDispatch(); // Get the dispatch function

  const handleDelete = () => {
    dispatch(deleteExpense(expense.id)); // Dispatch the deleteExpense action with the ID
  };

  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
      <div className="flex-grow">
        <strong className="text-gray-800">{expense.description}</strong> - 
        <span className="text-gray-600 text-sm"> ${expense.amount.toFixed(2)}</span> - 
        <span className="text-gray-600 text-sm"> {expense.date}</span>
      </div>
      <button 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-md transition duration-200 ml-4"
        onClick={handleDelete} // Call local handleDelete
      >
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;