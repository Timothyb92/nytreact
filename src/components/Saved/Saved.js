import React from 'react';
import './Saved.css';

const Saved = props => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Saved</h2>
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};

export default Saved;