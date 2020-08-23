import React from 'react';
import '../../styles/members/member-card.scss';

/**
 * About section
 */
const MemberCard = ({ name, image, license, email, website, phone, services }) => (
  <div className="member-card">
    <div className="image" style={{ backgroundImage: `url(${image})` }} />
    <div className="content">
      {name && <h3>{name}</h3>}
      {license && <p>{license}</p>}
      {website && <p><a target="_blank" rel="noopener noreferrer" href={`http://${website}`}>{website}</a></p>}
      {email && <p><a href={`mailto:${email}(${name})`}>{email}</a></p>}
      {phone && <p>Phone: <a href={`tel:${phone.replace(/[-\s]/g, '')}`}>{phone}</a></p>}
      {services && (
      <>
        <p>Services:</p>
        <ul className="services">
          {services.map((val, i) => (<li key={val + i}>{val}</li>))}
        </ul>
      </>
      )}
    </div>
  </div>
);

export default MemberCard;
