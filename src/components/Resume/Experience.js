import './style.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect } from 'react';
import {
  motion,
  useAnimation,
} from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { Link } from 'react-router-dom';

import ob from '../../assets/image/work/ob.png';
import lidl from '../../assets/image/work/lidl.png';
import mcdo from '../../assets/image/work/McDo.png';

import { Image } from 'react-bootstrap';


function Experience() {

    // card animation
    const { ref, inView } = useInView();
    const animation = useAnimation();

    console.log(inView)
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
    <div className="Experience">

        <div className="Experience-experience" ref={ref}>
        <motion.div 
            className="Experience-experience-list"
            animate={animation}
        >
        <Card className="Experience-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>February - March 2023</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ReactJS Developper | Full remote</Card.Subtitle>
                <Card.Text>
                <li>"Fit Work": Application concerning best practise at work </li>
                <li>Build this application from scratch with Agile method.</li>
                <li>Responsible of the good implementation, Pull Request and Code Review. </li>
                
                
                </Card.Text>
                    <Button className="button" as={Link} to="/projects">Go to my Projects</Button>
            </Card.Body>
        </Card>

                <Card className="Experience-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2020 - 2022</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Project Manager | @Lidl Headquarter</Card.Subtitle>
                <Card.Text>
                <li>Logistics planning of orders and deliveries at national level</li>
                <li>Knowledge of logistics processes (truck filling, optimization of logistics routes).</li>
                <li>Supplier care and close communication with purchasing department </li>
                <li>Team Management</li>
                <li>Project Management & analytics</li>
                <Image className='Experience-experience-card-item' src={lidl} alt='lidl-logo'/>
                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        
        <Card className="Experience-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2015 - 2019</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Manager | @Lidl Warehouse</Card.Subtitle>
                <Card.Text>
                <li>Daily supplier orders, trend calculation, sales forecast, Stores openings support, inventory control</li>
                <li>External Storage Organisation"</li>
                <li>Maintenance of stocks in an external warehouse for sensitive products: fruits, vegetables and flowers (90 stores)</li>
                <Image className='Experience-experience-card-item' src={lidl} alt='lidl-logo'/>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card  className="Experience-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2013 - 2014</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Supply Chain | Assistant | @Lidl Headquarter</Card.Subtitle>
                <Card.Text>
                <li>Project Manager Assistant: analytics, powerpoint</li>
                <li>Processes Translations French to German/German to French</li>
                <li>Organization of seminars</li>
                <li>Daily communication sheet preparation from the Headquarter to the 25 french Warehouses</li>
                <Image className='Experience-experience-card-item' src={lidl} alt='lidl-logo'/>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card className="Experience-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2010 - 2013</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fast Food | Employee | @McDonald's</Card.Subtitle>
                <Card.Text>
                <li>Cashier and customer care</li>
                <li>Kitchen, organization, respect of the processes</li>
                <Image className='Experience-experience-card-item' src={mcdo} alt='mcdo-logo'/>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        <Card  className="Experience-experience-card" style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2013</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Marketing | Internship | @France Plongée, Thailand</Card.Subtitle>
                <Card.Text>
                <li>Looking for partnership to build the "French connexion" on the island</li>
                <li>Responsible for the shop, and material rental, customer care</li>
                <li>Work on the social medias (Facebook, Website with Wordpress)</li>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>

        <Card className="Experience-experience-card"  style={{ width: '20rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>2012</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sales | Assistant | @Otto Bock</Card.Subtitle>
                <Card.Text>
                <li>Sending orders with SAP</li>
                <li>Contact with the commercials, schedule events and meeting</li>
                <Image className='Experience-experience-card-item' src={ob} alt='otto bock -logo'/>

                </Card.Text>
                <Button className="button" as={Link} to="/my-resume">Go to Resume</Button>
            </Card.Body>
        </Card>
        </motion.div>
        </div>
    </div>
  );
}

export default Experience;
