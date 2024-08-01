import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import TwoProfilePhoto from './assets/home2.jpg'
import profilePhoto from './assets/home1.jpg'

function body() {
  return (
<>
<div>
      <div className="content-container">
        <div className="content-left">
          <h1 className="intro-text">I'm glad you're here.</h1>
          <p className="description">
            Hi I’m C. Subramanian in Professional<br />
            <span className="highlight">E-Commerce</span><br />
            <span className="highlight">Digital Marketing</span><br />
            <span className="highlight">Graphic designs</span><br />
            I'm a creative Graphic Designer based in India, and I'm very passionate and dedicated to my work.
            Solving modern problems through design. I'm a creative Graphic Designer based in India, and I'm very
            passionate and dedicated to my work. Solving modern problems through design.
          </p>
        </div>
        <div className="content-right">
          <img src={profilePhoto} alt="C. Subramanian" />
        </div>
      </div>

      <div className="new-content-container" id='action2'>
        <div className="new-content-left">
          <img src={TwoProfilePhoto} alt="C. Subramanian" />
        </div>
        <div className="new-content-right">
          <h6>About Me</h6>
          <h1>I design that help user more easily to use.</h1>
          <p className="new-description">
            An astute professional with over 7+ Years of experience in <span className="highlight">E-Commerce Portal</span>, 
            2+ Years Experience in <span className="highlight">Graphic Designing</span> & 
            <span className="highlight">Digital Marketing</span> (6 Months Experience).
          </p>
          <p className="new-description">
            Motivated and accomplished e-commerce & digital marketing expert, attentive to details with outstanding follow-through. 
            An innovative self-starter.
          </p>
          <p className="new-description">
            I am proficient in building social media connections between clients and customers. I am well-versed in managing admin 
            panels, product management, analysis, business strategies related to E-Commerce & Digital Marketing.
          </p>
          <button className='button'>Download My CV</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default body