import React from 'react';
import './info.css';
import { Col, Container, Row } from 'reactstrap';

const Info = () => {
  return (
    <Container className='info-block'>
        <Row>
            <Col className='info-content'>
            <h3>About Me</h3>
            <p className='info-paragraph1'>
            Hello, I'm Bohdan and I'm a frontend development enthusiast. I like working with React and JavaScript
            and I'm looking for opportunity to prove myself. I'm an eager learner, I constantly study throughout my life.<br/> &nbsp;
            </p>
            <p className='info-paragraph2'>
            In particular, I have self-education experience in working with React.js, which I believe is one of the most powerful and
            versatile front-end frameworks available today. With React, I am able to create dynamic, interactive user interfaces that are both elegant and highly functional.<br/> &nbsp;
            </p>
            <p className='info-paragraph3'>
            In addition to my technical skills, I am also highly communicative and collaborative. I believe that effective communication is essential for any successful project, 
            and I always strive to keep my clients and teammates in the loop throughout the development process.
            </p>
            </Col>
            <Col className='skills'>
                <h3 className='skills-title'>
                    Here are my main skills
                </h3>
            <i class="ri-html5-line"></i><i class="ri-css3-line"></i><i class="ri-javascript-line"></i><i class="ri-reactjs-line"></i><i class="ri-bootstrap-line"></i><i class="ri-npmjs-line"></i><i class="ri-github-fill"></i>
            </Col>
            <Col id='projects' className='projects-title'>
            <h1>
              My Projects
            </h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Info;