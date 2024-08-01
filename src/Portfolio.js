import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Card } from 'react-bootstrap';
import './Portfolio.css'; // Ensure the path is correct

// Sample images (replace with your actual images)
import photoshopImg1 from './assets/photoshop1.jpg';
import photoshopImg2 from './assets/photoshop2.jpg';
import illustratorImg1 from './assets/illustrator1.jpg';
import illustratorImg2 from './assets/illustrator2.jpg';
import graphicDesignImg1 from './assets/graphic1.jpg';
import graphicDesignImg2 from './assets/graphic2.jpg';
import digitalMarketingImg1 from './assets/digital1.jpg';
import digitalMarketingImg2 from './assets/digital2.jpg';

function Portfolio() {
  const [key, setKey] = useState('all');

  const projects = {
    all: [
      { img: photoshopImg1, title: 'Photoshop Design' },
      { img: photoshopImg2, title: 'Photoshop Design' },
      { img: illustratorImg1, title: 'Illustrator Design' },
      { img: illustratorImg2, title: 'Illustrator Design' },
      { img: graphicDesignImg1, title: 'Graphic Design' },
      { img: graphicDesignImg2, title: 'Graphic Design' },
      { img: digitalMarketingImg1, title: 'Digital Marketing' },
      { img: digitalMarketingImg2, title: 'Digital Marketing' },
    ],
    photoshop: [
      { img: photoshopImg1, title: 'Photoshop Design' },
      { img: photoshopImg2, title: 'Photoshop Design' },
    ],
    illustrator: [
      { img: illustratorImg1, title: 'Illustrator Design' },
      { img: illustratorImg2, title: 'Illustrator Design' },
    ],
    graphic: [
      { img: graphicDesignImg1, title: 'Graphic Design' },
      { img: graphicDesignImg2, title: 'Graphic Design' },
    ],
    digital: [
      { img: digitalMarketingImg1, title: 'Digital Marketing' },
      { img: digitalMarketingImg2, title: 'Digital Marketing' },
    ],
  };

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <Tabs
        id="portfolio-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 portfolio-tabs"
      >
        <Tab eventKey="all" title="All">
          <PortfolioGrid projects={projects.all} />
        </Tab>
        <Tab eventKey="photoshop" title="Photoshop Design">
          <PortfolioGrid projects={projects.photoshop} />
        </Tab>
        <Tab eventKey="illustrator" title="Illustrator Design">
          <PortfolioGrid projects={projects.illustrator} />
        </Tab>
        <Tab eventKey="graphic" title="Graphic Design">
          <PortfolioGrid projects={projects.graphic} />
        </Tab>
        <Tab eventKey="digital" title="Digital Marketing">
          <PortfolioGrid projects={projects.digital} />
        </Tab>
      </Tabs>
    </div>
  );
}

function PortfolioGrid({ projects }) {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="portfolio-card">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
