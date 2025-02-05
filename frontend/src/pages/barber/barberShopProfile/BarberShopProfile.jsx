import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BarberProfile = () => {
  // Internal CSS styles
  const styles = {
    body: {
      background: "linear-gradient(to right, #ece9e6, #ffffff)",
      minHeight: "100vh",
      paddingTop: "30px",
    },
    myProfilePage: {
      backgroundColor: "white",
      margin: "60px auto",
      width: "80%",
      height: "auto",
      borderRadius: "10px",
      padding: "30px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    },
    card: {
      width: "100%",
      height: "100%",
      margin: "15px",
      borderRadius: "12px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
    },
    cardHover: {
      transform: "scale(1.02)",
    },
    cardImgTop: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
      margin: "15px 0",
      color: "#333",
    },
    cardDescription: {
      fontSize: "1rem",
      textAlign: "center",
      color: "#666",
      marginBottom: "15px",
    },
    cardRating: {
      color: "#FFD700",
      display: "flex",
      justifyContent: "center",
    },
    profileImage: {
      border: "4px solid #007bff",
      padding: "5px",
    },
    editButton: {
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "25px",
      padding: "10px 30px",
      fontSize: "1rem",
      fontWeight: "bold",
      transition: "0.3s",
    },
    editButtonHover: {
      backgroundColor: "#0056b3",
    },
    shopImage: {
      border: "2px solid #ddd",
      padding: "5px",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.body}>
      <Container style={styles.myProfilePage}>
        <h3 className="mb-4 text-primary text-center">Barber Profile</h3>
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col md={4} className="text-center">
            <Image
              src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
              roundedCircle
              fluid
              style={styles.profileImage}
            />
            <h5 className="mt-3">John Doe</h5>
            <p className="text-muted">Professional Barber</p>
          </Col>

          {/* Profile Details */}
          <Col md={8}>
            <Card style={styles.card}>
              <Row className="p-4">
                <Col xs={12} sm={6}>
                  <strong>Email:</strong> john.doe@example.com
                </Col>
                <Col xs={12} sm={6}>
                  <strong>Phone:</strong> +1234567890
                </Col>
              </Row>

              <Row className="p-4">
                <Col xs={12} sm={6}>
                  <strong>Gender:</strong> Male
                </Col>
                <Col xs={12} sm={6}>
                  <strong>Date of Birth:</strong> 10 Jan 1990
                </Col>
              </Row>

              <Row className="p-4">
                <Col xs={12} sm={6}>
                  <strong>Address:</strong> 123 Main Street, NY
                </Col>
                <Col xs={12} sm={6}>
                  <strong>Country:</strong> USA
                </Col>
              </Row>

              {/* Shop Images */}
              <h5 className="mt-4 text-center">Shop Images</h5>
              <Row className="p-3 d-flex justify-content-center">
                {[...Array(4)].map((_, idx) => (
                  <Col xs={6} sm={3} key={idx} className="text-center">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXewdagfM7G0-FJj9uEGPhWm0JEW6qbNHfg&s"
                      thumbnail
                      style={styles.shopImage}
                    />
                  </Col>
                ))}
              </Row>

              {/* Edit Profile Button */}
              <Row className="mt-4">
                <Col className="text-center">
                  <Button
                    style={styles.editButton}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#007bff")
                    }
                    className="px-4"
                  >
                    Edit Profile
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BarberProfile;
