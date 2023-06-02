import './style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

// import { FaHeart } from 'react-icons/fa';

import projectsData from '../../data/projectsData';

function Projects() {

  return (
    <div className="Projects">

    <h1 className='Projects-title'>My Projects</h1>

    <div className='Projects-list'>

    {projectsData.map((elem) =>

    <Card key={elem.id} className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
        <Card.Img className="Projects-card-img" variant="top" src={elem.image} alt={elem.title} />
        <Card.Body>
            <Card.Title as={Link} to={elem.link} className='Projects-card-title'># {elem.id} {elem.title}</Card.Title>
            <Card.Text className='Projects-card-text'>
                {elem.description}
                    <span className='Projects-card-label'>
                    {elem.tags.map((item) => 
                        <Badge key={item} className="Projects-card-label-one" bg="secondary">
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

    </div>
  );
}

export default Projects;
