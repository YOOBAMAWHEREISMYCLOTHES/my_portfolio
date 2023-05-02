import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardSubtitle, CardLink, CardTitle } from 'reactstrap';
import firstproject from '../../assets/images/project1.jpg';
import secondproject from '../../assets/images/project2.jpg';
import thirdproject from '../../assets/images/project3.jpg';
import fourthproject from '../../assets/images/project4.jpg';
import './projects.css';


const Projects = () => {
  return (
    <Container className='cards'>
    <Card className='card'
  style={{
    width: '18rem'
  }}
>
  <CardBody className='card-body'>
    <CardTitle className='card-title' tag="h5">
      Restaurant site
    </CardTitle>
    <CardSubtitle
      className="card-subtitle mb-2 text-muted"
      tag="h6"
    >
      React.js, CSS3
    </CardSubtitle>
  </CardBody>
  <img
  className='card-img'
    alt="Card cap"
    src={firstproject}
    width="100%"
  />
  <CardBody className='body-links'>
    <CardText className='card-text'>
      This site was my diploma project task, I have made it for 2 months. It have a different sections with products filtrations and forms.
    </CardText>
    <CardLink className='link-deploy' href="https://yoobamawhereismyclothes.github.io/diploma_site5/#">
      Show Deploy <i class="ri-external-link-line"></i>
    </CardLink>
    <CardLink className='link-github' href="https://github.com/YOOBAMAWHEREISMYCLOTHES/diploma_site5">
    Show Repo <i class="ri-external-link-line"></i>
    </CardLink>
  </CardBody>
</Card>

<Card className='card'
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Little lemon webpage
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      HTML5, CSS3
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={secondproject}
    width="100%"
  />
  <CardBody className='body-links'>
    <CardText>
      My first serious html and css webpage. It was one of tasks on Coursera, this page is fully responsive and looks like original in task.
    </CardText>
    <CardLink className='link-deploy' href="https://yoobamawhereismyclothes.github.io/little_lemon_restaurant/">
    Show Deploy <i class="ri-external-link-line"></i>
    </CardLink>
    <CardLink className='link-github' href="https://github.com/YOOBAMAWHEREISMYCLOTHES/little_lemon_restaurant">
    Show Repo <i class="ri-external-link-line"></i>
    </CardLink>
  </CardBody>
</Card>

<Card className='card'
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Responsive webpage
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      HTML5, CSS3
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={thirdproject}
    width="100%"
  />
  <CardBody className='body-links'>
    <CardText>
      This page was one of tasks on Coursera, made on pure html and css, without any frameworks like bootstrap.
    </CardText>
    <CardLink className='link-deploy' href="https://yoobamawhereismyclothes.github.io/coursera-week-3-solution/">
    Show Deploy <i class="ri-external-link-line"></i>
    </CardLink>
    <CardLink className='link-github' href="https://github.com/YOOBAMAWHEREISMYCLOTHES/coursera-week-3-solution">
    Show Repo <i class="ri-external-link-line"></i>
    </CardLink>
  </CardBody>
</Card>

<Card className='card'
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Test page
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      GitHub pages
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={fourthproject}
    width="100%"
  />
  <CardBody >
    <CardText>
      Just a testing page, hosted on GitHub pages. I have made it during training of using GitHub, nothing unusual.
    </CardText>
    <CardLink className='link-deploy' href="https://yoobamawhereismyclothes.github.io/coursera-test/">
    Show Deploy <i class="ri-external-link-line"></i>
    </CardLink>
    <CardLink className='link-github' href="https://github.com/YOOBAMAWHEREISMYCLOTHES/coursera-test">
      Show Repo <i class="ri-external-link-line"></i>
    </CardLink>
  </CardBody>
</Card>
</Container>
  )
}

export default Projects;