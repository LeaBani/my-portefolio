import './style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import fitwork from '../../assets/image/fitwork.png';
import searchprofile from '../../assets/image/searchprofile.png';

function Projects() {
  return (
    <div className="Projects">
    
    <h1 className='Projects-title'>Projects</h1>

    <div className='Projects-list'>
        <Card className='Projects-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={fitwork} />
            <Card.Body>
            <Card.Title># 1 Fitwork</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge bg="primary">
                        React
                    </Badge>
                    <Badge bg="primary">
                        Redux
                    </Badge>
                    <Badge bg="primary">
                        Sass
                    </Badge>
                    <Badge bg="primary">
                        Bootstrap
                    </Badge>
                    <Badge bg="primary">
                        NodeJS
                    </Badge>
                    <Badge bg="primary">
                        Sqitch
                    </Badge>
                    <Badge bg="primary">
                        PostgreSQL
                    </Badge>
                    <Badge bg="primary">
                        Express
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary">Got to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={searchprofile} />
            <Card.Body>
            <Card.Title># 2 GitHub Search Profile</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge bg="primary">
                        React
                    </Badge>
                    <Badge bg="primary">
                        Semantic UI
                    </Badge>
                    <Badge bg="primary">
                        API
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
            <Card.Title># 3 Converter</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <span className='Projects-card-label'>
                    <Badge bg="primary">
                        React
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary">Go to repository</Button>
            </Card.Body>
        </Card>
        </div>

    </div>
  );
}

export default Projects;
