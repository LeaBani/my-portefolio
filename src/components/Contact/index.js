import './style.scss';

import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className="Contact">
    
    <h1 className="Contact-title">Contact me !</h1>

    <Form className='Contact-form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    
    </div>
  );
}

export default Contact;
