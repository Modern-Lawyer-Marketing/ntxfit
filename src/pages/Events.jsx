/* eslint-disable react/no-this-in-sfc */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PastEvents from '../components/Events/PastEvents';
import Navigation from '../components/Events/Navigation';
import About from '../components/Events/About';

/**
 * Landing page
 */
const Events = () => {
  const [events, setEvents] = useState();
  const [venues, setVenues] = useState();
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    // Get events
    fetch(`https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/events/?token=${process.env.REACT_APP_EVENTBRITE_TOKEN}`)
      .then((response) => response.json())
      .then((data) => setEvents(data.events.reverse()));

    // Get venues
    fetch(`https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/venues/?token=${process.env.REACT_APP_EVENTBRITE_TOKEN}`)
      .then((response) => response.json())
      .then((data) => setVenues(data.venues));
  }, []);

  return (
    <div className="events">
      <Header short backgroundImage={require('../images/conference.jpg')} backgroundPosition="right 60%">
        <h1>Events for Professionals</h1>
      </Header>
      <About />
      <Navigation setTab={setTab} tab={tab} />
      {tab === 'upcoming' && <UpcomingEvents venues={venues} events={events} />}
      {tab === 'past' && <PastEvents venues={venues} events={events} />}
    </div>
  );
};

export default Events;
