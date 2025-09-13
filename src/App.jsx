// src/App.js
import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';

function App() {
  // `expenses` state and `localStorage` logic moved to Redux store/slice

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Expense Tracker</h1>
      <ExpenseForm /> {/* No props needed for state management */}
      <hr />
      <ExpenseList /> {/* No props needed for state management */}
      <TotalExpenses /> {/* No props needed for state management */}
    </div>
  );
}

export default App;