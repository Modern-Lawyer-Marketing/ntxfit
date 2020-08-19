import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Members from './pages/Members';
import Events from './pages/Events';
import Resources from './pages/Resources';

/**
 * App
 */
const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/who-we-are">
          <Members />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
