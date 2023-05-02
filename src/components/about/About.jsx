import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from "react-animate-on-scroll";
import avatar from '../../assets/images/avatar.png';
import './about.css';

const About = () => {
  return (
    <Container>
      <Row>
      <Col lg='6' md='12'>
        <img src={avatar} className='avatar'/>
      </Col>
        <div id='about' className="about-text">
          <h2>Hello, I`m Bohdan,<br/>
          Front-End Developer</h2>
          <p>
            Explore this  page to see my skills and contact Me!
          </p>
        </div>
        <div className='contact-button'>
        <button className='btn_contact gap-3'>
        <a href='#contact'>Contact</a><i class="ri-arrow-down-double-line"></i>
        </button>
        </div>
        </Row>
    </Container>
  )
}

export default About;