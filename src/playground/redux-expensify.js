import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'serial',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
  }
};