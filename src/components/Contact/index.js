import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';

/* eslint-disable react/jsx-no-bind */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './style.scss';

import profile from '../../assets/image/profile.jpg';
import { Image } from 'react-bootstrap';

function Contact() {
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
      `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`,
    )
      .then((result) => {
        setSuccess(true);
        console.log(result.text);
        console.log('message sent');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="Contact">

    <h1 className="Contact-title">Contact me!</h1>

      { !success && (
      <Form className="Contact-form" ref={form} onSubmit={sendEmail}>

        <Form.Group
          className="mb-3"
          controlId="namearea"
        >
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="name" name="user_name" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="emailarea"
        >
          <Form.Label>Your Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="user_email" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="textarea"
        >
          <Form.Label>Write your message here !</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" />
        </Form.Group>

        <Button variant="primary" type="submit" value="Send">
          Send
        </Button>
      </Form>
      )}
      { success
        && (
            <Alert transition="fade" variant="primary" className="Contact-alert" >
                <Alert.Heading>Thank you for your message, I will recontact you as soon as possible!</Alert.Heading>
                <Image className="Contact-image" roundedCircle="true" thumbnail="true" src={profile}/>
            </Alert>
        )}
    </div>
  );
}

export default Contact;
