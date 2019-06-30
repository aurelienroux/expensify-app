import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpensesDashboardPage = () => (
  <div>
    dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    add expenses
  </div>
);

const EditExpensePage = () => (
  <div>
    edit expenses
  </div>
);

const HelpPage = () => (
  <div>
    Help me
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpensesDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));