import './style.scss';

import AnimatedText from './AnimatedText';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import data from '../../data/data'

function Content({isDark}) {
   
  return (
    <div className="Content">

        <AnimatedText isDark={isDark} text="&#60; Hello World /&#62;"/>

        <h2 className="Content-description">Here I am, Lea, Web Developper. Have a look on my Projects, and my Resume. 
        I would be happy to get in touch with you to share my experience !</h2>

        <h3 className="Content-question">How did I get to Web Developpement ?</h3>

        <h4 className="Content-question"><Link to="/my-resume"># Check my Resume</Link></h4>

        <h4 className="Content-question"># My skills</h4>



        <div className='Content-icon'>
        <h5 className="Content-icon-subtitle"># Frontend</h5>


        {data.map((elem) => 
        <div className='Content-icon-section' key={elem.id}>
        <Card className='Content-icon-item'>
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
          </Card.Body>
          <Card.Img key={elem.id} variant="bottom" src={elem.image} className='Content-icon-item-image'/>
        </Card>
        </div>
        )}

        <h5 className="Content-icon-subtitle"># Backend</h5>


        <h5 className="Content-icon-subtitle"># Devops</h5>


        </div>


        <h4 className="Content-question"><Link to="/projects"># My projects</Link></h4>



    </div>
  );
}

export default Content;
