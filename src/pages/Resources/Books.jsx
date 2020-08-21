import React from 'react';
import SectionBox from '../../components/SectionBox';
import '../../styles/resources/content.scss';
import Header from '../../components/Header';
import About from '../../components/Resources/About';

/**
 * Content item for resources
 */
const Books = () => (
  <div>
    <Header short backgroundImage={require('../../images/book-staircase.jpg')} backgroundPosition="right 45%">
      <h1>Resources by Members of NTXFIT</h1>
    </Header>
    <About />
    <div className="resources-content content-item">
      <SectionBox>
        <ul>
          <li><a href="https://www.fletcherphd.com/reunification-therapist-training" target="_blank" rel="noopener noreferrer">Advanced Training for Reunification Therapists</a> by Susan Fletcher, PhD and Christy Bradshaw Schmidt, LPC</li>
          <li><a href="http://www.amazon.com/gp/product/1493181440/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1493181440&linkCode=as2&tag=childreinthemidd&linkId=C6BJ6HWTVZA34RLZ" target="_blank" rel="noopener noreferrer">Meet Max: Learning about Divorce from a Basset Hound's Perspective</a> by Jennifer Leister, LPC</li>
          <li><a href="http://www.amazon.com/gp/product/1499026609/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1499026609&linkCode=as2&tag=childreinthemidd&linkId=BI7R6PY24IV4RWRX" target="_blank" rel="noopener noreferrer">Max Meets Emma Learning about Blended Families from a Basset Hound's Perspective</a> by Jennifer Leister, LPC</li>
          <li><a href="http://www.texascounseling.org/articles/ASystematicApproachtoReunificationTherapy.pdf" target="_blank" rel="noopener noreferrer">A Systematic Approach to Reunification Therapy</a> by Christy Bradshaw Schmidt, LPC</li>
          <li><a href="http://www.texascounseling.org/articles/ExerptSittingIn2007_10.pdf" target="_blank" rel="noopener noreferrer">Failing to Plan is Planning to Fail</a> by Aaron Robb, PhD</li>
          <li><a href="https://www.amazon.com/Parenting-Smart-Zone-Susan-Fletcher/dp/0976032406" target="_blank" rel="noopener noreferrer">Parenting in the Smart Zone</a> by Susan Fletcher, PhD</li>
          <li><a href="https://www.amazon.com/Working-Smart-Zone-Susan-Fletcher/dp/0980096901" target="_blank" rel="noopener noreferrer">Working in the Smart Zone</a> by Susan Fletcher, PhD</li>
        </ul>
      </SectionBox>
    </div>
  </div>
);

export default Books;
