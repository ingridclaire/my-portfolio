import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import { Button, Form } from 'react-bootstrap';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <FormContainer className="portfolio-container">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Button type='submit' className="variant mx-auto" style={{display: 'block'}}>
          <i className="fas fa-paper-plane"></i>
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Contact;