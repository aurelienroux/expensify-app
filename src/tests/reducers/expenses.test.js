import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if no matching id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'laptop', 
    note: '', 
    amount: 20000,
    createdAt: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if id match', () => {
  const description = 'has changed';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toEqual(description);
});

test('should not edit any expense if id dont match', () => {
  const description = 'has changed';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses ]);
});