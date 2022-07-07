import React from "react";
import { Form } from "react-bootstrap";

function Contact() {
  return (
    <Form>
      <Form.Group className="mb-3" id="contact">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder="Message..." rows={3} />
      </Form.Group>
    </Form>
  );
}

export default Contact;
