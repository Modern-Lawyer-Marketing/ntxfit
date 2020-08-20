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
          <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/Guidelines/AFCCGuidelinesforParentingcoordinationnew.pdf" target="_blank" rel="noopener noreferrer">Parenting Coordination/Facilitation</a></li>
          <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/CEFCP/Guidelines%20for%20Court%20Involved%20Therapy%20AFCC.pdf" target="_blank" rel="noopener noreferrer">Court Involved Therapy</a></li>
          <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/Guidelines/ModelStdsChildCustodyEvalSept2006.pdf" target="_blank" rel="noopener noreferrer">Child Custody Evaluation</a></li>
          <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/CEFCP/ModelStandardsOfPracticeForFamilyAndDivorceMediation.pdf" target="_blank" rel="noopener noreferrer">Mediation</a></li>
          <li><a href="http://www.afccnet.org/Portals/0/PublicDocuments/Guidelines/Supervised_Visitation_Nework-StandardsFinal7-14-06.pdf" target="_blank" rel="noopener noreferrer">Supervised Visitation</a></li>
          <li><a href="http://www.cobar.org/index.cfm/ID/226/CITP/Interprofessional-Code/" target="_blank" rel="noopener noreferrer">Guidelines for attorneys and professionals from other areas working together from Colorado</a></li>
        </ul>
      </SectionBox>
    </div>
  </div>
);

export default Professionals;
