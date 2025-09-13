// src/components/ExpenseForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/expenses/expensesSlice';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch(); // Get the dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const newExpense = {
      id: Math.random().toString(), // Simple unique ID for now
      description,
      amount: parseFloat(amount),
      date,
    };

    dispatch(addExpense(newExpense)); // Dispatch the addExpense action
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Add New Expense</h2>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600 font-bold mb-2">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., Groceries, Rent, Utilities"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-600 font-bold mb-2">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 50.00"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-600 font-bold mb-2">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;