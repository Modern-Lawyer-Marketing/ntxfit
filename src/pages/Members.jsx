import React from 'react';
import Header from '../components/Header';
import MemberGrid from '../components/Members/MemberGrid';

const memberList = [
  {
    name:     'Susan Fletcher, Ph. D.',
    image:    require('../images/headshots/susan-fletcher.jpg'),
    license:  'Licensed Psychologist',
    website:  'FletcherPhD.com',
    email:    'DrFletcher@FletcherPhD.com',
    phone:    '972 612-1188',
    services: [
      'Child Custody Evaluations',
      'Psychological Evaluations',
      'Reviewing Testifying Expert',
      'Expert Witness',
      'Forensic Consultant',
      'Reunification Therapy',
      'Court-Ordered Therapy',
    ],
  },
  {
    name:     'Christy Bradshaw',
    image:    require('../images/headshots/susan-fletcher.jpg'),
    license:  'License',
    website:  'Website',
    email:    'Email',
    phone:    'Phone',
    services: [
      'Service 1',
      'Service 2',
      'Service 3',
      'Service 4',
      'Service 5',
    ],
  },
  {
    name:     'Carrie Beaird',
    image:    require('../images/headshots/susan-fletcher.jpg'),
    license:  'License',
    website:  'Website',
    email:    'Email',
    phone:    'Phone',
    services: [
      'Service 1',
      'Service 2',
      'Service 3',
      'Service 4',
      'Service 5',
    ],
  },
  {
    name:     'Christy Bradshaw',
    image:    require('../images/headshots/susan-fletcher.jpg'),
    license:  'License',
    website:  'Website',
    email:    'Email',
    phone:    'Phone',
    services: [
      'Service 1',
      'Service 2',
      'Service 3',
      'Service 4',
      'Service 5',
    ],
  },
];

/**
 * Landing page
 */
const Members = () => (
  <div className="members">
    <Header short backgroundImage={require('../images/members-header.jpg')} backgroundPosition="right">
      <h1>Who We Are</h1>
    </Header>
    <MemberGrid list={memberList} />
  </div>
);

export default Members;
