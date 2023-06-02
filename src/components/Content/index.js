import './style.scss';

import AnimatedText from './AnimatedText';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import skillsData from '../../data/skillsData';
import projectsData from '../../data/projectsData';

function Content({isDark}) {

  const frontendData = skillsData.filter(elem => elem.type === "frontend");
  const backendData = skillsData.filter(elem => elem.type === "backend");
  const devopsData = skillsData.filter(elem => elem.type === "devops");

  const mainProjects = projectsData.filter(elem => elem.main === true);
   
  return (
    <div className="Content">

        <AnimatedText isDark={isDark} text="&#60; Hello World /&#62;"/>

        <h2 className="Content-description">Here I am, Lea, Web Developper. Have a look on my Projects, and my Resume. 
        I would be happy to get in touch with you to share my experience !</h2>

        <h3 className="Content-question">How did I get to Web Developpement ?</h3>

        <h4 className="Content-question"><Link to="/my-resume"># Check my full Resume</Link></h4>

        <h4 className="Content-question"># My skills</h4>

        <div className='Content-icon'>

        <h5 className="Content-icon-subtitle">## Frontend</h5>
        <div className='Content-icon-part'>
        {frontendData.map((elem) => 
        <div className='Content-icon-section' key={elem.id}>
        <div className='Content-icon-item'>
          <div className='Content-icon-item-body'>
            <div className='Content-icon-item-title'>{elem.title}</div>
          </div>
          <img alt="stack" key={elem.id} variant="bottom" src={elem.image} className='Content-icon-item-image'/>
        </div>
        </div>
        )}
        </div>

        <h5 className="Content-icon-subtitle">## Backend</h5>

        <div className='Content-icon-part'>
        {backendData.map((elem) => 
        <div className='Content-icon-section' key={elem.id}>
        <div className='Content-icon-item'>
          <div className='Content-icon-item-body'>
            <div className='Content-icon-item-title'>{elem.title}</div>
          </div>
          <img alt="stack" key={elem.id} variant="bottom" src={elem.image} className='Content-icon-item-image'/>
        </div>
        </div>
        )}
        </div>

        <h5 className="Content-icon-subtitle">## Devops</h5>

        <div className='Content-icon-part'>
        {devopsData.map((elem) => 
        <div className='Content-icon-section' key={elem.id}>
        <div className='Content-icon-item'>
          <div className='Content-icon-item-body'>
            <div className='Content-icon-item-title'>{elem.title}</div>
          </div>
          <img alt="stack" key={elem.id} variant="bottom" src={elem.image} className='Content-icon-item-image'/>
        </div>
        </div>
        )}
        </div>

        </div>


        <h4 className="Content-question"><Link to="/projects"># My projects</Link></h4>

        <h5 className="Content-question">You can find more of my code on my GitHub account and on my projects page.</h5>


        {mainProjects.map((elem, index) =>
          <Card key={elem.id} className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
              <Card.Img className="Projects-card-img" variant="top" src={elem.image} alt={elem.title} />
              <Card.Body>
                  <Card.Title as={Link} to={elem.link} className='Projects-card-title'># {index+1} {elem.title}</Card.Title>
                  <Card.Text className='Projects-card-text'>
                      {elem.description}
                          <span className='Projects-card-label'>
                          {elem.tags.map((item, index) => 
                              <Badge key={index} className="Projects-card-label-one" bg="secondary">
                                  {item}
                              </Badge>
                          )}

                          </span>
                  </Card.Text>
                      <Button variant="primary" className="Projects-card-button" as={Link} to={elem.repo}>Got to repository</Button>
              </Card.Body>
          </Card>
        
        )}
        
    </div>
  );
}

export default Content;
