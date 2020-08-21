/* eslint-disable max-len */
import React, { useState } from 'react';
import moment from 'moment';
import SectionBox from '../SectionBox';
import '../../styles/events/event-list.scss';
import EventCard from './EventCard';

/**
 * Lists upcoming events for NTXFIT
 */
const UpcomingEvents = ({ events }) => {
  const [none, setNone] = useState(true);

  return (
    <div className="upcoming-events event-list">
      <div className="section">
        <h2>Upcoming Events</h2>
        <SectionBox>
          {events && events.map((event) => {
            const date = moment(new Date(event.start.local));
            if (date.isAfter()) {
              const name = event.name.text;
              const logo = event.logo.url;
              const url = event.url;
              const start = moment(new Date(event.start.local)).format('ddd, MMM D YYYY, LT ').toUpperCase();

              if (none) {
                setNone(false);
              }

              return <EventCard register key={event.id} name={name} logo={logo} url={url} date={start} />;
            }
            return null;
          })}
          {none && <p className="quiet">There are currently no scheduled upcoming events.</p>}
        </SectionBox>
      </div>
    </div>
  );
};

export default UpcomingEvents;
