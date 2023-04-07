import './style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

import fitwork from '../../assets/image/fitwork.png';
import searchprofile from '../../assets/image/searchprofile.png';

function Projects() {
  return (
    <div className="Projects">
    
    <h1 className='Projects-title'>My Projects</h1>

    <div className='Projects-list'>
        <Card className='Projects-card' style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src={fitwork} />
            <Card.Body>
            <Card.Title as={Link} to="https://fitwork-app.netlify.app/" className='Projects-card-title'># 1 Fitwork</Card.Title>
            <Card.Text className='Projects-card-text'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one" bg="primary">
                        React
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Redux
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Sass
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        NodeJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Sqitch
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        PostgreSQL
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Express
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/fit-work-front">Got to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src={searchprofile} />
            <Card.Body>
            <Card.Title as={Link} to="https://trouve-ton-profil-github.netlify.app/" className='Projects-card-title'># 2 GitHub Research</Card.Title>
            <Card.Text className='Projects-card-text'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        React
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Semantic UI
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        API
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/Trouve-ton-profil-GitHub">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
            <Card.Title as={Link} to="/" className='Projects-card-title'># 3 Converter</Card.Title>
            <Card.Text className='Projects-card-text'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        React
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Proptypes
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        POO
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/converter">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
            <Card.Title as={Link} to="/" className='Projects-card-title'># 4 My portefolio</Card.Title>
            <Card.Text className='Projects-card-text'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        React
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Framer Motion
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Vite
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        EmailJS
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/my-portefolio">Go to repository</Button>
            </Card.Body>
        </Card>

        </div>

    </div>
  );
}

export default Projects;
