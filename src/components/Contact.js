import React from "react";
import './contact.css'

import { Form, Button, Card } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <br />
          <Card.Text>
            <Form>
              <Form.Group className="mb-4" id="contact">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="First Last" />
              </Form.Group>
              <Form.Group className="mb-4" id="contact">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-4" id="contact">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="(XXX)XXX-XXXX" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message..." rows={3} />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
