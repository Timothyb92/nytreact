import React from 'react';
import './Search.css';

const Search = ({ children }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Search</h2>
      </div>
      <div className="card-body">
        <form>
          {children}
        </form>
      </div>
    </div>
  )
};

export default Search;