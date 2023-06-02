import './style.scss';

import AnimatedText from './AnimatedText';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import skillsData from '../../data/skillsData';
import projectsData from '../../data/projectsData';

import { useInView } from 'react-intersection-observer';
import {
  motion,
  useAnimation
} from "framer-motion";
import { useEffect } from 'react';



function Content({isDark}) {

   // card animation
    const { ref, inView } = useInView();
    const animation = useAnimation();

    console.log(inView)
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'bounce', duration: 1.5,  bounce: 0.5,
                }
            });
        }
        if (!inView) {
            animation.start({x: '-100vw'})
        }
        
    },[inView, animation]);

  const frontendData = skillsData.filter(elem => elem.type === "frontend");
  const backendData = skillsData.filter(elem => elem.type === "backend");
  const devopsData = skillsData.filter(elem => elem.type === "devops");
  const microsoftData = skillsData.filter(elem => elem.type === "microsoft");

  const mainProjects = projectsData.filter(elem => elem.main === true);
   
  return (
    <div className="Content">

        <AnimatedText isDark={isDark} text="&#60; Hello World /&#62;"/>

        <p className="Content-description">Here I am, Lea, Web Developper. Have a look on my Projects, and my Resume. 
        I would be happy to get in touch with you to share my experience !</p>


        <Link to="/my-resume" className="Content-question"><h2># My Resume</h2></Link>

        <h3 className="Content-question">How did I get to Web Developpement ?</h3>

        <div>sxsfvcx</div>

        <h2 className="Content-question"># My skills</h2>

        <div className='Content-icon'>

        <h3 className="Content-icon-subtitle">## Frontend</h3>
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

        <h3 className="Content-icon-subtitle">## Backend</h3>

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

        <h3 className="Content-icon-subtitle">## DevOps</h3>

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

        <h3 className="Content-icon-subtitle">## Microsoft</h3>

        <div className='Content-icon-part'>
        {microsoftData.map((elem) => 
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


        <Link to="/projects" className="Content-question"><h2># My Projects</h2></Link>

        <h5 className="Content-question" ref={ref}>You can find more of my code on <Link as={Link} to='https://github.com/LeaBani'>my GitHub account</Link> and on <Link as={Link} to='/projects'>my projects page</Link>.</h5>

        <motion.div 
          className='Content-projects' 
          animate={animation}
          >

        {mainProjects.map((elem) =>
          <Card key={elem.id} className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
              <Card.Img className="Projects-card-img" variant="top" src={elem.image} alt={elem.title} />
              <Card.Body>
                  <Card.Title as={Link} to={elem.link} className='Projects-card-title'># {elem.title}</Card.Title>
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

        </motion.div>


        <h3 className="Content-icon-subtitle">Let's work together !</h3>

        
    </div>
  );
}

export default Content;
