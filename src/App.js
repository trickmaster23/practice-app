import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/pages/Users';
import Topbar from './components/navigation/Topbar';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
