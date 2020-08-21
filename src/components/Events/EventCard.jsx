import React from 'react';
import '../../styles/events/event-card.scss';

/**
 * Lists upcoming events for NTXFIT
 */
const EventCard = ({ name, url, date, logo, register }) => (
  <div className="event-card">
    <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
    <div className="content">
      <div>
        <p className="date">{date}</p>
        <h3>{name}</h3>
      </div>
      <a href={url}>{register ? 'Register for event' : 'View event'}</a>
    </div>
  </div>
);

export default EventCard;
