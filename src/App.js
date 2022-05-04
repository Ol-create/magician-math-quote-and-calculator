import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';

import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote" exact>
          <Quote />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
