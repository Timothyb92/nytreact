import React from 'react';

const Results = props => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Results</h2>
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Results;