/* eslint-disable max-len */
import React from 'react';
import '../../styles/home/about.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * About section
 */
const About = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="about">
      <div className={`section ${isMobile ? 'mobile' : ''}`}>
        <img src={require('../../images/baseball-glove.png')} alt="family" />
        <div className="content">
          <h2>We Value Families</h2>
          <p>As professionals working with families, we know it is difficult for parents and children during separation and divorce.  Each professional in NTXFIT is an expert in parent functioning and the emotional functioning of parents and children.  Each professional in NTXFIT is an independent practitioner who relies on relevant research and best practices and standards specializing in serving different roles to benefit families that include:</p>
          <ul>
            <li>Child Custody Evaluations</li>
            <li>Psychological Evaluations</li>
            <li>Reunification Therapy</li>
            <li>Court-ordered counseling</li>
            <li>Parent Facilitation</li>
            <li>Collaborative Divorce Services</li>
            <li>Reviewing Testifying Expert</li>
            <li>Expert Witness Services</li>
            <li>Forensic Consultation for Attorneys</li>
          </ul>
        </div>
      </div>

      <div className={`section flip ${isMobile ? 'mobile' : ''}`}>
        <img src={require('../../images/baseball-glove.png')} alt="experience" />
        <div className="content">
          <h2>Experience Matters</h2>
          <p>Each of the professionals in NTXFIT is highly trained and experienced in working with families involved in litigation.   Individuals in NTXFIT contribute to the knowledge base of other mental health providers and family law attorneys by publishing in peer-reviewed literature, speaking at national conferences, training other providers locally, television news interviews, and serving as a resource for other professionals.  Each professional in NTXFIT demonstrates integrity, compassion, and leadership in the DFW community and to the profession of mental health providers.</p>
        </div>
      </div>

      <div className={`section ${isMobile ? 'mobile' : ''}`}>
        <img src={require('../../images/baseball-glove.png')} alt="baseball glove" />
        <div className="content">
          <h2>Why We Created NTXFIT</h2>
          <p>A limited number of professionals gathered to serve as resources to each other and to the professional community to contribute to the expertise in the field of family law litigation as mental health professionals.   As leaders teaching others how to do forensic work, NTXFIT continues to offer twice a year advanced trainings to encourage other mental health professionals to accept cases involving litigation.   We also encourage other professionals to form their own organizations for similar purpose as has been done by a group of professionals who formed THETAFF.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
