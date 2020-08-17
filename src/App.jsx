import React from 'react';
import './styles/app.scss';
import Home from './pages/Home';
import Footer from './components/Footer';

/**
 * App
 */
const App = () => (
  <div className="app">
    <Home />
    <Footer />
  </div>
);

export default App;
