import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact="true" activeClassName="is-active">Homepage </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create </NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensesDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));