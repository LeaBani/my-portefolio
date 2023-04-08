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
            <Card.Title as={Link} to="https://fitwork-app.netlify.app/" className='Projects-card-title'># 1 Fit Work</Card.Title>
            <Card.Text className='Projects-card-text'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one" bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Redux
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="dark">
                        Sass
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="dark">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        NodeJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        Sqitch
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="success">
                        PostgreSQL
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
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
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Semantic UI
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="secondary">
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
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="danger">
                        Prop-types
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="info">
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
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Framer Motion
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Vite
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="danger">
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
