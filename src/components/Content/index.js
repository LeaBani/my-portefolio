import './style.scss';

import AnimatedText from './AnimatedText';

import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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
import { useEffect, useState } from 'react';

import profile from '../../assets/image/profile.jpg';
import github from '../../assets/image/github.png';
import linkedin from '../../assets/image/linkedin.png';
import twitter from '../../assets/image/twitter.png';
import insta from '../../assets/image/insta.png';

function Content({isDark}) {

   // card animation
    const { ref, inView } = useInView();
    const animation = useAnimation();

    console.log(inView)
    useEffect(() => {
      // animation
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

      // screen size
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
        
    },[inView, animation]);

  // screen size for responsive animation
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // fetch data from file
  const frontendData = skillsData.filter(elem => elem.type === "frontend");
  const backendData = skillsData.filter(elem => elem.type === "backend");
  const devopsData = skillsData.filter(elem => elem.type === "devops");
  const dataData = skillsData.filter(elem => elem.type === "data");

  const mainProjects = projectsData.filter(elem => elem.main === true);
   
  return (
    <div className="Content">

        <AnimatedText isDark={isDark} text="Who Am I?"/>

        <p className="Content-description">Hey, I am Lea, <b>Master in Supply Chain Management</b> & <b>Bachelor in Computer Science</b> Candidate. Have a look on my Projects, and my Resume. 
        I would be happy to get in touch with you to share my experience !</p>


        <Link to="/my-resume" className="Content-question"><h2># My Resume</h2></Link>

        <Image className='Resume-image' src={profile} thumbnail="true" roundedCircle="true" alt='my profile image'/>

        <div className='Resume-icon'>
        <Link to='https://github.com/LeaBani'><Image className='Resume-icon-item' src={github} roundedCircle="true" alt='github-logo'/></Link> 
        <Link to='https://www.linkedin.com/in/lea-bani/'><Image className='Resume-icon-item' src={linkedin} roundedCircle="true" alt='linkedin-logo'/></Link>
        <Link to='https://twitter.com/leabani7'><Image className='Resume-icon-item' src={twitter} roundedCircle="true" alt='twitter-logo'/></Link>
        <Link to='https://www.instagram.com/lea_laila91940/'><Image className='Resume-icon-item' src={insta} roundedCircle="true" alt='insta-logo'/></Link>
        </div>

        <p className="Content-description">After 9 years in the supply chain management area, I realized that the field could no longer do without new technologies. I wanted to go behind the user interface and understand where all this data was coming from. That's why I decided to pursue training in computer science. I learned programming methodology, JavaScript, React.js, Node.js, PostgreSQL, and more. I adapt quickly to new environments, which is why I continued developing on my own with new technologies like Next.js, Angular, TypeScript, etc. I am sociable and enjoy interacting with others. I am always eager to learn new things and go forward for researching explanations or solutions. I have an open-minded and positive mindset in all circumstances. In 2023 - 2024, I will focus on studying. I am currently enrolled in one Master program in Supply Chain research, and one Bachelor in Computer Science. I am looking forward to apply for PhD positions, in France or overseas in the Operation Mangement field. As a profesionnal, I liked to share my experience with freshners as liked to explain and teach the complexity of Supply chain management in retail.</p>



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

        <h3 className="Content-icon-subtitle">## Data</h3>

        <div className='Content-icon-part'>
          {dataData.map((elem) => 
          <div className='Content-icon-section' key={elem.id}>
          <div className  ='Content-icon-item'>
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


          {windowWidth>600 && (
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

          )}

          {windowWidth<600 && (
        <div 
          className='Content-projects' 
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

        </div>

          )}

        <h3 className="Content-icon-subtitle">Let's work together !</h3>

        
    </div>
  );
}

export default Content;
