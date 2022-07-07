import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" id="contact">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" placeholder="Message..." rows={3} />
        </Form.Group>
        <Button variant="light">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
