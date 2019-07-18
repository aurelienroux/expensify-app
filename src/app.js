import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

// Add bills
store.dispatch(addExpense({description: 'water bill', amount: 1234, createdAt: 1200}));
store.dispatch(addExpense({description: 'gaz bill'}));

// set text filter with bill
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

// get visible expenses 
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));