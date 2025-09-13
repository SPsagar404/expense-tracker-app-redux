// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../features/expenses/expensesSlice';

// Function to save expenses to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.expenses); // Only save the expenses slice
    localStorage.setItem('expenses', serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

export const store = configureStore({
  reducer: {
    expenses: expensesReducer, // Assign the expenses reducer to the 'expenses' slice of the state
  },
});

// Subscribe to store changes to save state to localStorage
// This runs whenever any part of the Redux state changes
store.subscribe(() => {
  saveState(store.getState());
});