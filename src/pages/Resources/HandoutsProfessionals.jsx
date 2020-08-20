import React from 'react';
import SectionBox from '../../components/SectionBox';
import '../../styles/resources/content.scss';
import Header from '../../components/Header';

/**
 * Content item for resources
 */
const HandoutsProfessionals = () => (
  <div>
    <Header short backgroundImage={require('../../images/red-pen-glasses.jpg')} backgroundPosition="center 32%">
      <h1>Handouts for Professionals</h1>
    </Header>
    <div className="resources-content content-item">
      <SectionBox>
        <ul>
          <li><a href="/documents/Communicating_with_your_evaluator.pdf" target="_blank" rel="noopener noreferrer">Attorney/Custody Evaluator Communications</a></li>
          <li><a href="/documents/Considering_a_mental_health_professional.pdf" target="_blank" rel="noopener noreferrer">Considering a Mental Health Professional?</a></li>
          <li><a href="/documents/Therapy_Records_Request.pdf" target="_blank" rel="noopener noreferrer">Records Requests</a></li>
          <li><a href="/documents/Custody_Recommendations.pdf" target="_blank" rel="noopener noreferrer">Therapists and Custody Recommendations</a></li>
          <li><a href="/documents/Eliminating_parenting_time_recommendations_from_therapy_reports.pdf" target="_blank" rel="noopener noreferrer">Advice on Recommendations Therapists Can Make</a></li>
        </ul>
      </SectionBox>
    </div>
  </div>
);

export default HandoutsProfessionals;
