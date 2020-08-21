import React from 'react';
import '../../styles/events/event-navigation.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * Navigation tabs for events
 */
const Navigation = ({ tab, setTab }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`event-navigation ${isMobile ? 'mobile' : ''}`}>
      <div className="section">
        <div className="left">
          <button onClick={() => setTab('upcoming')} className={tab === 'upcoming' && 'active'}>Upcoming Events</button>
          <button onClick={() => setTab('past')} className={tab === 'past' && 'active'}>Past Events</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
