import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './Pages/NotFound'
import Dashboard from './Pages/Dashboard/Dashboard'
import Authentication from './Pages/Authentication/Authentication';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope)
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;