import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Topbar from './components/navigation/Topbar';
import Create from './components/pages/Create';
import Read from './components/pages/Read';
import Update from './components/pages/Update';
import Delete from './components/pages/Delete';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Read />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
