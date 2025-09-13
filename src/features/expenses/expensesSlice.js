// src/features/expenses/expensesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to load expenses from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('expenses');
    if (serializedState === null) {
      return []; // No state saved, return empty array
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return [];
  }
};

const expensesSlice = createSlice({
  name: 'expenses', // Name of the slice, used in action types
  initialState: loadState(), // Load initial state from localStorage
  reducers: {
    addExpense: (state, action) => {
      // Immer (built-in with createSlice) allows direct mutation-like syntax
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      // Filter out the expense with the matching ID
      return state.filter(expense => expense.id !== action.payload);
    },
    // You could add other reducers like updateExpense, clearExpenses etc.
  },
});

// Export the auto-generated action creators
export const { addExpense, deleteExpense } = expensesSlice.actions;

// Export the reducer function for the store
export default expensesSlice.reducer;