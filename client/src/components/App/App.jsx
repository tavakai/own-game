import React from 'react';
import Table from '../Table/Table';

function App() {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
      </div>
      <Table />
    </>
  );
}

export default App;
