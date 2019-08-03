import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { startAddExpense, removeExpense, editExpense, addExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove action object', () => {
  const action = removeExpense({ id:'123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit action object', () => {
  const action = editExpense('abc123', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 10,
    note: ' a mouse note',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(2);
    done();
  });
});

test('should add expense with defaults to database and store', () => {
  
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       amount: 0,
//       createdAt: 0,
//       description: '', 
//       id: expect.any(String),
//       note: ''
//     }
//   })
// });