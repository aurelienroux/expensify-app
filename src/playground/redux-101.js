import { createStore } from 'redux';


//Actions generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ newCount } = {}) => ({
  type: 'SET',
  newCount
});

const resetCount = () => ({
  type: 'RESET'
});

// Store setup
const store = createStore((state = { count : 0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET': 
      return {
        count: action.newCount
      } 
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 6
// });
store.dispatch(incrementCount({ incrementBy: 4 }))

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// })
store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 3
// })
store.dispatch(decrementCount({ decrementBy: 14 }));

// store.dispatch({
//   type: 'SET',
//   newCount: 101
// })
store.dispatch(setCount({ newCount: 76 }))

store.dispatch(decrementCount());
