import React from 'react';
import Header from '../components/Header';

/**
 * Landing page
 */
const Events = () => (
  <div className="events">
    <Header backgroundImage={require('../images/members-header.jpg')} backgroundPosition="right">
      <h1>Events</h1>
    </Header>
  </div>
);

export default Events;
