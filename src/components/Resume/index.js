import './style.scss';

import profile from '../../assets/image/profile.jpg';
import github from '../../assets/image/github.png';
import linkedin from '../../assets/image/linkedin.png';
import twitter from '../../assets/image/twitter.png';
import insta from '../../assets/image/insta.png';

import cvEnglish from '../../assets/cv/Lea-Bani-CV-2023-en.pdf';
import cvFrench from '../../assets/cv/Lea-Bani-CV-2023-fr.pdf';

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

import fileDownload from 'js-file-download';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Experience from './Experience';

function Resume() {

  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  return (
    <div className="Resume">
    <h1 className='Resume-title'>My Resume</h1>

    <Image className='Resume-image' src={profile} thumbnail="true" roundedCircle="true" alt='my profile image'/>

    <div className='Resume-icon'>
    <Link to='https://github.com/LeaBani'><Image className='Resume-icon-item' src={github} roundedCircle="true" alt='github-logo'/></Link> 
    <Link to='https://www.linkedin.com/in/lea-bani/'><Image className='Resume-icon-item' src={linkedin} roundedCircle="true" alt='linkedin-logo'/></Link>
    <Link to='https://twitter.com/leabani7'><Image className='Resume-icon-item' src={twitter} roundedCircle="true" alt='twitter-logo'/></Link>
    <Link to='https://www.instagram.com/lea_laila91940/'><Image className='Resume-icon-item' src={insta} roundedCircle="true" alt='insta-logo'/></Link>
    </div>

    <div className='Resume-list'>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>My experience as Web Developper</Accordion.Header>
        <Accordion.Body>
        I started an apprenticeship on September 26th, 2022 so that I learnt the basics of web  development. During 5 months, we used different tools and programming languages to learn development: VSCode, Git, HTML, CSS, JavaScript, NodeJS/Express, PostgreSQL and ReactJS.
        At the end of this full-time training, we build during one month with our team an App (Minimum Viable Product) in Agile method with ReactJS. The training ends on March 2023.
        We also covered the basics in SQL and NoSQL (as MongoDB). I am learning fast, and I love being confronted to new challenges! I am currently working on sides projects with differents kind of technologies. Visit my Git Hub profile! 
        I started my professional retraining to give a new impetus to my career.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My experience as Supply Chain Associate</Accordion.Header>
        <Accordion.Body>
        I accepted my first permanent position at Lidl France in 2013 after my first studies in International Business. Lidl provides the highest quality fresh produce, meat, bakery items and a wide array of household products at unbelievably low prices around the world. I was feeling comfortable and welcome in this company so I seize the opportunities that I had there to improve my skills in the Logistics/Supply Chain management area.
        In the warehouse (2015-2019), I experienced the operational side of the supply chain. We also had to maintain a new outdoor warehouse for fruit and vegetables, it was a great project. That was my first experience in projects management and I reinforced this after as a supply chain project planner (cross-docks, relocations, etc.).
        I love conducting analysis and developing tools. As a project manager in the Supply Chain (2020-2022), I developed several projects with my team using Excel.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My experience as Supply Chain/Project Manager</Accordion.Header>
        <Accordion.Body>
        In July 2022 I was also a participant of an international project "Transparency of goods availability" as a pilot country.
        As a manager, I always wanted our team to function together and that each employee feels listened to by the manager. Organization was our keyword and I learned how to rule and gather a team.
        I currently live in France, but I have exchanged good practices with other countries several times at Lidl and I am used to foreign languages. I am learning fast, and I like to try new challenges. 
        My motivation for web/app development came because I wanted to create tools, solve problems with IT solutions. I experience this in my apprenticeship, and I loved it! 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>

    <Experience />
    
    <div className='Resume-end'>
    If you have any questions, please feel free to get in touch,
    I am looking forward to your feedback!
    </div>

    <div className='Resume-download'>
    <div className='Resume-download-item'>Download full Resume in french</div>
    <Button variant="outline-primary" onClick={() => handleClick(cvFrench, 'CV-Lea-Bani-FR.pdf')}>Download</Button>

    <div className='Resume-download-item'>Download full Resume in english</div>
    <Button variant="outline-primary" onClick={() => handleClick(cvEnglish, 'CV-Lea-Bani-EN.pdf')}>Download</Button>
    </div>
    </div>
  );
}

export default Resume;
