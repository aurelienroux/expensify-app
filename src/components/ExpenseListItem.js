import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount}$ - {moment(createdAt).format('YYYY, MMMM Do')}</p>
    <hr />
  </div>
)

export default ExpenseListItem;