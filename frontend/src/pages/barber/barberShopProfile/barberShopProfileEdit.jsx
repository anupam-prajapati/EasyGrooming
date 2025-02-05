import React from "react";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BarberProfileEditPage = () => {
  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">
      <h3 className="mb-3 text-center text-primary"> Edit Profile </h3>
      <Row>
        <Col md={3} className="text-center">
          <Image src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" roundedCircle fluid />
        </Col>
        <Col md={9}>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="john.doe@example.com" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="+1234567890" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex align-items-end">
                <Button variant="outline-success" size="sm">Change Password</Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="123 Main Street" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="nation">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="USA" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="facebook">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control type="text" placeholder="facebook.com/barber" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="twitter">
                  <Form.Label>Twitter</Form.Label>
                  <Form.Control type="text" placeholder="twitter.com/barber" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="linkedin">
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control type="text" placeholder="linkedin.com/barber" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="instagram">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control type="text" placeholder="instagram.com/barber" />
                </Form.Group>
              </Col>
            </Row>
            <h5 className="mt-4">Shop Image</h5>
            <Row className="mb-3">
              <Col md={6} className="text-center">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXewdagfM7G0-FJj9uEGPhWm0JEW6qbNHfg&s" rounded fluid />
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <Form.Group controlId="shopImage">
                  <Form.Label>Upload New Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="text-end">
                <Button variant="success">Save</Button>
                <Button variant="outline-secondary" className="ms-2">Cancel</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BarberProfileEditPage;
