import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className="header">
      <Link to="/" className="header-link">
        <h1><i className="fa fa-leaf" aria-hidden="true"></i> Plant Share</h1>
      </Link>
    </header>
    {children}
  </div>
);

export default App;
