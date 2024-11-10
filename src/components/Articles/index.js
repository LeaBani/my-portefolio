import './style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

// import { FaHeart } from 'react-icons/fa';

import articlesData from '../../data/articlesData';

function Articles() {

  return (
    <div className="Articles">

    <h1 className='Articles-title'>My Articles</h1>

    <div className='Articles-list'>

    {articlesData.map((elem, index) =>

    <Card key={elem.id} style={{ marginBottom: '5rem' }}>
      <Card.Header ># {index+1}</Card.Header>
      <Card.Body>
        <Card.Title as={Link} to={elem.link}>{elem.title}</Card.Title>
        <Card.Text>
        {elem.description}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/article/${elem.id}`}>Go somewhere</Button>
      </Card.Body>
    </Card>

    )}

        </div>

    </div>
  );
}

export default Articles;
