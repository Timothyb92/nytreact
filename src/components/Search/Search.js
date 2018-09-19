import React from 'react';

const Search = () => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Search</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="topicInput">Topic</label>
            <input type="text" className="form-control" id="topicInput" />
          </div>
          <div className="form-group">
            <label for="startYear">Start Year</label>
            <input type="text" className="form-control" id="startYear" />
          </div>
          <div className="form-group">
            <label for="endYear">End Year</label>
            <input type="text" className="form-control" id="endYear" />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  )
};

export default Search;