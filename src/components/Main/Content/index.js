import './style.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect } from 'react';
import {
  motion,
  useAnimation,
} from "framer-motion";
import { useInView } from 'react-intersection-observer';

import AnimatedText from './AnimatedText';
import { Link } from 'react-router-dom';

function Content() {

    // card animation
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2,  bounce: 0.5,
                }
            });
        }
        if (!inView) {
            animation.start({x: '-100vw'})
        }

    },[inView, animation]);
    
  return (
    <div className="Content">

        <AnimatedText text="&#60; Hello World /&#62;"/>

        <h2 className="Content-description">Here I am, Lea, brand new Web Developper. Have a look on my Projects, and my Resume. 
        I would be happy to get in touch with you to share my experience</h2>

        <h3 className="Content-question">How did I get to Web Developpement ?</h3>
        <div className="Content-experience" ref={ref}>
        <motion.div 
            className="Content-experience-list"
            animate={animation}
        >
        <Card className="Content-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>February - March 2023</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ReactJS Developper | @Homeoffice</Card.Subtitle>
                <Card.Text>
                "Fit Work": Application concerning best practise at work 
                Build this application from scratch of an MVP with Agile method.
                Responsible of the good implementation, Pull Request and Code Review. 
                </Card.Text>
                    <Button className="button" as={Link} to="https://fitwork-app.netlify.app">Got to Project</Button>
            </Card.Body>
        </Card>

                <Card className="Content-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2020 - 2022</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Project Manager | @Lidl Headquarter</Card.Subtitle>
                <Card.Text>
                <li>Logistics planning of orders and deliveries at national level</li>
                <li>Knowledge of logistics processes (truck filling, optimization of logistics routes).</li>
                <li>Supplier care and close communication with purchasing department </li>
                <li>Team Management</li>
                <li>Project Management & analytics</li>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        
        <Card className="Content-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2015 - 2019</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Manager | @Lidl Warehouse</Card.Subtitle>
                <Card.Text>
                <li>Daily supplier orders, trend calculation, sales forecast, Stores openings support, inventory control</li>
                <li>External Storage Organisation"</li>
                <li>Maintenance of stocks in an external warehouse for sensitive products: fruits, vegetables and flowers (90 stores)</li>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card  className="Content-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2013 - 2014</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Assistant | @Lidl Headquarter</Card.Subtitle>
                <Card.Text>
                <li>Processes Translations</li>
                <li>Organization of seminars</li>
                <li>Daily communication sheet preparation from the Headquarter to the 25 french Warehouses</li>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card className="Content-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2010 - 2013</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fast Food | Employee | @McDonald's</Card.Subtitle>
                <Card.Text>
                <li>Processes Translations</li>
                <li>Organization of seminars</li>
                <li>Daily communication sheet preparation from the Headquarter to the 25 french Warehouses</li>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        <Card  className="Content-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2013</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Marketing | Internship | @France Plongée, Thailand</Card.Subtitle>
                <Card.Text>
                <li>Processes Translations</li>
                <li>Organization of seminars</li>
                <li>Daily communication sheet preparation from the Headquarter to the 25 french Warehouses</li>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card className="Content-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2012</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Assistant | @Otto Bock</Card.Subtitle>
                <Card.Text>
                <li>Processes Translations</li>
                <li>Organization of seminars</li>
                <li>Daily communication sheet preparation from the Headquarter to the 25 french Warehouses</li>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        </motion.div>
        </div>
    </div>
  );
}

export default Content;
