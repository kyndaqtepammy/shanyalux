import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

/**
* @author
* @function ContactForm
**/

const ContactForm = (props) => {
  return(
    <div>
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Your Name
                </Form.Label>
                <Col sm={8}>
                <Form.Control type="text" placeholder="Your Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={8}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>
            
            <Form.Group  as={Row} controlId="exampleForm.ControlTextarea1">
                <Form.Label column sm={2}>Your message</Form.Label>
                <Col sm={8}>
                <Form.Control as="textarea" rows="12" />
                </Col>
            </Form.Group>
        </Form>
    </div>
   )

 }

export default ContactForm