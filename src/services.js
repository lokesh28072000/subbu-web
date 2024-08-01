import React from 'react';
import './services.css';
import { FaLaptopCode, FaChartLine, FaPaintBrush } from 'react-icons/fa'; // Importing icons

function Services() {
  return (
    <div className="services-container" id='action3'>
      <h2 className="services-title">My Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <p className="service-description">
          As an e-Commerce Specialist, I will create and implement strategies & product listings that make online transactions possible. I will organize, develop, and execute website marketing plans. I am responsible for design & development of the website or portal to be well versed with networking, latest technology, programming, software development & SEO tactics to create a user friendly & SEO friendly website.          </p>
        </div>
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <p className="service-description">
          Planning and executing all web, SEO/SEM, database marketing, email, social media, and display advertising campaigns. Designing, building, and maintaining our client\'s social media presence. Measuring and reporting performance of all digital marketing campaigns and assessing against goals (ROI and KPIs).
          Building ideas, strategies, goals post analyzing the competitors and managing social media presence to increase sales, brand awareness & lead generation.
          </p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <p className="service-description">
          With the assistance of powerful images, colors and layout, I can deliver strong messages to potential customers without using lengthy paragraphs. In simplest terms, graphics can make the message clearer and straightforward.Producing a host of ideas, selecting the best ones and selling them to clients. Encouraging others to share their ideas and nurturing creativity. Communicating productively with management and clients to keep them up-to-date with project milestones. Identify strength & weakness, designing according to the expectations of the viewers..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
