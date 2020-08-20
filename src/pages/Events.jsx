import React from 'react';
import Header from '../components/Header';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PastEvents from '../components/Events/PastEvents';
import GetNotified from '../components/Events/GetNotified';

/**
 * Landing page
 */
const Events = () => (
  <div className="events">
    <Header short backgroundImage={require('../images/conference.jpg')} backgroundPosition="right 60%">
      <h1>Events</h1>
    </Header>
    <UpcomingEvents />
    <PastEvents />
    <GetNotified />
  </div>
);

export default Events;
