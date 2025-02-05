import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BarberProfile = () => {
  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">
      <h3 className="mb-3 text-primary">Barber Profile</h3>
      <Row>
        {/* Profile Image */}
        <Col md={3} className="text-center">
          <Image src="https://via.placeholder.com/150" roundedCircle fluid />
          <h5 className="mt-3">John Doe</h5>
          <p className="text-muted">Professional Barber</p>
        </Col>

        {/* Profile Details */}
        <Col md={9}>
          <Card className="p-4">
            <Row className="mb-3">
              <Col md={6}><strong>Email:</strong> john.doe@example.com</Col>
              <Col md={6}><strong>Phone:</strong> +1234567890</Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}><strong>Gender:</strong> Male</Col>
              <Col md={6}><strong>Date of Birth:</strong> 10 Jan 1990</Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}><strong>Address:</strong> 123 Main Street, NY</Col>
              <Col md={6}><strong>Country:</strong> USA</Col>
            </Row>

            {/* Social Media */}
            <h5 className="mt-4">Social Media</h5>
            <Row className="mb-3">
              <Col md={6}><strong>Facebook:</strong> facebook.com/barber</Col>
              <Col md={6}><strong>Twitter:</strong> twitter.com/barber</Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}><strong>LinkedIn:</strong> linkedin.com/barber</Col>
              <Col md={6}><strong>Instagram:</strong> instagram.com/barber</Col>
            </Row>

            {/* Shop Images */}
            <h5 className="mt-4">Shop Images</h5>
            <Row>
              <Col md={4}>
                <Image src="https://via.placeholder.com/200" fluid rounded />
              </Col>
              <Col md={4}>
                <Image src="https://via.placeholder.com/200" fluid rounded />
              </Col>
              <Col md={4}>
                <Image src="https://via.placeholder.com/200" fluid rounded />
              </Col>
            </Row>

            {/* Edit Profile Button */}
            <Row className="mt-4">
              <Col className="text-end">
                <Button variant="primary">Edit Profile</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BarberProfile;
