import { createStore } from 'redux';

const store = createStore((state = { count : 0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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

// increment the count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 6
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 3
})

store.dispatch({
  type: 'SET',
  newCount: 101
})

store.dispatch({
  type: 'DECREMENT'
})
