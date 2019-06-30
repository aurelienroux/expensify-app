import React from 'react';

const EditExpensePage = (props) => (
  <div>
    edit expenses number {props.match.params.id}
  </div>
);

export default EditExpensePage;