import React from 'react';
import {
  Link
} from 'react-router-dom';

function Topbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/create">CREATE</Link>
          </li>
          <li>
            <Link to="/">READ</Link>
          </li>
          <li>
            <Link to="/update">UPDATE</Link>
          </li>
          <li>
            <Link to="/delete">DELETE</Link>
          </li>
        </ul>
      </nav>
      <h1>CRUD APP</h1>
    </div>
  );
}

export default Topbar;