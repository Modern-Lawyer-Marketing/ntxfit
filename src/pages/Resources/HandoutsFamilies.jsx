import React from 'react';
import SectionBox from '../../components/SectionBox';
import '../../styles/resources/content.scss';
import Header from '../../components/Header';

/**
 * Content item for resources
 */
const HandoutsFamilies = () => (
  <div>
    <Header short backgroundImage={require('../../images/families.jpg')} backgroundPosition="center 60%">
      <h1>Handouts for Families</h1>
    </Header>
    <div className="resources-content content-item">
      <SectionBox>
        <ul>
          <li><a href="https://www.afccnet.org/Portals/0/Representing%20Yourself%20Judges%20Perspective.pdf" target="_blank" rel="noopener noreferrer">Representing Yourself in Court: A Brief Guide from a Judge's Perspective</a></li>
          <li><a href="https://www.afccnet.org/Portals/0/Representing%20Yourself%20Mediation.pdf" target="_blank" rel="noopener noreferrer">A Brief Guide to Family Mediation for Parents who are Self-Represented</a></li>
          <li><a href="https://www.afccnet.org/Portals/0/Center%20for%20Excellance/A%20Guide%20for%20Consumers.pdf?ver=2015-10-26-135032-000" target="_blank" rel="noopener noreferrer">Unbundling Legal Services: A Guide for Parents Seeking Affordable Legal Assistance in Family Separation Cases</a></li>
          <li><a href="https://www.afccnet.org/services/AFCC-Family-Court-Services-Resource-Guide" target="_blank" rel="noopener noreferrer">AFCC Family Court Services Resource Guide</a></li>
          <li><a href="http://www.uptoparents.org/" target="_blank" rel="noopener noreferrer">UpToParents.org</a></li>
          <li><a href="http://www.familieschange.ca/" target="_blank" rel="noopener noreferrer">Familieschange.ca</a></li>
          <li><a href="https://www.afccnet.org/Portals/0/PDF/AzAFCC%20Coparenting%20Communication%20Guide.pdf" target="_blank" rel="noopener noreferrer">Co-Parenting Communication Guide</a></li>
          <li><a href="https://www.afccnet.org/LinkClick.aspx?fileticket=NTHeB-LRnw0%3d&tabid=133&portalid=0&mid=815" target="_blank" rel="noopener noreferrer">Parenting Plan Guide</a></li>
          <li><a href="https://www.afccnet.org/LinkClick.aspx?fileticket=EjftiZ6razs%3d&tabid=133&portalid=0&mid=815" target="_blank" rel="noopener noreferrer">Parenting Plan Template</a></li>
          <li><a href="https://www.afccnet.org/LinkClick.aspx?fileticket=D6sRSjcXjak%3d&tabid=133&portalid=0&mid=815" target="_blank" rel="noopener noreferrer">Child-Focused Parenting Time Guide</a></li>
          <li><a href="https://www.azcourts.gov/portals/31/parentingTime/PPWguidelines.pdf" target="_blank" rel="noopener noreferrer">Planning for Parenting Time</a></li>
          <li><a href="http://www.mass.gov/courts/docs/courts-and-judges/courts/probate-and-family-court/afccsharedparenting.pdf" target="_blank" rel="noopener noreferrer">Planning for Shared Parenting</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/1/mid/860" target="_blank" rel="noopener noreferrer">FAQs Parents Ask about Separation, Divorce and Child Custody</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/2/mid/860" target="_blank" rel="noopener noreferrer">FAQs Separating and Divorcing Parents Ask about Legal Matters</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/3/mid/860" target="_blank" rel="noopener noreferrer">A Guide for Joint Custody and Shared Parenting</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/12/mid/860" target="_blank" rel="noopener noreferrer">A Guide for Stepparents</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/4/mid/860" target="_blank" rel="noopener noreferrer">Understanding Your Child’s Needs: Information for Never-Married Parents</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/5/mid/860" target="_blank" rel="noopener noreferrer">Is Mediation for Us?</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/6/mid/860" target="_blank" rel="noopener noreferrer">Making your Parenting Plan Work</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/7/mid/860" target="_blank" rel="noopener noreferrer">My Mom and Dad Are Getting a Divorce!</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/8/mid/860" target="_blank" rel="noopener noreferrer">Parents Are Forever</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/9/mid/860" target="_blank" rel="noopener noreferrer">Preparing for your Custody Evaluation</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/10/mid/860" target="_blank" rel="noopener noreferrer">Understanding the Parenting Coordination Process</a></li>
          <li><a href="https://www.afccnet.org/Resource-Center/Resources-for-Families/ctl/ViewPamphlet/PamphletID/11/mid/860" target="_blank" rel="noopener noreferrer">When Parents Relocate: Moving Away and Long-Distance Parenting</a></li>
        </ul>
      </SectionBox>
    </div>
  </div>
);

export default HandoutsFamilies;
