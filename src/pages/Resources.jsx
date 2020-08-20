import React from 'react';
import Header from '../components/Header';
import Content from '../components/Resources/Content';

/**
 * Landing page
 */
const Resources = () => (
  <div className="resources">
    <Header short backgroundImage={require('../images/resources-header.jpg')} backgroundPosition="50% 35%">
      <h1>Resources</h1>
    </Header>
    <Content />
  </div>
);

export default Resources;
