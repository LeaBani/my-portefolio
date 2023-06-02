import './style.scss';

import AnimatedText from './AnimatedText';

import { Link } from 'react-router-dom';

import dataFrontend from '../../data/data'

function Content({isDark}) {

  const frontendData = dataFrontend.filter(elem => elem.type === "frontend");
  const backendData = dataFrontend.filter(elem => elem.type === "backend");
  const devopsData = dataFrontend.filter(elem => elem.type === "devops");
   
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

        <h5 className="Content-icon-subtitle"># Backend</h5>

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

        <h5 className="Content-icon-subtitle"># Devops</h5>

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



    </div>
  );
}

export default Content;
