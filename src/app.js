import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));