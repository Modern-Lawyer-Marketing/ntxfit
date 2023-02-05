import React from 'react';
import SectionBox from '../../components/SectionBox';
import '../../styles/resources/content.scss';
import Header from '../../components/Header';

/**
 * Content item for resources
 */
const Professionals = () => (
  <div>
    <Header short backgroundImage={require('../../images/checklist.jpg')} backgroundPosition="right">
      <h1>Professional Standards and Guidelines</h1>
    </Header>
    <div className="resources-content content-item">
      <SectionBox>
        <ul>
          <li><a href="/documents/AFCC_Guidelines_for_Parenting_Coordination_2019.pdf" target="_blank" rel="noopener noreferrer">Parenting Coordination/Facilitation</a></li>
          <li><a href="/documents/AFCC_Guidelines_for_Court_Involved_Therapy.pdf" target="_blank" rel="noopener noreferrer">Court Involved Therapy</a></li>
          <li><a href="/documents/AFCC_Guidelines_for_Parenting_Plan_Evaluations_in_Family_Law_Cases.pdf" target="_blank" rel="noopener noreferrer">Child Custody Evaluation</a></li>
          <li><a href="/documents/AFCC_Model_Standards_of_Practice_for_Family_and_Divorce_Mediation.pdf" target="_blank" rel="noopener noreferrer">Mediation</a></li>
          {/* <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/Guidelines/Supervised_Visitation_Nework-StandardsFinal7-14-06.pdf" target="_blank" rel="noopener noreferrer">Supervised Visitation</a></li> */}
        </ul>
      </SectionBox>
    </div>
  </div>
);

export default Professionals;
