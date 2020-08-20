import React from 'react';
import SectionBox from '../SectionBox';
import '../../styles/events/event-list.scss';

/**
 * Lists upcoming events for NTXFIT
 */
const PastEvents = () => (
  <div className="upcoming-events event-list">
    <div className="section">
      <h2>Past Events</h2>
      <SectionBox>
        <p className="quiet">Unable to fetch past events.</p>
      </SectionBox>
    </div>
  </div>
);

export default PastEvents;
