import React from 'react';
import Header from '../components/Header';

/**
 * Landing page
 */
const Events = () => (
  <div className="events">
    <Header short backgroundImage={require('../images/events-header.jpg')} backgroundPosition="right 60%">
      <h1>Events</h1>
    </Header>
  </div>
);

export default Events;
