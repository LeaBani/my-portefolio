import { Link } from "react-router-dom";

import { Image } from "react-bootstrap";

import github from '../../assets/image/github.png';
import linkedin from '../../assets/image/linkedin.png';
import twitter from '../../assets/image/twitter.png';
import insta from '../../assets/image/insta.png';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import './style.scss';

function Footer() {
  return (
    <div className="Footer">

        <div className='Footer-icon'>
            <Link to='https://github.com/LeaBani'><FaGithub className='Resume-icon-item' src={github}/></Link> 
            <Link to='https://www.linkedin.com/in/lea-bani/'><FaLinkedin className='Resume-icon-item' src={linkedin}/></Link>
            <Link to='https://twitter.com/leabani7'><FaTwitter className='Resume-icon-item' src={twitter}/></Link>
            <Link to='https://www.instagram.com/lea_laila91940/'><FaInstagram className='Resume-icon-item' src={insta}/></Link>
        </div>

        <div className='Footer-text'>Created by Lea Bani | March 2023</div>

    </div>
  );
}

export default Footer;
