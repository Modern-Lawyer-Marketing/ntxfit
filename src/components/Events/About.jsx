import React from 'react';
import '../../styles/events/event-navigation.scss';

/**
 * Member call to action
 */
const About = () => (
  <div className="events-about">
    <div className="section">
      <h2>Professional Trainings Available in February and October</h2>
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>North Texas Families in Transition provides training twice a year for professionals to encourage more trained professionals to assist families involved in litigation.</p>
      </div>
      <a href="https://northtexasfit.us3.list-manage.com/subscribe/post?u=e6981a181982f79c076ceb3b3&id=770b503343" target="_blank" rel="noopener noreferrer" className="get-notified-button button">Get Notified of Upcoming Events</a>
    </div>
  </div>
);
export default About;
