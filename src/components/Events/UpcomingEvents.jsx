import React from 'react';
import SectionBox from '../SectionBox';
import '../../styles/events/event-list.scss';

/**
 * Lists upcoming events for NTXFIT
 */
const UpcomingEvents = () => (
  <div className="upcoming-events event-list">
    <div className="section">
      <h2>Upcoming Events</h2>
      <SectionBox>
        <p className="quiet">There are currently no scheduled upcoming events.</p>
      </SectionBox>
    </div>
  </div>
);

export default UpcomingEvents;
