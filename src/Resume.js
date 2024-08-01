import React from 'react';
import './Resume.css';
import { Tabs, Tab } from 'react-bootstrap';

// Sample images (replace with your actual images)
import wordpressImg from './assets/wordpress.png';
import ecommerceImg from './assets/e-commerce.jpg';
import illustratorImg from './assets/AI.jpg';
import photoshopImg from './assets/Photoshop.png';
import corelDrawImg from './assets/corel draw.jpg';
import smmImg from './assets/ssm.jpg';

function Resume() {
    return (
      <div className="resume-section" id='action4'>
        <h2 className="resume-title">Experience and Education</h2>
        <div className="resume-content">
          {/* Skills Section */}
          <div className="skills-container">
            <div className="skills-grid">
              <div className="skill-box">
                <img src={wordpressImg} alt="WordPress" />
                <p className="skill-title">WordPress</p>
              </div>
              <div className="skill-box">
                <img src={ecommerceImg} alt="eCommerce" />
                <p className="skill-title">eCommerce</p>
              </div>
              <div className="skill-box">
                <img src={illustratorImg} alt="Adobe Illustrator" />
                <p className="skill-title">Adobe Illustrator</p>
              </div>
              <div className="skill-box">
                <img src={photoshopImg} alt="Photoshop" />
                <p className="skill-title">Photoshop</p>
              </div>
              <div className="skill-box">
                <img src={corelDrawImg} alt="Corel Draw" />
                <p className="skill-title">Corel Draw</p>
              </div>
              <div className="skill-box">
                <img src={smmImg} alt="SMM" />
                <p className="skill-title">SMM</p>
              </div>
            </div>
          </div>
  
          {/* Experience and Education Tabs */}
          <div className="tabs-container">
            <Tabs defaultActiveKey="experience" id="resume-tabs">
              <Tab eventKey="experience" title="Experience">
                <div className="experience-list">
                  <div className="experience-item">
                    <h3>Wireless Telecom Services</h3>
                    <p>IT Operations</p>
                    <p>2 Years</p>
                    <p>Running</p>
                  </div>
                  <div className="experience-item">
                    <h3>Shreenaari Pvt. Ltd.</h3>
                    <p>Manager Operations</p>
                    <p>2 Years</p>
                    <p>Aug 2020 - May 2022</p>
                  </div>
                  <div className="experience-item">
                    <h3>Avacend Solutions Pvt Ltd.</h3>
                    <p>Graphic Designer</p>
                    <p>5 Years</p>
                    <p>Mar 2015 - Mar 2020</p>
                  </div>
                  <div className="experience-item">
                    <h3>Magic Square Entertainment Pvt Ltd.</h3>
                    <p>Graphic Designer</p>
                    <p>10 Months</p>
                    <p>Jan 2014 - Oct 2014</p>
                  </div>
                  <div className="experience-item">
                    <h3>Digital Dream Post</h3>
                    <p>Roto Artist</p>
                    <p>7 Months</p>
                    <p>Jan 2013 - Aug 2013</p>
                  </div>
                  {/* Add more experience items as needed */}
                </div>
              </Tab>
              <Tab eventKey="education" title="Education">
                <div className="education-list">
                  <div className="education-item">
                    <h3>B.SC Visual Communication</h3>
                    <p>Madras University</p>
                    <p>2007 - 2010</p>
                  </div>
                  <div className="education-item">
                    <h3>Diploma in Multimedia Design</h3>
                    <p>Raffles College Hong Kong</p>
                    <p>2010 - 2012</p>
                  </div>
                  {/* Add more education items as needed */}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;