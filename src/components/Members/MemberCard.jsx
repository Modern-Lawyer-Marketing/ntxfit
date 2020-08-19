import React from 'react';
import '../../styles/members/member-card.scss';

/**
 * About section
 */
const MemberCard = ({ name, image, license, email, website, phone, services }) => (
  // <div>
  <div className="member-card">
    <div className="image" style={{ backgroundImage: `url(${image})` }} />
    <div className="content">
      <h3>{name}</h3>
      <p>{license}</p>
      <p><a href={`https://${website}`}>{website}</a></p>
      <p><a href={`mailto:${email}(${name})`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone.replace(/[-\s]/g, '')}`}>{phone}</a></p>
      <p>Services:</p>
      <ul className="services">
        {services.map((val) => (<li>{val}</li>))}
      </ul>
    </div>
  </div>
  // </div>
);

export default MemberCard;
