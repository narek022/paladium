import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./feedback.css"

function BasicExample() {
  return (
    <Form className="form">
        <h3>Send us your Feedback</h3>
      <Form.Group className="mb-3 name" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3 mail" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 sub" controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="/" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3 mes" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="/" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
}

export default BasicExample;
