import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

/**
 * App
 */
const App = () => (
  <div className="app">
    <Navbar />
    <Home />
    <Footer />
  </div>
);

export default App;
