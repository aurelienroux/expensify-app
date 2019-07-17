import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSES
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt: new Date()
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      return [
        ...state, 
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default: 
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'rent',amount: 5400}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 100}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Demo state
const demoState = {
  expenses: [{
    id: 'serial',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
  }
};