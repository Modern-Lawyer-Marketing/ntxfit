import React from 'react';
import '../../styles/events/event-card.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * Lists upcoming events for NTXFIT
 */
const EventCard = ({ name, url, date, logo, register }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`event-card ${isMobile ? 'mobile' : ''}`}>
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      <div className="content">
        <div>
          <p className="date">{date}</p>
          <h3>{name}</h3>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">{register ? 'Register for event' : 'View event'}</a>
      </div>
    </div>
  );
};
export default EventCard;
